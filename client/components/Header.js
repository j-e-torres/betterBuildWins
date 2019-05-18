import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container" style={{ border: 'solid 1px black' }}>
      <div className="logo">logo</div>
      <div className="header-app-name">
        <Link to="/home">betterBuildWins</Link>
      </div>
      <div className="header-buttons">
        <Link to="/users/login/form">Log in</Link>
        <Link to="/users/signup/form">Sign Up</Link>
      </div>
    </div>
  )
}

export default Header
