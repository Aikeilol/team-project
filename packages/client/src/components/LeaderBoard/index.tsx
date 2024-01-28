import { FC } from 'react'
import { ILeaderData } from './types'
import LeaderBoardHeader from './LeaderBoardHeader'
import LeaderBoardList from './LeaderBordList'
import { Box } from '@mui/material'

interface IProps {
  data: ILeaderData
}

const LeaderBoardComponent: FC<IProps> = ({ data }) => {
  const { title, listData } = data
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}>
      <LeaderBoardHeader title={title} />
      <LeaderBoardList listData={listData} />
    </Box>
  )
}

export default LeaderBoardComponent
