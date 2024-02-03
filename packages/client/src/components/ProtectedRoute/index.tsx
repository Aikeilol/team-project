import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { selectUser } from '../../store/slices/userSlice'

const ProtectedRoute = () => {
  const user = useAppSelector(state => selectUser(state))

  if (typeof user === 'undefined') {
    return null
  }

  return user ? <Outlet /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
