import React from 'react';

import Page from '../page/Page';
import LinksList from '../shared/links-list/LinksList';
import LinksListItem from '../shared/links-list-item/LinksListItem';

const Showcase = () => {
  return (
    <Page>
      <p>
        I have built several toy apps and web pages as a hobby and as part courses that I
        have taken. I'll list here the ones that are worth it:
      </p>

      <LinksList>
        <LinksListItem
          name="Would you rather?"
          link="https://johncol.github.io/nano-degree-would-you-rather"
        >
          Sample react+redux project that allows users to post and answer questions and
          see statistics. Use johndoe as user and password to check it working.
        </LinksListItem>

        <LinksListItem
          name="Click the canvas"
          link="https://johncol.github.io/click-the-canvas"
        >
          Simple html/javascript program that interacts with the user and draws some
          geometrical shapes
        </LinksListItem>

        <LinksListItem name="Trillo" link="https://johncol.github.io/css-course-trillo">
          Simple webpage built using flexbox
        </LinksListItem>

        <LinksListItem name="Natours" link="https://johncol.github.io/css-course-natours">
          Beautiful web page showcasing many interesting CSS3 features and techniques
        </LinksListItem>

        <LinksListItem name="Nexter" link="https://johncol.github.io/css-course-nexter">
          Awesome webpage to showcase how to use CSS3 grids to build your site layout
        </LinksListItem>
      </LinksList>
    </Page>
  );
};

export default Showcase;
