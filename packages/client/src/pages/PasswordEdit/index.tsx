import { FC } from 'react'
import { IPwdEditData, IPwdEditFormData, PwdEditInput } from '../../components/PasswordEdit/types'
import { Container, CssBaseline } from '@mui/material'
import PasswordEditIndex from '../../components/PasswordEdit'

const PasswordEdit: FC = () => {
  const dataInputs: Array<PwdEditInput> = [
    {
      id: 'oldPassword',
      label: 'Старый пароль',
      name: 'oldPassword',
      type: 'password',
    },
    {
      id: 'newPassword',
      label: 'Новый пароль',
      name: 'newPassword',
      type: 'password',
    },
    {
      id: 'newPassword',
      label: 'Повторите новый пароль',
      name: 'newPassword',
      type: 'password',
    },
  ]
  const formData: IPwdEditFormData = {
    dataInputs: dataInputs
  }
  const data: IPwdEditData = {
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
      <PasswordEditIndex data={data} />
    </Container>
  )
}

export default PasswordEdit
