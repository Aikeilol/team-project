import { App } from './App'
import { render, screen } from '@testing-library/react'

// global.fetch = jest.fn(() =>
//   Promise.resolve({ json: () => Promise.resolve('hey') })
// )

test('Корневой элемент рендерится', async () => {
  render(<App />)
  const app = screen.findByTestId('App')
  expect(app).toBeDefined()
})
