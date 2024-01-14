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
    context.fillRect(10 + deltaX, 10 + deltaY, 10, 10)
  }

  return (
    <div className="game-body">
      <Canvas draw={draw} width="1000" height="800" />
    </div>
  )
}

export default Game
