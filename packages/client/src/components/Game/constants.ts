import snakeImages from './images/snake-graphics.png'
import sandImage from './images/sand.png'

// размер клетки
export const GRID_SIZE = 16
// размер одного спрайта
export const SPRITE_GRID_SIZE = 64

const isSSR = typeof document === 'undefined'

// Спрайты змейки и яблока
let gameSprites: HTMLImageElement | null = null
if (!isSSR) {
  gameSprites = new Image()
  gameSprites.src = snakeImages
}

// Спрайт песка
let sandSprite: HTMLImageElement | null = null
if (!isSSR) {
  sandSprite = new Image()
  sandSprite.src = sandImage
}

export const sprites = { gameSprites, sandSprite }
