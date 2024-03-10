import React, { FC } from 'react'
import { Fab, FabTypeMap, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface IProps {
  click: () => void
  size?: FabTypeMap['props']['size']
  tooltip?: string
}

const ForumDeleteButton: FC<IProps> = ({ click, size = 'small', tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <Fab color="error" aria-label="add" size={size} onClick={click}>
        <DeleteIcon />
      </Fab>
    </Tooltip>
  )
}

export default ForumDeleteButton
