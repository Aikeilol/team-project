import { FC } from 'react'
import { Box } from '@mui/material'
import ProfileHeader from './ProfileHeader'
import ProfileFooter from './ProfileFooter'
import ProfileBody from './ProfileBody'
import { IProfileData } from './types'

interface IProps {
  data: IProfileData
}

const ProfileIndex: FC<IProps> = ({ data }) => {
  const { formData } = data
  return (
    <Box className={'settingsForm'}>
      <ProfileHeader formData={formData} />
      <ProfileBody formData={formData} />
      <ProfileFooter />
    </Box>
  )
}

export default ProfileIndex
