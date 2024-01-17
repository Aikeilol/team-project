const defaultX = 0
const defaultY = 0
const defaultVx = 1
const defaultVy = 0
const defaultSize = 10
const defaultStrokeColor = 'green'
const defaultTail = 5

export class Snake {
  x: number = defaultX
  y: number = defaultY
  vx: number = defaultVx
  vy: number = defaultVy
  size: number = defaultSize
  strokeColor: string = defaultStrokeColor
  tail: number = defaultTail
  paths: { x: number; y: number }[] = []

  reInit = () => {
    this.x = defaultX
    this.y = defaultY
    this.vx = defaultVx
    this.vy = defaultVy
    this.tail = defaultTail
    this.paths = []
  }

  draw = (
    shouldChangeDirection: boolean,
    vx: number,
    vy: number,
    canvasWidth: number,
    canvasHeight: number,
    context: CanvasRenderingContext2D
  ) => {
    if (shouldChangeDirection) {
      this.vx = vx
      this.vy = vy
    }

    const newX = this.x + this.vx
    const newY = this.y + this.vy
    if (newX > canvasWidth || newX < 0) {
      return false
    }
    if (newY > canvasHeight || newY < 0) {
      return false
    }

    for (let i = this.paths.length - 2; i >= 0; i--) {
      this.paths[i + 1] = { ...this.paths[i] }
    }

    this.x = this.x + this.vx * this.size
    this.y = this.y + this.vy * this.size

    const samePosition = this.paths.find(path => {
      return path.x === this.x && path.y === this.y
    })

    if (samePosition) {
      return false
    }

    this.paths.unshift({ x: this.x, y: this.y })

    if (this.paths.length > this.tail) {
      this.paths.pop()
    }

    context.fillStyle = this.strokeColor
    this.paths.forEach(path => {
      context.fillRect(path.x, path.y, this.size, this.size)
    })

    return true
  }
}
