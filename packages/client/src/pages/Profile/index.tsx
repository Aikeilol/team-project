import { FC } from 'react'
import { Container, CssBaseline } from '@mui/material'
import ProfileIndex from '../../components/Profile'
import { IProfileData, IProfileFormData, ProfileInput } from '../../components/Profile/types'


const Profile: FC = () => {
  const dataInputs: Array<ProfileInput> = [
    {
      id: 'first_name',
      label: 'Имя',
      name: 'first_name',
      type: 'text',
    },
    {
      id: 'second_name',
      label: 'Фамилия',
      name: 'second_name',
      type: 'text',
    },
    {
      id: 'display_name',
      label: 'Имя в чате',
      name: 'display_name',
      type: 'text',
    },
    {
      id: 'login',
      label: 'Логин',
      type: 'text',
      name: 'login',
    },
    {
      id: 'email',
      label: 'Почта',
      type: 'email',
      name: 'email',
    },
    {
      id: 'phone',
      label: 'Телефон',
      name: 'phone',
      type: 'tel',
    }
  ]
  const formData: IProfileFormData = {
    dataInputs: dataInputs
  }
  const data: IProfileData = {
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
      <CssBaseline />
      <ProfileIndex data={data} />
    </Container>
  )
}

export default Profile
