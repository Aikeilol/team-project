import { GRID_SIZE, SPRITE_GRID_SIZE } from '../constants'
import { getRandomInt } from '../utils/getRandomInt'

export class Apple {
  x = GRID_SIZE * 20
  y = GRID_SIZE * 20

  draw(context: CanvasRenderingContext2D, sprites: HTMLImageElement) {
    context.drawImage(
      sprites,
      0,
      3 * SPRITE_GRID_SIZE,
      SPRITE_GRID_SIZE,
      SPRITE_GRID_SIZE,
      this.x,
      this.y,
      GRID_SIZE,
      GRID_SIZE
    )
  }

  move(canvas: HTMLCanvasElement) {
    const gridCountX = Math.floor(canvas.width / GRID_SIZE)
    const gridCountY = Math.floor(canvas.height / GRID_SIZE)
    this.x = getRandomInt(0, gridCountX) * GRID_SIZE
    this.y = getRandomInt(0, gridCountY) * GRID_SIZE
  }
}
