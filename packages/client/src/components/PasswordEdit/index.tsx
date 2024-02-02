import { FC } from 'react'
import { Box } from '@mui/material'
import PasswordEditForm from './PasswordEditForm'
import AuthHeader from '../Auth/AuthHeader'
import { IAuthData } from '../Auth/types'

interface IProps {
  data: IAuthData
}

const PasswordEditIndex: FC<IProps> = ({ data }) => {
  const { title, formData } = data
  return (
    <Box component="div" className={'settingsForm'}>
      <AuthHeader title={title} />
      <PasswordEditForm formData={formData} />
    </Box>
  )
}

export default PasswordEditIndex
