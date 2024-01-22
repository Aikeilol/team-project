import { FC } from 'react'
import { Box } from '@mui/material'
import { ISettingsData } from './types'
import SettingsForm from './SettingsForm'


interface IProps {
  data: ISettingsData
}

const SettingsIndex: FC<IProps> = ({ data }) => {
  const { formData } = data
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '550px'
      }}
    >
      <SettingsForm title={'profile header'}  formData={formData}/>
    </Box>
  )
}

export default SettingsIndex
