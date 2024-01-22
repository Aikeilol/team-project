import { FC } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

interface IProps {
  title: string
}
const ProfileHeader: FC<IProps> = ({ title }) => {
  return (
    <Box
      component="div"
      sx={{
        mb: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Avatar
        alt={'avatar'}
        src={'/'}
        sx={{width: 130, height: 130}}
      />
      <Typography
        component="p"
        variant="body2"
        align="center"
        sx={{mt: 4}}
      >{title}</Typography>
    </Box>
  )
}

export default ProfileHeader
