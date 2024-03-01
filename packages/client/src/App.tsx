import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { store } from './store/store'
import { Provider } from 'react-redux'
import theme from './utils/scripts/theme'
import { ClientRouter } from './router'

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ClientRouter />
      </ThemeProvider>
    </Provider>
  )
}
