import { FC } from 'react'
import { Box } from '@mui/material'
import { IProfileFormData } from '../types'

interface IProps {
  formData: IProfileFormData
}
const ProfileBody: FC<IProps> = ({formData}) => {

  const { dataInputs } = formData
  const data = dataInputs.reduce((object) => {
      return object
  })
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
      <>
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
          <Box>Почта</Box>
          <Box>{data.email}</Box>
        </Box>
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
          <Box>Логин</Box>
          <Box>{data.login}</Box>
        </Box>
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
          <Box>Имя</Box>
          <Box>{data.first_name}</Box>
        </Box>
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
          <Box>Фамилия</Box>
          <Box>{data.second_name}</Box>
        </Box>
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
          <Box>Имя в чате</Box>
          <Box>{data.display_name}</Box>
        </Box>
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
          <Box>Телефон</Box>
          <Box>{data.phone}</Box>
        </Box>
      </>
    </Box>
  )
}

export default ProfileBody
