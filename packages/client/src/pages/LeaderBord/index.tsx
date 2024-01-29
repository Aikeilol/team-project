import { FC } from 'react'
import { Container } from '@mui/material'
import LeaderBoardComponent from '../../components/LeaderBoard'
import './style.css'

const LeaderBoard: FC = () => {
  const listData = [
    {
      id: 1,
      avatar: '',
      display_name: 'User 1',
      first_name: 'User',
      second_name: 'One',
      ratingFieldName: 'Rating 1',
      cursor: 2,
      limit: 13
    },
    {
      id: 2,
      avatar: '',
      display_name: 'User 2',
      first_name: 'User',
      second_name: 'Two',
      ratingFieldName: 'Rating 2',
      cursor: 3,
      limit: 3
    },
    {
      id: 3,
      avatar: '',
      display_name: 'User 3',
      first_name: 'User',
      second_name: 'Three',
      ratingFieldName: 'Rating 3',
      cursor: 6,
      limit: 16
    },
  ]
  const listTitle = {
    user: 'Пользователь',
    rating: 'Рейтинг',
    cursor: 'Курсор',
    limit: 'Лимит',
  }

  const data = {
    title: 'Список топ игроков',
    listTitle: listTitle,
    listData: listData

  }
  console.log('data LB', data)

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
