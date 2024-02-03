import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { store } from './store/store'
import { Provider } from 'react-redux'
import theme from './utils/scripts/theme'
import { registerSW } from './utils/service-worker'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

registerSW('/net-or-cache-sw.js')
