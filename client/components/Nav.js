import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: { pathname } }) => {
  const NavTabs = [
    { name: 'Optimize', path: '/optimize' },
    { name: 'Customize', path: '/customize' }
  ];

  return (
    <nav className="main-nav">
      <div className="header">
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
    </nav>
  );
};

export default Nav;
