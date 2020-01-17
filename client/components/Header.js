import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: { pathname } }) => {
  const NavTabs = [
    { name: 'Optimize', path: '/optimize' },
    { name: 'Customize', path: '/customize' }
  ];

  return (
    <header className="clearfix">
      <nav>
        <div className="main-nav-logo">
          <Link to="/">betterBuildWins</Link>
        </div>

        <ul className="main-nav">
          {NavTabs.map(tab => {
            return (
              <li
                key={tab.name}
                className={`${
                  tab.path === pathname ? 'main-nav-tab active' : ''
                }`}
              >
                <Link to={tab.path}>{tab.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
