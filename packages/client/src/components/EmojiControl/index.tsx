import React, { FC, useState, useEffect } from 'react'
import { Popover, Stack, IconButton } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import './style.css'
import { getEmojis } from '../../utils/scripts/api/reactionsApi'
import { Emoji } from '../../utils/scripts/api/types'

interface IProps {
  onClick: (id: number) => void
}

export const EmojiControl: FC<IProps> = ({ onClick }) => {
  const [showPicker, setShowPicker] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [emojis, setEmojis] = useState<Emoji[]>([])

  useEffect(() => {
    getEmojis().then(response => {
      if (response?.data) {
        setEmojis(response.data)
      }
    })
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setShowPicker(!showPicker)
  }

  const handleClose = () => {
    setShowPicker(false)
    setAnchorEl(null)
  }

  const handleEmojiClick = (id: number) => {
    onClick(id)
    handleClose()
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <IconButton onClick={handleClick}>
        <EmojiEmotionsIcon />
      </IconButton>
      <Popover
        id="popover-emoji"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Stack
          spacing={1}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          className="emoji-control__stack">
          {emojis.map(({ id, unicode }) => (
            <IconButton key={id} onClick={() => handleEmojiClick(id)}>
              <span className="emoji-control__button">{unicode}</span>
            </IconButton>
          ))}
        </Stack>
      </Popover>
    </div>
  )
}
