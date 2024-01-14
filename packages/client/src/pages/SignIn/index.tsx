import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  CssBaseline,
} from '@mui/material'
import { FC, FormEvent } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const SignIn: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      login: data.get('login'),
      password: data.get('password'),
    })
  }

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
      <Paper
        variant="outlined"
        sx={{ p: { xs: 2, md: 3 }, maxWidth: '520px', width: '100%' }}>
        <Typography
          component="h1"
          variant="h6"
          align="center"
          sx={{
            pb: 1,
            borderBottom: t => `1px solid ${t.palette.divider}`,
          }}>
          Авторизация
          <CssBaseline />
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <TextField
            variant="filled"
            margin="normal"
            required
            id="login"
            label="Логин"
            type="text"
            name="login"
            autoFocus
            sx={{ maxWidth: '320px', width: '100%' }}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            name="password"
            label="Пароль"
            type="password"
            id="password"
            sx={{ maxWidth: '320px', width: '100%' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 23, mb: 2, maxWidth: '320px', width: '100%' }}>
            Войти
          </Button>

          <Grid container>
            <Grid item xs>
              <Typography component="p" variant="body2" align="center">
                Нет аккаунта?&nbsp;
                <Link component={RouterLink} to={'/sign-up'} variant="body2">
                  Зарегистрироваться
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

export default SignIn
