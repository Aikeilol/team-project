import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

const ProtectedRoute = () => {
  const { user } = useAppSelector(state => state.user)

  if (typeof user === 'undefined') {
    return null
  }

  return user ? <Outlet /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
