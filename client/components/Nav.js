import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: { pathname } }) => {
  const NavTabs = [
    { name: 'Optimize', path: '/optimize' },
    { name: 'Customize', path: '/customize' }
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-header">
          <Link to="/">betterBuildWins</Link>
        </div>
        <ul>
          {NavTabs.map(tab => {
            return (
              <li
                key={tab.name}
                className={`${tab.path === pathname ? 'nav-tab active' : ''}`}
              >
                <Link to={tab.path}>{tab.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
