import React from 'react';

import Page from '../page/Page';
import Photo from '../photo/Photo';
import DefaultHeader from '../header/DefaultHeader';

import './Home.scss';

const Home = () => {
  return (
    <Page header={<DefaultHeader />}>
      <div className="content">
        <Photo />
        <article>
          <p>I am John Cely.</p>
          <p>
            I am a software developer with 7+ years of experience working with java and
            angular, and most recently with go and react.
          </p>
          <p>
            I love coding, that's my hobby and my job, and I do it in the best way I’m
            able to, keeping code clean, readable, with meaningful tests, and split into
            small pieces that make sense.
          </p>
        </article>
      </div>
    </Page>
  );
};

export default Home;
