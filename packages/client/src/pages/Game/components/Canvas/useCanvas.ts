import { useEffect, useRef, useState } from 'react'

export const useCanvas = (
  draw: (
    context: CanvasRenderingContext2D,
    coordX: number,
    coordY: number
  ) => void
) => {
  const [key, setKey] = useState('KeyD')
  const [savedSnakeX, setSavedSnakeX] = useState(200)
  const [savedSnakeY, setSavedSnakeY] = useState(200)
  const [appleX, setAppleX] = useState(200)
  const [appleY, setAppleY] = useState(200)

  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      const canvas: HTMLCanvasElement = ref.current
      const context = canvas.getContext('2d') as CanvasRenderingContext2D
      let animationId = 0

      let snakeX = savedSnakeX
      let snakeY = savedSnakeY

      const keydownEvent = window.addEventListener('keydown', e => {
        setKey(e.code)
      })

      const renderer = () => {
        console.log(key)
        if (key === 'KeyD') {
          snakeX++
          setSavedSnakeX(snakeX)
        }
        if (key === 'KeyA') {
          snakeX--
          setSavedSnakeX(snakeX)
        }
        if (key === 'KeyS') {
          snakeY++
          setSavedSnakeY(snakeY)
        }
        if (key === 'KeyW') {
          snakeY--
          setSavedSnakeY(snakeY)
        }

        draw(context, snakeX, snakeY)
        drawApple(context, appleX, appleY)
        checkCollision(snakeX, snakeY)

        animationId = window.requestAnimationFrame(renderer)
      }

      renderer()

      return () => {
        const keydownEventType =
          keydownEvent as unknown as EventListenerOrEventListenerObject
        window.removeEventListener('keydown', keydownEventType)
        window.cancelAnimationFrame(animationId)
      }
    }
  }, [key, appleX, appleY])

  const drawApple = (
    context: CanvasRenderingContext2D,
    appleX: number,
    appleY: number
  ) => {
    context.fillStyle = 'red'
    context.fillRect(appleX, appleY, 10, 10)
  }

  const checkCollision = (snakeX: number, snakeY: number) => {
    // если позиции яблока и головы змейки совпали
    if (appleX == snakeX && appleY == snakeY) {
      console.log(appleX, snakeX, appleY, snakeY)

      // выводим яблоко в случайном месте по горизонтали
      setAppleX(Math.floor(Math.random() * 800))
      // выводим яблоко в случайном месте по вертикали
      setAppleY(Math.floor(Math.random() * 800))
    }
  }

  return ref
}
