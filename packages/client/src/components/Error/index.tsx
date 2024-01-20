import { Typography, Link, Box } from '@mui/material'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  let message = 'Что-то пошло не так...'
  let code = 500

  if (isRouteErrorResponse(error) && error.status === 404) {
    message = 'Страница не найдена'
    code = 404
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Typography variant="h2" component="h1">
        {code}
      </Typography>
      <Typography variant="h6" sx={{ p: 1 }}>
        {message}
      </Typography>
      <Link href="/">Назад</Link>
    </Box>
  )
}

export default ErrorPage
