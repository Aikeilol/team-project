import React, { useEffect, useRef, useState, useCallback } from 'react'
import FullScreenButton from '../FullScreenButton'
import GameEndDialog from '../GameEndDialog'
import { Snake } from './Snake'
import { Apple } from './Apple'
import { GRID_SIZE, getSounds, getSprites } from './constants'
import { useAppContext } from '../../context/AppContext'

import { getUser } from '../../utils/scripts/api/yandexApi'
import { addUserToLeaderBoard } from '../../utils/scripts/api/leaderBoardApi'
import { IUser } from '../../utils/scripts/api/types'
import { RATING_FIELD_NAME, TEAM_NAME } from '../../utils/scripts/constants'

import './style.css'

// количество кадров в секунду
const fps = 15
const msPerFrame = 1000 / fps

function Game() {
  const { notifications } = useAppContext()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const snakeRef = useRef(new Snake())
  const appleRef = useRef(new Apple())

  const [openEndGameModal, setOpenEndGameModal] = useState(false)
  const [isStopped, setIsStopped] = useState(false)

  const [record, setRecord] = useState(0)
  const [score, setScore] = useState(0)

  const [userData, setUserData] = useState<IUser>()

  const requestRef = useRef(0)
  const firstFrameTime = useRef(performance.now())

  const showNotificationWithResult = useCallback(() => {
    notifications.sendNotification(
      `Набрано очков: ${score}. Рекорд: ${record}.`
    )
  }, [score, record])

  useEffect(() => {
    window.addEventListener('keydown', snakeRef.current.setSnakeControllers)

    return () => {
      window.removeEventListener(
        'keydown',
        snakeRef.current.setSnakeControllers
      )
    }
  }, [])
  useEffect(() => {
    getUser().then(response => {
      if (response?.data) {
        setUserData(response.data)
      }
    })
  }, [])
  useEffect(() => {
    if (!userData) {
      return
    }
    const postData = {
      data: {
        id: userData.id,
        userFirstName: userData.first_name,
        userDisplayName: userData.display_name,
        userAvatar: userData.avatar,
        ratingSlytherinTeam: score,
      },
      ratingFieldName: RATING_FIELD_NAME,
      teamName: TEAM_NAME,
    }
    if (openEndGameModal && score > 0) {
      addUserToLeaderBoard(postData).then()
    }
  }, [openEndGameModal, score, userData])

  const animate = (now: number) => {
    requestRef.current = requestAnimationFrame(animate)

    const msPassed = now - firstFrameTime.current
    if (msPassed < msPerFrame) {
      return
    }

    const excessTime = msPassed % msPerFrame

    firstFrameTime.current = now - excessTime

    gameLoop()
  }

  useEffect(() => {
    if (!isStopped) {
      requestRef.current = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(requestRef.current)
    }

    return () => {
      cancelAnimationFrame(requestRef.current)
    }
  }, [isStopped, showNotificationWithResult])

  function gameLoop() {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D

    const { gameSprites, sandSprite } = getSprites()

    const { eatingSound, loseSound } = getSounds()

    if (!canvas || !context) {
      return
    }

    resizeCanvasToDisplaySize(canvas)

    // Очищаем поле
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(sandSprite, 0, 0, canvas.width, canvas.height)

    const snake = snakeRef.current
    const apple = appleRef.current

    snake.move()

    if (snake.snakeIsOutTheField(context) || snake.hasCollisions()) {
      snake.reInit()

      setIsStopped(true)
      setOpenEndGameModal(true)

      loseSound.play()

      showNotificationWithResult()
    }

    if (snake.appleWasEaten(apple)) {
      // увеличиваем длину змейки
      snake.maxCells++
      // Рисуем новое яблочко
      apple.move(canvas)

      updateScore()

      eatingSound.play()
    }

    snake.draw(context, gameSprites)
    apple.draw(context, gameSprites)
  }

  function updateScore() {
    setScore(prevScore => prevScore + 1)
  }

  function startAgain() {
    setOpenEndGameModal(false)
    setScore(0)
    setIsStopped(false)
  }

  useEffect(() => {
    if (score > record) {
      setRecord(score)
    }
  }, [score, record])

  const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    // Устанавливаем размеры canvas в соответствии с размерами контейнера (высота и ширина кратны размеру клетки)
    canvas.width = canvas.offsetWidth - (canvas.offsetWidth % GRID_SIZE)
    canvas.height = canvas.offsetHeight - (canvas.offsetHeight % GRID_SIZE)
  }

  return (
    <>
      <FullScreenButton elRef={containerRef} />
      <div className="game-container" ref={containerRef}>
        <GameEndDialog
          isOpen={openEndGameModal}
          score={score}
          record={record}
          startAgain={startAgain}
          containerRef={containerRef}
        />
        <canvas ref={canvasRef} className="game-board"></canvas>
      </div>
    </>
  )
}

export default Game
