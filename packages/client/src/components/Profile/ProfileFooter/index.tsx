import { FC } from 'react'
import { Box, CssBaseline, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const ProfileFooter: FC = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <Link
        sx={{
          borderBottom: t => `1px solid ${t.palette.divider}`,
          width: '100%',
          pb: 2,
          pt:2
        }}
        component={RouterLink}
        to={'/settings'}
        variant="body1"
        color={"#1C47BE"}
        underline="none"
      >
        {'Изменить данные'}
      </Link>
      <CssBaseline />
      <Link
        sx={{
          borderBottom: t => `1px solid ${t.palette.divider}`,
          width: '100%',
          pb: 2,
          pt: 2
        }}
        component={RouterLink}
        to={'/password-edit'}
        variant="body1"
        color={"#1C47BE"}
        underline="none"
      >
        {'Изменить пароль'}
      </Link>
      <Link
        sx={{
          pb:2,
          pt: 2
        }}
        component={RouterLink}
        to={'/sign-in'}
        color={"#FF0000"}
        underline="none"
      >
        {'Выйти'}
      </Link>
    </Box>
  )
}

export default ProfileFooter
