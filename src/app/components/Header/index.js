import React, { memo } from 'react';
import { connect } from 'react-redux';

import './index.scss';

const Header = memo(({ apiVersion }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="/">
            betterBuildWins
          </a>
        </li>

        <li className="navbar__item">
          <div className="navbar__text">
            {/* <span>Patch</span> */}
            <span>{apiVersion.version}</span>
          </div>
        </li>
      </ul>

      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="/optimize">
            Optimize
          </a>
        </li>

        <li className="navbar__item">
          <a className="navbar__link" href="/customize">
            Customize
          </a>
        </li>
      </ul>
    </nav>
  );
});

const mapState = ({ apiVersion }) => ({ apiVersion });

export default connect(mapState)(Header);
