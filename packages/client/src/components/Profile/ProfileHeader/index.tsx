import { FC, FormEvent, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { IProfileFormData } from '../types'
import { changeUserAvatar } from '../../../utils/scripts/api/profileApi'
import ProfileAvatar from '../ProfileAvatar'
import { getUser } from '../../../utils/scripts/api/yandexApi'
import { API_URL } from '../../../utils/scripts/constants'

interface IProps {
  formData: IProfileFormData
}
const ProfileHeader: FC<IProps> = ({ formData }) => {
  const { dataInputs } = formData
  const data = dataInputs.reduce(object => {
    return object
  })

  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    getUser().then(response => {
      if (response?.data) {
        setAvatar(response.data.avatar)
      }
    })
  }, [])

  const handleAvatarUpload = (event: FormEvent<HTMLInputElement>) => {
    const avatarInput = event.target as HTMLInputElement
    if (!avatarInput?.files) {
      return
    }

    const avatar = avatarInput?.files[0]

    const formData = new FormData()
    formData.append('avatar', avatar)

    changeUserAvatar(formData).then(response => {
      if (response?.data) {
        setAvatar(response.data.avatar)
      }
    })
  }
  return (
    <Box
      sx={{
        mt: 5,
        mb: 6,
      }}>
      <ProfileAvatar
        onChange={handleAvatarUpload}
        source={`${API_URL}/resources${avatar}`}
      />
      <Typography component="p" variant="body2" align="center" sx={{ mt: 4 }}>
        {data.first_name} {data.second_name}
      </Typography>
    </Box>
  )
}

export default ProfileHeader
