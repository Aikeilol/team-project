import snakeImages from './images/snake-graphics.png'
import sandImage from './images/sand.png'

// размер клетки
export const GRID_SIZE = 16
// размер одного спрайта
export const SPRITE_GRID_SIZE = 64

// Спрайты змейки и яблока
const gameSprites = new Image()
gameSprites.src = snakeImages

// Спрайт песка
const sandSprite = new Image()
sandSprite.src = sandImage

export const sprites = { gameSprites, sandSprite }
