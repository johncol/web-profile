import React from 'react';

import NavigationLink from '../navigation-link/NavigationLink';

import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/work">Work</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/showcase">Showcase</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
