import ReactDOM from 'react-dom/client'
import { registerSW } from './utils/service-worker'
import { App } from './App'

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <App />)

registerSW('/net-or-cache-sw.js')
