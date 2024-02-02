import { Button } from '@mui/material'
import './style.css'
import { FC, RefObject } from 'react'

interface IProps {
  elRef: RefObject<HTMLCanvasElement | null>
}
interface DocumentWithFullscreen {
  exitFullscreen?: () => void
  msExitFullscreen?: () => void
  mozCancelFullScreen?: () => void
  webkitExitFullscreen?: () => void
}
interface DocumentElementWithFullscreen extends HTMLCanvasElement {
  msRequestFullscreen?: () => void
  mozRequestFullScreen?: () => void
  webkitRequestFullscreen?: () => void
}
const FullScreenButton: FC<IProps> = ({ elRef }) => {
  const requestFullScreen = (
    element: Partial<DocumentElementWithFullscreen>
  ) => {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    }
  }

  const exitFullScreen = (doc: Partial<DocumentWithFullscreen>) => {
    if (doc.exitFullscreen) {
      doc.exitFullscreen()
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen()
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen()
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen()
    }
  }

  const handleFullscreen = () => {
    const el = elRef.current
    if (!document.fullscreenElement && el) {
      requestFullScreen(el)
    } else {
      exitFullScreen(document)
    }
  }

  return (
    <Button
      className={'fullscreen-button'}
      variant="outlined"
      onClick={handleFullscreen}>
      {'Fullscreen'}
    </Button>
  )
}

export default FullScreenButton
