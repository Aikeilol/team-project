import { FC } from 'react'
import { Typography } from '@mui/material'
import ForumBackLink from '../ForumBackButton'

interface IProps {
  children: string | string[]
}

const ForumHeader: FC<IProps> = ({ children }) => {
  return (
    <Typography
      sx={{
        padding: '5px 0 20px',
        fontSize: '24px',
      }}
      variant="h1">
      <ForumBackLink /> {children}
    </Typography>
  )
}

export default ForumHeader
