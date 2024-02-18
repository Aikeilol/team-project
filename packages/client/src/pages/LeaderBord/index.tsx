import React, { FC, useEffect, useState } from 'react'
import { Container } from '@mui/material'
import LeaderBoardComponent from '../../components/LeaderBoard'
import { getAllLeaders } from '../../utils/scripts/api/leaderBoardApi'


const LeaderBoard: FC = () => {
  const [listData, setListData] = useState([])

  useEffect(() => {
    const postData = {
      ratingFieldName: 'ratingSlytherinTeam',
      cursor: 0,
      limit: 10
    }
    getAllLeaders(postData).then(response => {
      if (response?.data) {
        setListData(response.data)
      }

    })
  }, [])

  const data = {
    title: 'Список топ игроков',
    listData: listData,
  }

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: 'calc(100vh - 64px)',
      }}>
      <LeaderBoardComponent data={data} />
    </Container>
  )
}

export default LeaderBoard
