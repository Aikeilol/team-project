import { FC } from 'react'
import Auth from '../../components/Auth'
import { Container, CssBaseline } from '@mui/material'
import {
  IFormData,
  AuthInput,
  AuthFooterInfo,
  IAuthData,
} from '../../components/Auth/types'
import {
  EmailInput,
  FirstNameInput,
  LoginInput,
  PasswordInput,
  PhoneInput,
  SecondNameInput,
} from '../../components/Form/data'

const SignUp: FC = () => {
  const dataInputs: Array<AuthInput> = [
    FirstNameInput,
    SecondNameInput,
    LoginInput,
    EmailInput,
    PhoneInput,
    PasswordInput,
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
