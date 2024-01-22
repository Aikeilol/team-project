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
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '550px'
      }}
    >
      <ProfileHeader title={'profile header'} />
      <ProfileBody  formData={formData}/>
      <ProfileFooter />
    </Box>
  )
}

export default ProfileIndex
