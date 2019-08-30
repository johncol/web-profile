import React from 'react';

import Page from '../page/Page';
import Photo from '../photo/Photo';
import Intro from '../intro/Intro';
import DefaultHeader from '../header/DefaultHeader';

import './Home.scss';

const Home = () => {
  return (
    <Page header={<DefaultHeader />}>
      <div className="content">
        <Photo />
        <Intro />
      </div>
    </Page>
  );
};

export default Home;
