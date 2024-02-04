import { getRandomInt } from './getRandomInt'

describe('Функция получения случайного числа', () => {
  test('Функция возвращает число', () => {
    expect(typeof getRandomInt(0, 10)).toBe('number')
  })

  test('Значения не выходят за заданный диапазон', () => {
    expect(getRandomInt(0, 10)).toBeGreaterThanOrEqual(0)
    expect(getRandomInt(0, 10)).toBeLessThanOrEqual(10)
  })
})
