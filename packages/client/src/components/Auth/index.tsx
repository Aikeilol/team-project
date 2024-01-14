import { Paper } from '@mui/material'
import { FC } from 'react'
import { FooterInfo, Input } from './types'
import AuthForm from './AuthForm'
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter'

interface IProps {
  title: string
  dataInputs: Array<Input>
  footerInfo: FooterInfo
}

const Auth: FC<IProps> = ({ title, dataInputs, footerInfo }) => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: { xs: 2, md: 3 }, maxWidth: '520px', width: '100%' }}>
      <AuthHeader title={title} />

      <AuthForm dataInputs={dataInputs} />

      <AuthFooter footerInfo={footerInfo} />
    </Paper>
  )
}

export default Auth
