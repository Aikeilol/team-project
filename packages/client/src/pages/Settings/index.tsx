import { FC } from 'react'
import { ISettingsData, ISettingsFormData, SettingsInput } from '../../components/Settings/types'
import { Container, CssBaseline } from '@mui/material'
import SettingsIndex from '../../components/Settings'
import './style.css'
const Settings: FC = () => {
  const dataInputs: Array<SettingsInput> = [
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
  const formData: ISettingsFormData = {
    dataInputs: dataInputs
  }
  const data: ISettingsData = {
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
      <SettingsIndex data={data} />
    </Container>
  )
}

export default Settings
