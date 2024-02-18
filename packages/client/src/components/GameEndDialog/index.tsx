import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { FC, RefObject, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReplayIcon from '@mui/icons-material/Replay'
import MenuIcon from '@mui/icons-material/Menu'
import { addUserToLeaderBoard } from '../../utils/scripts/api/leaderBoardApi'
import { IUser } from '../../utils/scripts/api/types'
import { getUser } from '../../utils/scripts/api/yandexApi'

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
  const [userData, setUserData] = useState<IUser>()
  const handleStartAgain = () => {
    startAgain()
  }
  const handleToMainMenu = () => {
    navigate('/')
  }

  useEffect(() => {
    getUser().then(response => {
      if (response?.data) {
        setUserData(response.data)
      }
    })
    const postData = {
      data: {
        id: userData?.id,
        userFirstName: userData?.first_name,
        userDisplayName: userData?.display_name,
        userAvatar: userData?.avatar,
        ratingSlytherinTeam: score
      },
      ratingFieldName: 'ratingSlytherinTeam',
      teamName: 'slytherin'
    }
    if (isOpen && score > 0) {
      addUserToLeaderBoard(postData).then()
    }
  }, [isOpen, score])

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
