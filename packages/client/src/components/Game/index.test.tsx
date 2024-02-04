import { render, screen } from '@testing-library/react'
import Game from './index'

const mockUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}))

test('Элемент игры рендерится', async () => {
  render(<Game />)
  const gameElement = screen.findByTestId('gameElement')
  expect(gameElement).toBeDefined()
})
