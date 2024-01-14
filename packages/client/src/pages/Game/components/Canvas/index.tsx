import { useCanvas } from './useCanvas'

type props = {
  draw: (
    context: CanvasRenderingContext2D,
    coordX: number,
    coordY: number
  ) => void
  width: string
  height: string
}

export const Canvas = ({ draw, width, height }: props) => {
  const ref = useCanvas(draw)

  return <canvas ref={ref} width={width} height={height}></canvas>
}
