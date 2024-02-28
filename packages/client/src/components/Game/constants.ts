import snakeImages from './images/snake-graphics.png'
import sandImage from './images/sand.png'
import stepSoundSrc from './sounds/step_sound.mp3'
import eatingSoundSrc from './sounds/eating_sound.mp3'
import loseSoundSrc from './sounds/lose_sound.mp3'

// размер клетки
export const GRID_SIZE = 16
// размер одного спрайта
export const SPRITE_GRID_SIZE = 64

export const getSprites = () => {
  // Спрайты змейки и яблока
  const gameSprites = new Image()
  gameSprites.src = snakeImages

  // Спрайт песка
  const sandSprite = new Image()
  sandSprite.src = sandImage

  return { gameSprites, sandSprite }
}

export const getSounds = () => {
  const stepSound = new Audio()
  stepSound.src = stepSoundSrc
  stepSound.volume = 0.4

  const eatingSound = new Audio()
  eatingSound.src = eatingSoundSrc
  eatingSound.volume = 0.1

  const loseSound = new Audio()
  loseSound.src = loseSoundSrc
  loseSound.volume = 0.1

  return { stepSound, eatingSound, loseSound }
}
