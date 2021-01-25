import React from 'react';

const BlankTargetLink = props => {
  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      {props.children}
    </a>
  );
};

export default BlankTargetLink;
