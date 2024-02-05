import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

interface IProps {
  title: string
}

const AuthHeader: FC<IProps> = ({ title }) => {
  return (
    <Box
      component="div"
      sx={{
        pb: 1,
        borderBottom: t => `1px solid ${t.palette.divider}`,
      }}>
      <Typography component="h1" variant="h6" align="center">
        {title}
      </Typography>
    </Box>
  )
}

export default AuthHeader
