import { FC } from 'react'
import { Box } from '@mui/material'
import { IPwdEditData } from './types'
import PasswordEditForm from './PasswordEditForm'


interface IProps {
  data: IPwdEditData
}

const PasswordEditIndex: FC<IProps> = ({ data }) => {
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
      <PasswordEditForm  formData={formData}/>
    </Box>
  )
}

export default PasswordEditIndex
