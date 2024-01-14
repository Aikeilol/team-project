import { useRouteError, NavLink } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <h1>Ooops!</h1>
      <NavLink to="/">Back</NavLink>
    </div>
  )
}

export default ErrorPage
