import { StrictMode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { store } from './store/store'
import { Provider } from 'react-redux'
import theme from './utils/scripts/theme'
import Router from './router'

export const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
