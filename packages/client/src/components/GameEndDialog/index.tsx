import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import React, { FC, RefObject } from 'react'
import { useNavigate } from 'react-router-dom'
import ReplayIcon from '@mui/icons-material/Replay'
import MenuIcon from '@mui/icons-material/Menu'

export interface IProps {
  score: number
  record: number
  isOpen: boolean
  startAgain: () => void
  containerRef: RefObject<HTMLElement>
}

const GameEndDialog: FC<IProps> = ({
  startAgain,
  score,
  record,
  isOpen,
  containerRef,
}) => {
  const navigate = useNavigate()
  const handleStartAgain = () => {
    startAgain()
  }
  const handleToMainMenu = () => {
    navigate('/')
  }

  return (
    <Dialog open={isOpen} container={containerRef.current}>
      <DialogContent sx={{ padding: '15px', background: 'transparent' }}>
        <DialogTitle align="center" variant="h5">
          Игра завершена
        </DialogTitle>
        <DialogContentText sx={{ textAlign: 'center' }}>
          Набрано очков: {score}
        </DialogContentText>
        <DialogContentText sx={{ textAlign: 'center', paddingBottom: '10px' }}>
          Рекорд: {record}
        </DialogContentText>
        <DialogActions sx={{ gap: '16px' }}>
          <Button
            sx={{ display: 'flex', gap: '5px' }}
            variant="contained"
            onClick={handleStartAgain}>
            <ReplayIcon /> Начать заново
          </Button>
          <Button
            sx={{ display: 'flex', gap: '5px' }}
            variant="contained"
            onClick={handleToMainMenu}>
            <MenuIcon /> На главную
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default GameEndDialog
