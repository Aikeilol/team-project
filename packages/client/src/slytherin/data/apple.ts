import { Snake } from './snake'
import { generateColor, getRandomInt } from '../utils'

const defaultSize = 20

export class Apple {
  x: number
  y: number
  size = defaultSize
  strokeColor: string

  constructor(x: number, y: number, strokeColor: string) {
    this.x = x
    this.y = y
    this.strokeColor = strokeColor
  }

  draw = (context: CanvasRenderingContext2D) => {
    context.fillStyle = this.strokeColor
    context.fillRect(this.x, this.y, this.size, this.size)
  }

  checkCollision = (snake: Snake) => {
    if (
      snake.x < this.x + this.size &&
      snake.x + snake.size > this.x &&
      snake.y < this.y + this.size &&
      snake.y + snake.size > this.y
    ) {
      return true
    }
    return false
  }
}

export function generateApples(
  amount: number,
  canvasWidth: number,
  canvasHeight: number
) {
  const treasuresArray = []
  for (let i = 0; i < amount; i++) {
    treasuresArray.push(
      new Apple(
        getRandomInt(canvasWidth - defaultSize),
        getRandomInt(canvasHeight - defaultSize),
        generateColor()
      )
    )
  }

  return treasuresArray
}
