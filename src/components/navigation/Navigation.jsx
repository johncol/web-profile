import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" activeClassName="active" exact={true}>
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
