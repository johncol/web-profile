import React from 'react';

import './ShowcaseList.scss';

const ShowcaseList = props => {
  return (
    <ul className="browser-default showcase-list">
      {props.children.map(child => (
        <li key={child.props.name}>{child}</li>
      ))}
    </ul>
  );
};

export default ShowcaseList;
