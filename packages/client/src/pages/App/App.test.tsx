import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './index'
import { store } from '../../store/store'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  const result = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const app = result.container.querySelector('#App')
  expect(app).toBeDefined()
})
