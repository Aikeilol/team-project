import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from './utils/service-worker'
import { App } from './App'
import { AppContext, DefaultAppContext } from './context/AppContext'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <AppContext.Provider value={DefaultAppContext}>
      <App />
    </AppContext.Provider>
  </StrictMode>
)

registerSW('/net-or-cache-sw.js')
