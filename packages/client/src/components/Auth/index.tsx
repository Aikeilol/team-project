import { Paper } from '@mui/material'
import { FC, useEffect } from 'react'
import { IAuthData } from './types'
import AuthForm from './AuthForm'
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter'
import { useAppSelector } from '../../store/hooks'
import { useNavigate } from 'react-router-dom'

interface IProps {
  data: IAuthData
}

const Auth: FC<IProps> = ({ data }) => {
  const { title, formData, footerInfo } = data
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state.user)

  //  useEffect(() => {
  //    console.log(user)
  //    if (user) {
  //      navigate('/')
  //    }
  //  }, [])

  return (
    <Paper
      variant="outlined"
      sx={{
        m: { xs: 2 },
        p: { xs: 2, md: 3 },
        maxWidth: '520px',
        width: '100%',
      }}>
      <AuthHeader title={title} />

      <AuthForm formData={formData} />

      <AuthFooter footerInfo={footerInfo} />
    </Paper>
  )
}

export default Auth
