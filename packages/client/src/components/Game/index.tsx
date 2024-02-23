import React, { useEffect, useRef, useState } from 'react'
import FullScreenButton from '../FullScreenButton'
import GameEndDialog from '../GameEndDialog'
import { Snake } from './Snake'
import { Apple } from './Apple'
import { sprites, GRID_SIZE } from './constants'

import './style.css'
import { getUser } from '../../utils/scripts/api/yandexApi'
import { addUserToLeaderBoard } from '../../utils/scripts/api/leaderBoardApi'
import { IUser } from '../../utils/scripts/api/types'
import { RATING_FIELD_NAME, TEAM_NAME } from '../../utils/scripts/constants'

function Game() {
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

  useEffect(() => {
    let frameCount = 0

    const animate = () => {
      requestRef.current = requestAnimationFrame(animate)

      // Игровой код выполнится только один раз из четырёх, в этом и суть замедления кадров, а пока переменная count меньше четырёх, код выполняться не будет.
      if (++frameCount < 8 || isStopped) {
        return
      }
      // Обнуляем переменную скорости
      frameCount = 0

      gameLoop()
    }

    animate()

    return () => {
      cancelAnimationFrame(requestRef.current)
    }
  }, [isStopped])

  function gameLoop() {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D

    if (!canvas || !context) {
      return
    }

    resizeCanvasToDisplaySize(canvas)

    // Очищаем поле
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(sprites.sandSprite, 0, 0, canvas.width, canvas.height)

    const snake = snakeRef.current
    const apple = appleRef.current

    snake.move()

    if (snake.snakeIsOutTheField(context) || snake.hasCollisions()) {
      snake.reInit()
      setIsStopped(true)
      setOpenEndGameModal(true)
    }

    if (snake.appleWasEaten(apple)) {
      // увеличиваем длину змейки
      snake.maxCells++
      // Рисуем новое яблочко
      apple.move(canvas)

      updateScore()
    }

    snake.draw(context, sprites.gameSprites)
    apple.draw(context, sprites.gameSprites)
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
