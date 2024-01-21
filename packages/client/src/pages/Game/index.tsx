import { Canvas } from './components/Canvas'
import './style.css'

function Game() {
  const draw = (
    context: CanvasRenderingContext2D,
    coordX: number,
    coordY: number
  ) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)

    context.fillStyle = 'grey'
    const deltaX = coordX % 800
    const deltaY = coordY % 800
    context.fillRect(deltaX, deltaY, 10, 10)
  }

  return (
    <div className="game-body">
      <Canvas draw={draw} width="100%" height="100%" />
    </div>
  )
}

export default Game
