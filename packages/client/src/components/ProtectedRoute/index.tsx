import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

const ProtectedRoute = () => {
  const isAuth = useAppSelector(state => state.user).user
  console.log(isAuth)

  if (typeof isAuth === 'undefined') {
    console.log(1)

    return null
  }

  return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
