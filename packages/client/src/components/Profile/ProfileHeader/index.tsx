import { FC, FormEvent, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { IProfileFormData } from '../types'
import { API_URL, changeUserAvatar } from '../../../utils/scripts/api/profileApi'
import ProfileAvatar from '../ProfileAvatar'
import { getUser } from '../../../utils/scripts/api/yandexApi'

interface IProps {
  formData: IProfileFormData
}
const ProfileHeader: FC<IProps> = ({ formData }) => {
  const { dataInputs } = formData
  const data = dataInputs.reduce((object) => {
    return object
  })

  const [ avatar, setAvatar ] = useState('')

  useEffect(() => {
    getUser().then(response => {
      if (response?.data) {
        setAvatar(response.data.avatar)
      }
    })
  }, [])

  const handleAvatarUpload = (event: FormEvent<HTMLInputElement>) => {
    const avatar = event.target.files[0]
    if (!event.target?.files) {
      return;
    }
    const formData = new FormData()
    formData.append('avatar', avatar)

    changeUserAvatar(formData).then(
      response => {
        if (response?.data) {
          setAvatar(response.data.avatar)
        }
      }
    )
  }
  return (
    <>
      <Box
        component="div"
        sx={{
          mt: 6,
          mb: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <ProfileAvatar
          onChange={handleAvatarUpload}
          source={`${API_URL}/resources${avatar}`}
        />
        <Typography
          component="p"
          variant="body2"
          align="center"
          sx={{ mt: 4 }}
        >{data.first_name} {data.second_name}</Typography>
      </Box>
    </>
  )
}

export default ProfileHeader
