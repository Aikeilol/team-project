import { useEffect, useRef, useState } from 'react'

export const useCanvas = (
  draw: (
    context: CanvasRenderingContext2D,
    coordX: number,
    coordY: number
  ) => void
) => {
  const [key, setKey] = useState('KeyD')
  const [savedCoordX, setSavedCoordX] = useState(0)
  const [savedCoordY, setSavedCoordY] = useState(0)
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      const canvas: HTMLCanvasElement = ref.current
      const context = canvas.getContext('2d') as CanvasRenderingContext2D
      let animationId = 0
      console.log(savedCoordX, savedCoordY)

      let coordX = savedCoordX
      let coordY = savedCoordY

      window.addEventListener('keydown', e => {
        setKey(e.code)
        return
      })

      const renderer = () => {
        console.log(key)
        if (key === 'KeyD') {
          coordX++
          setSavedCoordX(coordX)
        }
        if (key === 'KeyA') {
          coordX--
          setSavedCoordX(coordX)
        }
        if (key === 'KeyS') {
          coordY++
          setSavedCoordY(coordY)
        }
        if (key === 'KeyW') {
          coordY--
          setSavedCoordY(coordY)
        }

        draw(context, coordX, coordY)
        animationId = window.requestAnimationFrame(renderer)
      }

      renderer()

      return () => {
        window.cancelAnimationFrame(animationId)
      }
    }
  }, [key])

  return ref
}
