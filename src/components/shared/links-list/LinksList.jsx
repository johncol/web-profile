import React from 'react';

import './LinksList.scss';

const LinksList = props => {
  const children = !props.children
    ? []
    : !Array.isArray(props.children)
    ? [props.children]
    : props.children;

  return (
    <ul className="browser-default links-list">
      {children.map(child => (
        <li key={child.props.name}>{child}</li>
      ))}
    </ul>
  );
};

export default LinksList;
