import React, { FC } from 'react'
import { Fab, FabTypeMap, Tooltip } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'

interface IProps {
  click: () => void
  size?: FabTypeMap['props']['size']
  tooltip?: string
}

const ForumDeleteButton: FC<IProps> = ({ click, size = 'small', tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <Fab color="warning" aria-label="add" size={size} onClick={click}>
        <CreateIcon />
      </Fab>
    </Tooltip>
  )
}

export default ForumDeleteButton
