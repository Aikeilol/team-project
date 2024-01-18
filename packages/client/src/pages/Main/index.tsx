import { Outlet, NavLink } from 'react-router-dom'
import './style.css'

function Main() {
  return (
    <>
      <nav className="menu">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/forum">Forum</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Main
