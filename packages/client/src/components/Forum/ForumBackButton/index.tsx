import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fab, Tooltip } from '@mui/material'

const ForumBackLink: FC<object> = () => {
  const navigate = useNavigate()

  return (
    <Tooltip title="Назад">
      <Fab
        color="primary"
        aria-label="back"
        onClick={() => navigate(-1)}
        sx={{
          fontSize: '40px',
          margin: '18px 10px',
        }}>
        ❮
      </Fab>
    </Tooltip>
  )
}

export default ForumBackLink
