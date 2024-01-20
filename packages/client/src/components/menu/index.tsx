import React from 'react'
import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

const pages = [
  { url: '/', title: 'Главная' },
  { url: '/profile', title: 'Профиль' },
  { url: '/game', title: 'Игра' },
  { url: '/leaderboard', title: 'Лидерборд' },
  { url: '/topics', title: 'Форум' },
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
