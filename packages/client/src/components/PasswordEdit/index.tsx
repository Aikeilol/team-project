import { FC } from 'react'
import { Box } from '@mui/material'
import { IPwdEditData } from './types'
import PasswordEditForm from './PasswordEditForm'
import AuthHeader from '../Auth/AuthHeader'


interface IProps {
  data: IPwdEditData
}

const PasswordEditIndex: FC<IProps> = ({ data }) => {
  const { title, formData } = data
  return (
    <Box
      component="div"
      className={'settingsForm'}
    >
      <AuthHeader title={title} />
      <PasswordEditForm  formData={formData}/>
    </Box>
  )
}

export default PasswordEditIndex
