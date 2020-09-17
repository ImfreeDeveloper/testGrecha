import React from 'react'
import {Link} from 'react-router-dom'

const TopBar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3">NEWS SITE</Link>
      </div>
    </nav>
  )
}

export default TopBar