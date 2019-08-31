import React from 'react';

import Page from '../page/Page';
import DefaultHeader from '../header/DefaultHeader';

const Work = () => {
  return (
    <Page header={<DefaultHeader />}>
      <article>
        <p>
          I currently work as a fullstack engineer at Twilio, where, along with my 3
          people team, we tackle most of software development cicle: write proposals that
          address product requirements and technical needs, plan the implementation of
          those proposals by creating and prioritizing user stories, develop, test and
          deploy the applications, and support them in case of any type of service
          degradation.
        </p>
        <p>
          I'm interested in discovering front end technologies, libraries and new language
          features. I like TypeScript over Javascript, types tell us a lot about the code
          we read, they let us know many things regarding what to expect from an object
          without the need of looking at all the calls stack it was passed by to really
          understand its true shape.
        </p>
        <p>
          I haven't had the chance to check and build something with GraphQL, and it looks
          very promising, so that's the next PoC I want to code, I'll make sure to share
          the result here.
        </p>
      </article>
    </Page>
  );
};

export default Work;
