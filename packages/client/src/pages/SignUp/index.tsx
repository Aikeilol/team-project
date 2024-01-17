import { FC } from 'react'
import Auth from '../../components/Auth'
import { Container, CssBaseline } from '@mui/material'
import {
  IFormData,
  AuthInput,
  AuthFooterInfo,
  IAuthData,
} from '../../components/Auth/types'

const SignUp: FC = () => {
  const dataInputs: Array<AuthInput> = [
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
    },
    {
      id: 'password',
      label: 'Пароль',
      name: 'password',
      type: 'password',
    },
  ]

  const formData: IFormData = {
    dataInputs: dataInputs,
    buttonText: 'Зарегистрироваться',
  }

  const footerInfo: AuthFooterInfo = {
    text: 'Уже есть аккаунт?',
    textLink: 'Войти',
    route: '/sign-in',
  }

  const data: IAuthData = {
    title: 'Регистрация',
    formData: formData,
    footerInfo: footerInfo,
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
      <Auth data={data} />
    </Container>
  )
}

export default SignUp
