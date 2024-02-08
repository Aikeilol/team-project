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
  test('hasCollisions работает правильно', () => {
    snake.cells = [
      { x: 272, y: 464 },
      { x: 272, y: 480 },
      { x: 256, y: 480 },
      { x: 256, y: 464 },
      { x: 274, y: 464 },
      { x: 288, y: 464 },
      { x: 288, y: 448 },
    ]
    //проверяем что элемент головы не затрагивает механизм столкновений
    snake.x = 272
    snake.y = 464
    expect(snake.hasCollisions()).toBeFalsy()
    //обнаружение столкновений работает правильно
    snake.x = 272
    snake.y = 480
    expect(snake.hasCollisions()).toBeTruthy()
    //при отсутствии столкновений работает правильно
    snake.x = 111
    snake.y = 111
    expect(snake.hasCollisions()).toBeFalsy()
  })
})
