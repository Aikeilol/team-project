import { FC } from 'react'
import { Container } from '@mui/material'
import LeaderBoardComponent from '../../components/LeaderBoard'
import { IListData } from '../../components/LeaderBoard/types'

const LeaderBoard: FC = () => {
  const users = [
    {
      id: 1,
      avatar: '',
      display_name: 'User 1'
    },
    {
      id: 2,
      avatar: '',
      display_name: 'User 2'
    },
    {
      id: 3,
      avatar: '',
      display_name: 'User 3'
    },
  ]
  const listData = [
    {
      ratingFieldName: 'Rating 1',
      cursor: 2,
      limit: 13
    },
    {
      ratingFieldName: 'Rating 2',
      cursor: 3,
      limit: 3
    },
    {
      ratingFieldName: 'Rating 3',
      cursor: 6,
      limit: 16
    },
  ]

  const data = {
    title: 'Список топ игроков',
    listData: listData
  }

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <LeaderBoardComponent data={data} />
    </Container>
  )
}

export default LeaderBoard
