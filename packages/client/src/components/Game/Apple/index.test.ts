import { Apple } from './index'

describe('Компонент игры "яблоко"', () => {
  const apple = new Apple()
  test('Значения х и у являются числами', () => {
    expect(typeof apple.x).toBe('number')
    expect(typeof apple.y).toBe('number')
  })
  // test('метод move меняет меняет поля x и y на number', () => {
  //   apple.move()
  //   expect(typeof apple.x).toBe('number')
  //   expect(typeof apple.y).toBe('number')
  // })
})
