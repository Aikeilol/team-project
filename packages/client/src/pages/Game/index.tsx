import { useEffect, useRef, useState } from 'react'
import './style.css'
import { getRandomInt } from './utils/getRandomInt'
import GameEndDialog from '../../components/GameEndDialog'

function Game() {
  // Поле, на котором всё будет происходить, — тоже как бы переменная
  const ref = useRef<HTMLCanvasElement | null>(null)
  // Классическая змейка — двухмерная, сделаем такую же
  // Размер одной клеточки на поле — 16 пикселей
  const grid = 16
  // Служебная переменная, которая отвечает за скорость змейки
  let count = 0
  // А вот и сама змейка
  const snake: {
    x: number
    y: number
    dx: number
    dy: number
    cells: { x: number; y: number }[]
    maxCells: number
  } = {
    // Начальные координаты
    x: 160,
    y: 160,
    // Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
    dx: grid,
    dy: 0,
    // Тащим за собой хвост, который пока пустой
    cells: [],
    // Стартовая длина змейки — 4 клеточки
    maxCells: 4,
  }
  // А это — еда. Представим, что это красные яблоки.
  const apple = {
    // Начальные координаты яблока
    x: 320,
    y: 320,
  }

  const [openEndGameModal, setOpenEndGameModal] = useState(false)
  const [record, setRecord] = useState(0)
  const [score, setScore] = useState(0)

  let isStopped = false

  function startGame() {
    let requestId = 0
    document.addEventListener('keydown', setSnakeControllers)

    if (!isStopped && ref.current) {
      requestId = requestAnimationFrame(gameLoop)
    }
    return () => {
      document.removeEventListener('keydown', setSnakeControllers)
      cancelAnimationFrame(requestId)
    }
  }

  useEffect(() => startGame(), [])

  function gameLoop() {
    if (isStopped || !ref.current) {
      return
    }
    const canvas: HTMLCanvasElement = ref.current
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    // Дальше будет хитрая функция, которая замедляет скорость игры с 60 кадров в секунду до 15. Для этого она пропускает три кадра из четырёх, то есть срабатывает каждый четвёртый кадр игры. Было 60 кадров в секунду, станет 15.
    requestAnimationFrame(gameLoop)
    // Игровой код выполнится только один раз из четырёх, в этом и суть замедления кадров, а пока переменная count меньше четырёх, код выполняться не будет.
    if (++count < 8) {
      return
    }
    // Обнуляем переменную скорости
    count = 0
    context.clearRect(0, 0, canvas.width, canvas.height)
    moveSnake()
    checkMapEnd(canvas)
    moveSnakeBody()
    makeApple(context)
    checkCollisions(context)
  }

  function setSnakeControllers(e: KeyboardEvent) {
    if (e.code === 'ArrowLeft' && snake.dx === 0) {
      snake.dx = -grid
      snake.dy = 0
    } else if (e.code === 'ArrowUp' && snake.dy === 0) {
      snake.dy = -grid
      snake.dx = 0
    } else if (e.code === 'ArrowRight' && snake.dx === 0) {
      snake.dx = grid
      snake.dy = 0
    } else if (e.code === 'ArrowDown' && snake.dy === 0) {
      snake.dy = grid
      snake.dx = 0
    }
  }

  function moveSnake() {
    snake.x += snake.dx
    snake.y += snake.dy
  }

  function checkMapEnd(canvas: HTMLCanvasElement) {
    if (snake.x < 0) {
      snake.x = canvas.width - grid
    } else if (snake.x >= canvas.width) {
      snake.x = 0
    }
    if (snake.y < 0) {
      snake.y = canvas.height - grid
    } else if (snake.y >= canvas.height) {
      snake.y = 0
    }
  }

  function moveSnakeBody() {
    snake.cells.unshift({ x: snake.x, y: snake.y })
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop()
    }
  }

  function makeApple(context: CanvasRenderingContext2D) {
    context.fillStyle = 'red'
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1)
  }

  function checkCollisions(context: CanvasRenderingContext2D) {
    for (let i = 0; i < snake.cells.length; i++) {
      const isFirstCoord = i === 0
      const isCurrentCoordEqvLastCoord =
        snake.cells[i].y === snake.y && snake.cells[i].x === snake.x

      if (!isFirstCoord && isCurrentCoordEqvLastCoord) {
        isStopped = true
        setOpenEndGameModal(true)
        break
      }
    }

    const isSameCoordWithApple = snake.x === apple.x && snake.y === apple.y

    if (isSameCoordWithApple) {
      updateScore()

      // увеличиваем длину змейки
      snake.maxCells++
      // Рисуем новое яблочко
      apple.x = getRandomInt(0, 50) * grid
      apple.y = getRandomInt(0, 50) * grid
    }

    snake.cells.forEach(function (cell) {
      // Чтобы создать эффект клеточек, делаем квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
      context.fillStyle = 'yellow'
      context.fillRect(cell.x, cell.y, grid - 1, grid - 1)
    })
  }

  function updateScore() {
    setScore(prevScore => prevScore + 1)
    if (score + 1 > record) {
      setRecord(prevRecord => prevRecord + 1)
    }
  }

  function setInitialGameState() {
    snake.x = 160
    snake.y = 160
    snake.cells = []
    snake.maxCells = 4
    snake.dx = grid
    snake.dy = 0
    // Ставим яблочко в случайное место
    apple.x = getRandomInt(0, 50) * grid
    apple.y = getRandomInt(0, 50) * grid
  }

  function startAgain() {
    setOpenEndGameModal(false)
    setScore(0)
    setInitialGameState()
    isStopped = false
    startGame()
  }

  useEffect(() => {
    if (score > record) {
      setRecord(score)
    }
  }, [score, record])

  return (
    <div className="game-body">
      <GameEndDialog
        isOpen={openEndGameModal}
        score={score}
        record={record}
        startAgain={startAgain}
      />
      <canvas ref={ref} width="800" height="800"></canvas>
    </div>
  )
}

export default Game
