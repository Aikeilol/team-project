import React, { FC } from 'react'
import { Badge, Stack, Chip } from '@mui/material'

interface IProps {
  emojis: {
    id: number
    unicode: string
    count: number
    liked: boolean
  }[]
  onClick: (id: number) => void
}

export const EmojiCounter: FC<IProps> = ({ emojis, onClick }) => {
  return (
    <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
      {emojis.map(({ id, unicode, count, liked }) => (
        <Badge
          key={id}
          color="primary"
          badgeContent={count}
          overlap="circular"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <Chip
            label={unicode}
            onClick={() => onClick(id)}
            variant={liked ? undefined : 'outlined'}
          />
        </Badge>
      ))}
    </Stack>
  )
}
