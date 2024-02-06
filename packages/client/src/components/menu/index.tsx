import React from 'react'
import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const pages = [
  { url: '/', title: 'Главная' },
  { url: '/profile', title: 'Профиль' },
  { url: '/game', title: 'Игра' },
  { url: '/leaderboard', title: 'Лидерборд' },
  { url: '/forum', title: 'Форум' },
]

function Menu() {
  return (
    <AppBar position="static" sx={{ height: '64px' }}>
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
