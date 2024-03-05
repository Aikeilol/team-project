import React, { FC } from 'react'
import { ThemeProvider as CustomThemeProvider, CssBaseline } from '@mui/material'
import { ThemeProvider as SlytherinThemeProvider , useTheme } from './context/ThemeContext/ThemeContext'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ClientRouter } from './router'
import generateTheme from './utils/scripts/theme'

const ThemedApp: FC = () => {
  const { darkMode } = useTheme()
  const theme = generateTheme(darkMode)

  return (
    <CustomThemeProvider theme={theme}>
      <CssBaseline />
      <ClientRouter />
    </CustomThemeProvider>
  )
}
export const App: FC = () => {
  return (
    <Provider store={store}>
      <SlytherinThemeProvider>
        <ThemedApp />
      </SlytherinThemeProvider>
    </Provider>
  )
}
