import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = props => {
  return (
    <NavLink activeClassName="active" exact={true} {...props}>
      {props.children}
    </NavLink>
  );
};

export default NavigationLink;
