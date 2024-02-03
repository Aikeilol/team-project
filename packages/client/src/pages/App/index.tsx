import { Outlet } from 'react-router-dom'
import './style.css'
import { SnackbarProvider } from 'notistack'
import { useAppDispatch } from '../../store/hooks'
import { useEffect } from 'react'
import { setUser } from '../../store/slices/userSlice'
import { getUser } from '../../utils/scripts/api/yandexApi'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getUser()
      .then(response => {
        dispatch(setUser(response.data || null))
      })
      .catch(() => {
        dispatch(setUser(null))
      })
  }, [])

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} />
      <Outlet />
    </div>
  )
}

export default App
