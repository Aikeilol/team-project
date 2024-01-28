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
          width: '100%',
          mb: 5,
        }
      }
    >
      <>
        <Box
          component="div"
          className={'customField'}
        >
          <Box>Почта</Box>
          <Box>{data.email}</Box>
        </Box>
        <Box
          component="div"
          className={'customField'}
        >
          <Box>Логин</Box>
          <Box>{data.login}</Box>
        </Box>
        <Box
          component="div"
          className={'customField'}
        >
          <Box>Имя</Box>
          <Box>{data.first_name}</Box>
        </Box>
        <Box
          component="div"
          className={'customField'}
        >
          <Box>Фамилия</Box>
          <Box>{data.second_name}</Box>
        </Box>
        <Box
          component="div"
          className={'customField'}
        >
          <Box>Имя в чате</Box>
          <Box>{data.display_name}</Box>
        </Box>
        <Box
          component="div"
          className={'customField'}
        >
          <Box>Телефон</Box>
          <Box>{data.phone}</Box>
        </Box>
      </>
    </Box>
  )
}

export default ProfileBody
