import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const TopBar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3">NEWS SITE</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <NavLink to="/" className="navbar-item">Главная</NavLink>
          <NavLink to="/profile/123" className="navbar-item">Профиль</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default TopBar