import React, { FC, useEffect, useState } from 'react'
import { Container, CssBaseline } from '@mui/material'
import ProfileIndex from '../../components/Profile'
import { IProfileData, IProfileFormData } from '../../components/Profile/types'
import { IUser } from '../../utils/scripts/api/types'
import { getUser } from '../../utils/scripts/api/yandexApi'

const Profile: FC = () => {
  const [userData, setUserData] = useState<IUser>({
    avatar: '',
    display_name: '',
    email: '',
    first_name: '',
    id: 0,
    login: '',
    phone: '',
    second_name: ''
  })

  useEffect(() => {
    getUser().then(
      response => {
        if (response?.data) {
          setUserData(response.data)
        }
      }
    )
  }, [])

  const userArr = [
    userData
  ]
  const formData: IProfileFormData = {
    dataInputs: userArr
  }
  const dataObject: IProfileData = {
    formData: formData
  }
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <ProfileIndex data={dataObject} />
    </Container>
  )
}

export default Profile
