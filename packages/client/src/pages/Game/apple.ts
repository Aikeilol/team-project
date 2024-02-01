import { GRID_SIZE, SPRITE_GRID_SIZE, GRID_COUNT } from './constants'
import { getRandomInt } from './utils/getRandomInt'
export class Apple {
  x = GRID_SIZE * 20
  y = GRID_SIZE * 20

  draw(context: CanvasRenderingContext2D, sprites: HTMLImageElement) {
    context.drawImage(
      sprites,
      0 * SPRITE_GRID_SIZE,
      3 * SPRITE_GRID_SIZE,
      SPRITE_GRID_SIZE,
      SPRITE_GRID_SIZE,
      this.x,
      this.y,
      GRID_SIZE,
      GRID_SIZE
    )
  }

  move() {
    this.x = getRandomInt(0, GRID_COUNT) * GRID_SIZE
    this.y = getRandomInt(0, GRID_COUNT) * GRID_SIZE
  }
}
