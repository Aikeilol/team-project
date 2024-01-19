import { Outlet } from 'react-router-dom'
import './style.css'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} />
      <Outlet />
    </div>
  )
}

export default App
