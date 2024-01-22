import { FC } from 'react'
import { Box } from '@mui/material'
import { IProfileFormData } from '../types'

interface IProps {
  formData: IProfileFormData
}
const ProfileBody: FC<IProps> = ({formData}) => {
  const { dataInputs } = formData
  return (
    <Box
      component="div"
      sx={
        {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          mb: 5,
        }
      }
    >
      {dataInputs.map(({ id, label, type, name }, index) =>(
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            pb: 2,
            pt: 2,
            borderBottom: t => `1px solid ${t.palette.divider}`,
          }}
        >
          <Box>{label}</Box>
          <Box>{name}</Box>
        </Box>
      ))}
    </Box>
  )
}

export default ProfileBody
