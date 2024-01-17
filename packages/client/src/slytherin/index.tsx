import { useEffect, useRef } from 'react'
import { Game } from './data/game'
import useEventListener from './utils/useEventListener'

function Slytherin() {
  const ref = useRef<HTMLCanvasElement>(null)
  const game: Game = new Game()
  let frameCount = 0
  const delayFrameCount = 10

  useEffect(() => {
    const canvas = ref.current
    game.setCanvas(canvas!)

    let animationFrameId: number

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render)

      if (++frameCount < delayFrameCount - game.speed || game.stoped) {
        return
      }
      frameCount = 0

      game.draw()
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useEventListener('keydown', game.onKeyDown as EventListener)
  useEventListener('keyup', game.onKeyUp as EventListener)

  return <canvas className="slytherin" ref={ref} />
}

export default Slytherin
