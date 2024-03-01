import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from './utils/service-worker'
import { App } from './App'
import { AppContext, createAppContext } from './context/AppContext'

const appContext = createAppContext()

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <AppContext.Provider value={appContext}>
      <App />
    </AppContext.Provider>
  </StrictMode>
)

registerSW('/net-or-cache-sw.js')
