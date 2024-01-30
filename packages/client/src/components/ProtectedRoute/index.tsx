import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

const ProtectedRoute = () => {
  const isAuth = useAppSelector(state => state.user).user

  return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
