import React, { FC, useEffect } from 'react'
import Auth from '../../components/Auth'
import { Button, Container } from '@mui/material'
import {
  AuthFooterInfo,
  AuthInput,
  IAuthData,
  IFormData,
} from '../../components/Auth/types'
import { LoginInput, PasswordInput } from '../../components/Form/data'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectServiceId, setServiceId } from '../../store/slices/userSlice'
import { getOauthUrl } from '../../utils/scripts/constants'
import { getServiceId } from '../../utils/scripts/api/yandexApi'

const SignIn: FC = () => {
  const dataInputs: Array<AuthInput> = [LoginInput, PasswordInput]
  const serviceId = useAppSelector(state => selectServiceId(state))
  const location = window.location.origin
  const dispatch = useAppDispatch()

  useEffect(() => {
    getServiceId(location).then(response => {
      dispatch(setServiceId(response?.data.service_id))
    })
  }, [])

  const children = serviceId && (
    <Button
      href={getOauthUrl(serviceId, location)}
      type={'button'}
      fullWidth
      variant="contained"
      sx={{ mb: 2, maxWidth: '320px', width: '100%' }}>
      Авторизоваться через Yandex Passport
    </Button>
  )

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
      <Auth data={data} children={children} />
    </Container>
  )
}

export default SignIn
