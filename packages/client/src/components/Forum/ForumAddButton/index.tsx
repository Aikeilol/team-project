import { FC } from 'react'
import { Fab, FabTypeMap, Tooltip } from '@mui/material'

interface IProps {
  click: () => void
  size?: FabTypeMap['props']['size']
  tooltip?: string
}

const ForumAddButton: FC<IProps> = ({ click, size = 'small', tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <Fab
        color="primary"
        aria-label="add"
        size={size}
        sx={{ fontSize: '40px' }}
        onClick={click}>
        +
      </Fab>
    </Tooltip>
  )
}

export default ForumAddButton
