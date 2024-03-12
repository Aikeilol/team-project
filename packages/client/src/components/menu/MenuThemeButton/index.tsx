import { IconButton } from '@mui/material'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext/ThemeContext'
import { Brightness4, Brightness7 } from '@mui/icons-material'

const MenuThemeButton = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <IconButton
      onClick={toggleTheme}
    >
      { darkMode ? <Brightness4 /> : <Brightness7 /> }
    </IconButton>
  )
}

export default MenuThemeButton
