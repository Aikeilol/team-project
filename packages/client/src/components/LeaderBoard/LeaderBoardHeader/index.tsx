import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface IProps {
  title: string
}

const LeaderBoardHeader: FC<IProps> = ({ title }) => {
  return (
    <Box
      component="div"
      sx={{
        mt: 8,
        mb: 8,
        pb: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottom: t => `1px solid ${t.palette.divider}`,
      }}>
      <Typography component="h1" variant="h6" align="center">
        {title}
      </Typography>
    </Box>
  )
}

export default LeaderBoardHeader
