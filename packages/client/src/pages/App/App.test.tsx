import App from './index'
import { render } from '@testing-library/react'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  const result = render(<App />)
  const app = result.container.querySelector('.App')
  expect(app).toBeDefined()
})
