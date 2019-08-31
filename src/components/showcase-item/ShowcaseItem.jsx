import React from 'react';

import BlankTargetLink from '../shared/blank-target-link/BlankTargetLink';

const ShowcaseItem = props => {
  return (
    <section>
      <h6>
        <BlankTargetLink href={props.link}>{props.name}</BlankTargetLink>
      </h6>
      <p>{props.children}</p>
    </section>
  );
};

export default ShowcaseItem;
