import ReactDOM from 'react-dom/client'
import { registerSW } from './utils/service-worker'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

registerSW('/net-or-cache-sw.js')
