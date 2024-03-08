import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import './style.css'
import { SnackbarProvider } from 'notistack'
import { useAppDispatch } from '../../store/hooks'
import { useEffect } from 'react'
import { setUser } from '../../store/slices/userSlice'
import {
  getUser,
  signInYandexPassport,
} from '../../utils/scripts/api/yandexApi'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const passportCode = searchParams.get('code')
  const dispatch = useAppDispatch()

  const handleGetUser = () => {
    getUser()
      .then(response => {
        dispatch(setUser(response?.data || null))
      })
      .catch(() => {
        dispatch(setUser(null))
      })
  }

  useEffect(() => {
    if (passportCode) {
      signInYandexPassport(passportCode).then(() => {
        handleGetUser()
        searchParams.delete('code')
        setSearchParams(searchParams)
      })
    } else {
      handleGetUser()
    }
  }, [])

  return (
    <div id="App" className="App">
      <SnackbarProvider maxSnack={3} />
      <Outlet />
    </div>
  )
}

export default App
