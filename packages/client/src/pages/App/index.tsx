import { Outlet, useLoaderData } from 'react-router-dom'
import './style.css'
import { SnackbarProvider } from 'notistack'
import { useAppDispatch } from '../../store/hooks'
import { useEffect } from 'react'
import { getUser } from '../../utils/scripts/api/yandexApi'
import { setUser } from '../../store/slices/userSlice'
import { AxiosResponse } from 'axios'
import { IUser } from '../../utils/scripts/api/types'

function App() {
  const dispatch = useAppDispatch()
  const user = useLoaderData()

  useEffect(() => {
    if (user) {
      dispatch(setUser(user))
    }
  }, [])

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} />
      <Outlet />
    </div>
  )
}

export default App
