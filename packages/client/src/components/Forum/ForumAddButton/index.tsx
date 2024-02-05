import React, { FC } from 'react'
import { Fab, FabTypeMap, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface IProps {
  click: () => void
  size?: FabTypeMap['props']['size']
  tooltip?: string
}

const ForumAddButton: FC<IProps> = ({ click, size = 'small', tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <Fab color="primary" aria-label="add" size={size} onClick={click}>
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default ForumAddButton
