import { FC } from 'react'
import { Box } from '@mui/material'
import SettingsForm from './SettingsForm'
import { IAuthData } from '../Auth/types'
import './SettingsForm/style.css'
import AuthHeader from '../Auth/AuthHeader'


interface IProps {
  data: IAuthData
}

const SettingsIndex: FC<IProps> = ({ data }) => {
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
      <SettingsForm formData={formData} />
    </Box>
  )
}

export default SettingsIndex
