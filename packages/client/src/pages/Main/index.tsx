import React, { Outlet } from 'react-router-dom'
import Menu from '../../components/menu'

function Main() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default Main
