import React, { render, screen } from '@testing-library/react'
import Game from './index'
import { AppContext } from '../../context/AppContext'

const mockUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}))

test('Элемент игры рендерится', async () => {
  render(
    <AppContext.Provider value={{}}>
      <Game />
    </AppContext.Provider>
  )
  const gameElement = screen.findByTestId('gameElement')
  expect(gameElement).toBeDefined()
})
