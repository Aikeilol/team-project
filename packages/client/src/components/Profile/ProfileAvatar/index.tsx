import React, { ChangeEvent, FC } from 'react'
import { Avatar, Box, IconButton } from '@mui/material'

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  source: string
}

const ProfileAvatar: FC<IProps> = ({ onChange, source }) => {
  return (
    <Box component="div">
      <input
        id="upload-avatar"
        name={'avatar'}
        type="file"
        hidden
        accept={'image/*'}
        onChange={onChange}
      />
      <label htmlFor="upload-avatar">
        <IconButton component="span">
          <Avatar
            alt={'avatar'}
            src={source}
            sx={{ width: 130, height: 130 }}
          />
        </IconButton>
      </label>
    </Box>
  )
}

export default ProfileAvatar
