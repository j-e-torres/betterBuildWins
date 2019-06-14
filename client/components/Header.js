import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ location: { pathname } }) => {
  const leftTabs = [
    { name: 'Home', path: '/home' },
    { name: 'Optimize', path: '/optimize' },
    { name: 'Customize', path: '/customize' }
  ]

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/home">
            betterBuildWins
          </Link>
        </div>
        <ul className="nav navbar-nav">
          {leftTabs.map(tab => {
            return (
              <li
                key={tab.name}
                className={`${tab.path === pathname ? 'active' : ''}`}
              >
                <Link to={tab.path}>{tab.name}</Link>
              </li>
            )
          })}
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/login">
              <span className="glyphicon glyphicon-user" />
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span className="glyphicon glyphicon-log-in" />
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
