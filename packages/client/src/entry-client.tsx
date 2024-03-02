import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from './utils/service-worker'
import { App } from './App'
import { AppContext, createAppContext } from './context/AppContext'

const appContext = createAppContext()

const root = document.getElementById('root') as HTMLElement
const isSsr = root.innerHTML !== '\x3C!--ssr-outlet-->'
if (isSsr) {
  ReactDOM.hydrateRoot(
    root,
    <StrictMode>
      <AppContext.Provider value={appContext}>
        <App />
      </AppContext.Provider>
    </StrictMode>
  )
} else {
  ReactDOM.createRoot(root).render(<App />)
}

registerSW('/net-or-cache-sw.js')
