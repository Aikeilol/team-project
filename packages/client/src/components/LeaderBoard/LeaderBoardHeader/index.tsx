import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface IProps {
  title: string
}

const LeaderBoardHeader: FC<IProps> = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          mt: 3,
          mb: 6,
          pb: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <Typography component="h1" variant="h6" align="center">
          {title}
        </Typography>
      </Box>
    </>
  )
}

export default LeaderBoardHeader
