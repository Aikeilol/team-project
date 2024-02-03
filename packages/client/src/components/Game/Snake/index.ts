import { GRID_SIZE, SPRITE_GRID_SIZE } from '../constants'
import { Apple } from '../Apple'

export class Snake {
  x: number = GRID_SIZE * 10
  y: number = GRID_SIZE * 10
  dx: number = GRID_SIZE
  dy = 0
  cells: { x: number; y: number }[] = []
  maxCells = 4

  reInit = () => {
    this.x = GRID_SIZE * 10
    this.y = GRID_SIZE * 10
    this.cells = []
    this.maxCells = 4
    this.dx = GRID_SIZE
    this.dy = 0
  }

  setSnakeControllers = (e: KeyboardEvent) => {
    if (e.code === 'ArrowLeft' && this.dx === 0) {
      this.dx = -GRID_SIZE
      this.dy = 0
    } else if (e.code === 'ArrowUp' && this.dy === 0) {
      this.dy = -GRID_SIZE
      this.dx = 0
    } else if (e.code === 'ArrowRight' && this.dx === 0) {
      this.dx = GRID_SIZE
      this.dy = 0
    } else if (e.code === 'ArrowDown' && this.dy === 0) {
      this.dy = GRID_SIZE
      this.dx = 0
    }
  }

  move = () => {
    this.x += this.dx
    this.y += this.dy

    this.moveBody()
  }

  moveBody = () => {
    this.cells.unshift({ x: this.x, y: this.y })
    if (this.cells.length > this.maxCells) {
      this.cells.pop()
    }
  }

  snakeIsOutTheField = (context: CanvasRenderingContext2D) => {
    return (
      this.x < 0 ||
      this.x >= context.canvas.width ||
      this.y < 0 ||
      this.y >= context.canvas.height
    )
  }

  appleWasEaten = (apple: Apple) => {
    return this.x === apple.x && this.y === apple.y
  }

  hasCollisions = () => {
    for (let i = 0; i < this.cells.length; i++) {
      const isFirstCoord = i === 0
      const isCurrentCoordEqvLastCoord =
        this.cells[i].y === this.y && this.cells[i].x === this.x

      if (!isFirstCoord && isCurrentCoordEqvLastCoord) {
        return true
      }
    }

    return false
  }

  draw = (context: CanvasRenderingContext2D, sprites: HTMLImageElement) => {
    // такую коротку змейку не будем рисовать
    if (this.cells.length < 2) {
      return
    }
    this.cells.forEach((cell, index) => {
      // координаты спрайта, который будем рисовать
      let tx = 0
      let ty = 0
      const nextCell = this.cells[index + 1]
      const prevCell = this.cells[index - 1]

      // если голова
      if (index === 0) {
        if (cell.y < nextCell.y) {
          // Up
          tx = 3
          ty = 0
        } else if (cell.x > nextCell.x) {
          // Right
          tx = 4
          ty = 0
        } else if (cell.y > nextCell.y) {
          // Down
          tx = 4
          ty = 1
        } else if (cell.x < nextCell.x) {
          // Left
          tx = 3
          ty = 1
        }
        // если хвост
      } else if (index === this.cells.length - 1) {
        if (prevCell.y < cell.y) {
          // Up
          tx = 3
          ty = 2
        } else if (prevCell.x > cell.x) {
          // Right
          tx = 4
          ty = 2
        } else if (prevCell.y > cell.y) {
          // Down
          tx = 4
          ty = 3
        } else if (prevCell.x < cell.x) {
          // Left
          tx = 3
          ty = 3
        }
      } else {
        if (
          (prevCell.x < cell.x && nextCell.x > cell.x) ||
          (nextCell.x < cell.x && prevCell.x > cell.x)
        ) {
          // Horizontal Left-Right
          tx = 1
          ty = 0
        } else if (
          (prevCell.x < cell.x && nextCell.y > cell.y) ||
          (nextCell.x < cell.x && prevCell.y > cell.y)
        ) {
          // Angle Left-Down
          tx = 2
          ty = 0
        } else if (
          (prevCell.y < cell.y && nextCell.y > cell.y) ||
          (nextCell.y < cell.y && prevCell.y > cell.y)
        ) {
          // Vertical Up-Down
          tx = 2
          ty = 1
        } else if (
          (prevCell.y < cell.y && nextCell.x < cell.x) ||
          (nextCell.y < cell.y && prevCell.x < cell.x)
        ) {
          // Angle Top-Left
          tx = 2
          ty = 2
        } else if (
          (prevCell.x > cell.x && nextCell.y < cell.y) ||
          (nextCell.x > cell.x && prevCell.y < cell.y)
        ) {
          // Angle Right-Up
          tx = 0
          ty = 1
        } else if (
          (prevCell.y > cell.y && nextCell.x > cell.x) ||
          (nextCell.y > cell.y && prevCell.x > cell.x)
        ) {
          // Angle Down-Right
          tx = 0
          ty = 0
        }
      }

      context.drawImage(
        sprites,
        tx * SPRITE_GRID_SIZE,
        ty * SPRITE_GRID_SIZE,
        SPRITE_GRID_SIZE,
        SPRITE_GRID_SIZE,
        cell.x,
        cell.y,
        GRID_SIZE,
        GRID_SIZE
      )
    })
  }
}
