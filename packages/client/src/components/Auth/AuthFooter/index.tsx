import { Grid, Link, Typography } from '@mui/material'
import { FC } from 'react'
import { AuthFooterInfo } from '../types'
import { Link as RouterLink } from 'react-router-dom'

interface IProps {
  footerInfo: AuthFooterInfo
}

const AuthFooter: FC<IProps> = ({ footerInfo }) => {
  return (
    <Grid container>
      <Grid item xs>
        <Typography component="p" variant="body2" align="center">
          {footerInfo.text}&nbsp;
          <Link component={RouterLink} to={footerInfo.route} variant="body2">
            {footerInfo.textLink}
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AuthFooter
