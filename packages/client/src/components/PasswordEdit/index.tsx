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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '550px'
      }}
    >
      <AuthHeader title={title} />
      <PasswordEditForm  formData={formData}/>
    </Box>
  )
}

export default PasswordEditIndex
