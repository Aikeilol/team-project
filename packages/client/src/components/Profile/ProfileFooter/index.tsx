import { FC } from 'react'
import { Box, CssBaseline, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { logOut } from '../../../utils/scripts/api/profileApi'
import { useAppDispatch } from '../../../store/hooks'
import { setUser } from '../../../store/slices/userSlice'

const ProfileFooter: FC = () => {
  const dispatch = useAppDispatch()

  const handleLogOut = async () => {
    const response = await logOut()

    if (response) {
      dispatch(setUser(null))
    }
  }

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
      }}>
      <Link
        sx={{
          borderBottom: t => `1px solid ${t.palette.divider}`,
          width: '100%',
          pb: 2,
          pt: 2,
        }}
        component={RouterLink}
        to={'/settings'}
        variant="body1"
        color={'primary'}
        underline="none">
        {'Изменить данные'}
      </Link>
      <CssBaseline />
      <Link
        sx={{
          borderBottom: t => `1px solid ${t.palette.divider}`,
          width: '100%',
          pb: 2,
          pt: 2,
        }}
        component={RouterLink}
        to={'/password-edit'}
        variant="body1"
        color={'primary'}
        underline="none">
        {'Изменить пароль'}
      </Link>
      <Link
        sx={{
          pb: 2,
          pt: 2,
        }}
        component={RouterLink}
        to={'/sign-in'}
        color={'error'}
        underline="none"
        onClick={handleLogOut}>
        {'Выйти'}
      </Link>
    </Box>
  )
}

export default ProfileFooter
