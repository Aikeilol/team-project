import { Snake } from './snake'
import { Apple, generateApples } from './apple'
import { Direction } from './direction'

const defaultApplesCount = 10

export class Game {
  canvasWidth = 300
  canvasHeight = 300
  context?: CanvasRenderingContext2D

  speed = 0.1
  directionVectorByKeys: Direction = {
    vx: 1,
    vy: 0,
  }
  getNewDirectionFromKeys = false
  stoped = false

  apples: Apple[] = []
  snake = new Snake()

  setCanvas = (canvas: HTMLCanvasElement) => {
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
    console.log(canvas, canvas.getBoundingClientRect())
    this.resizeCanvasToDisplaySize(canvas)
    this.context = canvas.getContext('2d')!
  }

  draw = () => {
    if (!this.context) {
      return
    }
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

    this.context.fillStyle = 'rgba(0,0,0)'
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

    this.apples = this.apples.filter(apple => {
      if (apple.checkCollision(this.snake)) {
        this.snake.tail += 2
        this.speed += 0.2
        return false
      }
      return true
    })

    if (this.apples.length < defaultApplesCount) {
      this.apples = this.apples.concat(
        generateApples(
          defaultApplesCount - this.apples.length,
          this.canvasWidth,
          this.canvasHeight
        )
      )
    }
    this.apples.forEach(apple => apple.draw(this.context!))
    const successDraw = this.snake.draw(
      this.getNewDirectionFromKeys,
      this.directionVectorByKeys.vx,
      this.directionVectorByKeys.vy,
      this.canvasWidth,
      this.canvasHeight,
      this.context
    )

    if (!successDraw) {
      this.snake.reInit()
      this.speed = 0.1
    }
  }

  resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      this.stoped = !this.stoped
    }

    this.getNewDirectionFromKeys = true

    if (e.code === 'ArrowUp') {
      this.directionVectorByKeys = { vx: 0, vy: -1 }
    } else if (e.code === 'ArrowDown') {
      this.directionVectorByKeys = { vx: 0, vy: 1 }
    } else if (e.code === 'ArrowLeft') {
      this.directionVectorByKeys = { vx: -1, vy: 0 }
    } else if (e.code === 'ArrowRight') {
      this.directionVectorByKeys = { vx: 1, vy: 0 }
    }
  }

  onKeyUp = () => {
    this.getNewDirectionFromKeys = false
  }
}
