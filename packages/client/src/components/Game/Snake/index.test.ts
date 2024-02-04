import { Snake } from './index'

describe('Компонент игры "Змейка"', () => {
  const snake = new Snake()
  test('Значения класса соответствуют своим типам', () => {
    expect(typeof snake.x).toBe('number')
    expect(typeof snake.y).toBe('number')
    expect(typeof snake.dx).toBe('number')
    expect(typeof snake.dy).toBe('number')
    expect(Array.isArray(snake.cells)).toBeTruthy()
    expect(typeof snake.maxCells).toBe('number')
  })
  test('Содержит основные методы', () => {
    expect(snake.hasCollisions).toBeDefined()
    expect(snake.move).toBeDefined()
    expect(snake.moveBody).toBeDefined()
    expect(snake.reInit).toBeDefined()
    expect(snake.setSnakeControllers).toBeDefined()
    expect(snake.snakeIsOutTheField).toBeDefined()
    expect(snake.draw).toBeDefined()
  })
})
