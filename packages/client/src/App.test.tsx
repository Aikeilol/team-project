import { App } from './App'
import { render } from '@testing-library/react'

// global.fetch = jest.fn(() =>
//   Promise.resolve({ json: () => Promise.resolve('hey') })
// )

test('Корневой элемент рендерится', async () => {
  const result = render(<App />)
  const app = result.container.querySelector('#App')
  expect(app).toBeDefined()
})
