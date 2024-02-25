import { StrictMode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { store } from './store/store'
import { Provider } from 'react-redux'
import theme from './utils/scripts/theme'
import Router from './router'
import { AppContext, DefaultAppContext } from './context/AppContext'

export const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={DefaultAppContext}>
            <CssBaseline />
            <Router />
          </AppContext.Provider>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
