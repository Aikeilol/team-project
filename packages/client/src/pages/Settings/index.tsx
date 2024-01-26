import { FC } from 'react'
import { Container } from '@mui/material'
import SettingsIndex from '../../components/Settings'
import './style.css'
import { AuthInput, IAuthData, IFormData } from '../../components/Auth/types'
import {
  DisplayNameInput,
  EmailInput,
  FirstNameInput,
  LoginInput,
  PhoneInput,
  SecondNameInput
} from '../../components/Form/data'
import ForumBackButton from '../../components/Forum/ForumBackButton'

const Settings: FC = () => {
  const dataInputs: Array<AuthInput> = [
    FirstNameInput,
    SecondNameInput,
    LoginInput,
    EmailInput,
    PhoneInput,
    DisplayNameInput
  ]
  const formData: IFormData = {
    dataInputs: dataInputs,
    buttonText: 'Сохранить'
  }

  const data: IAuthData = {
    title: 'Настройки профиля',
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
      <ForumBackButton />
      <SettingsIndex data={data} />
    </Container>
  )
}

export default Settings
