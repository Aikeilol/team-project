import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fab, Tooltip } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const ForumBackLink: FC<object> = () => {
  const navigate = useNavigate()

  return (
    <Tooltip title="Назад">
      <Fab color="primary" aria-label="back" onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon />
      </Fab>
    </Tooltip>
  )
}

export default ForumBackLink
