import React from 'react';

import BlankTargetLink from '../blank-target-link/BlankTargetLink';

const BlankTargetIconLink = props => {
  return (
    <BlankTargetLink href={props.href}>
      <ion-icon name={props.icon} title={props.title}></ion-icon>
    </BlankTargetLink>
  );
};

export default BlankTargetIconLink;
