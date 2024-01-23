import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuth = useLoaderData()

  console.log(isAuth)

  return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
