import { useEffect, useRef, useState } from 'react'
import FullScreenButton from '../FullScreenButton'
import GameEndDialog from '../GameEndDialog'
import { Snake } from './Snake'
import { Apple } from './Apple'
import { sprites } from './constants'

import './style.css'

function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const snakeRef = useRef(new Snake())
  const appleRef = useRef(new Apple())

  const [openEndGameModal, setOpenEndGameModal] = useState(false)
  const [isStopped, setIsStopped] = useState(false)

  const [record, setRecord] = useState(0)
  const [score, setScore] = useState(0)

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

    // Очищаем поле
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(sprites.sandSprite, 0, 0)

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
      apple.move()

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

  return (
    <div id="gameElement">
      <FullScreenButton elRef={canvasRef} />
      <GameEndDialog
        isOpen={openEndGameModal}
        score={score}
        record={record}
        startAgain={startAgain}
      />
      <canvas ref={canvasRef} width="640" height="640"></canvas>
    </div>
  )
}

export default Game
