import React, { FC } from 'react'
import Auth from '../../components/Auth'
import { Container } from '@mui/material'
import {
  AuthFooterInfo,
  AuthInput,
  IAuthData,
  IFormData,
} from '../../components/Auth/types'
import { LoginInput, PasswordInput } from '../../components/Form/data'

const SignIn: FC = () => {
  const dataInputs: Array<AuthInput> = [LoginInput, PasswordInput]

  const formData: IFormData = {
    dataInputs: dataInputs,
    buttonText: 'Войти',
  }

  const footerInfo: AuthFooterInfo = {
    text: 'Нет аккаунта?',
    textLink: 'Зарегистрироваться',
    route: '/sign-up',
  }

  const data: IAuthData = {
    title: 'Авторизация',
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
      <Auth data={data} />
    </Container>
  )
}

export default SignIn
