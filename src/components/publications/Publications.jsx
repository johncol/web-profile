import React from 'react';

import Page from '../page/Page';
import BlankTargetLink from '../shared/blank-target-link/BlankTargetLink';
import LinksList from '../shared/links-list/LinksList';
import LinksListItem from '../shared/links-list-item/LinksListItem';

const Publications = () => {
  return (
    <Page>
      <p>
        I have only written one article so far, but that number will increase for sure in
        the coming months:
      </p>

      <LinksList>
        <LinksListItem
          name="Test Driven Development and Angular"
          link="https://medium.com/@johncol/test-driven-development-and-angular-9110d62ce7ec"
        >
          Here I explain, step by step, how to test/develop an angular service using TDD.
          It contains an introduction of TDD and a code example for a service.
        </LinksListItem>
      </LinksList>
    </Page>
  );
};

export default Publications;
