import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const pages = [
  { url: '/', title: 'Главная' },
  { url: '/profile', title: 'Профиль' },
  { url: '/game', title: 'Игра' },
  { url: '/leaderboard', title: 'Лидерборд' },
  { url: '/forum', title: 'Форум' },
  { url: '/sign-in', title: 'Авторизация' },
  { url: '/sign-up', title: 'Регистрация' },
]

function Menu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <nav>
          {pages.map(({ url, title }) => (
            <Link
              key={title}
              variant="button"
              color="text.primary"
              href={url}
              sx={{ my: 1, mx: 1.5 }}>
              {title}
            </Link>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
