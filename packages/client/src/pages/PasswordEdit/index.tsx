import React, { FC } from 'react'
import { Container } from '@mui/material'
import PasswordEditIndex from '../../components/PasswordEdit'
import { AuthInput, IAuthData, IFormData } from '../../components/Auth/types'
import { NewPasswordInput, OldPasswordInput } from '../../components/Form/data'
import ForumBackButton from '../../components/Forum/ForumBackButton'

const PasswordEdit: FC = () => {
  const dataInputs: Array<AuthInput> = [OldPasswordInput, NewPasswordInput]
  const formData: IFormData = {
    dataInputs: dataInputs,
    buttonText: 'Сохранить',
  }
  const data: IAuthData = {
    title: 'Изменить пароль',
    formData: formData,
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
      <ForumBackButton />
      <PasswordEditIndex data={data} />
    </Container>
  )
}

export default PasswordEdit
