import { FC } from 'react'
import Auth from '../../components/Auth'
import { Container, CssBaseline } from '@mui/material'

const SignIn: FC = () => {
  const dataInputs = [
    {
      id: 'login',
      label: 'Логин',
      type: 'text',
      name: 'login',
    },
    {
      id: 'password',
      label: 'Пароль',
      name: 'password',
      type: 'password',
    },
  ]

  const footerInfo = {
    text: 'Нет аккаунта?',
    textLink: 'Зарегистрироваться',
    route: '/sign-up',
  }

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
      <CssBaseline />
      <Auth
        title="Авторизация"
        dataInputs={dataInputs}
        footerInfo={footerInfo}
      />
    </Container>
  )
}

export default SignIn
