import React from 'react';

import BlankTargetLink from '../blank-target-link/BlankTargetLink';

const LinksListItem = props => {
  return (
    <section>
      <h6>
        <BlankTargetLink href={props.link}>{props.name}</BlankTargetLink>
      </h6>
      <p>{props.children}</p>
    </section>
  );
};

export default LinksListItem;
