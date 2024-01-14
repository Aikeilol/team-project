import { Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom'

function Forum() {
  return (
    <>
      <h1>Forum</h1>
      <Link to="/topics/new">New Topic</Link>
      <br />
      <Link to="/topics/123">Some Topic</Link>
      <Outlet />
    </>
  )
}

export default Forum
