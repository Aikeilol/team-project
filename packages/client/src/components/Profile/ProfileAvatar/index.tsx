import { FC } from 'react'
import { Avatar, Box, IconButton } from '@mui/material'

interface IProps {
  onChange: () => void
  source: string
}

const ProfileAvatar: FC<IProps> = ({ onChange, source }) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
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
            sx={{width: 130, height: 130}}
          />
        </IconButton>
      </label>
    </Box>
  )
}

export default ProfileAvatar
