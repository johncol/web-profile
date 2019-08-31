import React from 'react';

import Footer from '../footer/Footer';

import './Page.scss';
import Navigation from '../navigation/Navigation';

const Page = props => {
  return (
    <div className="page">
      <header>
        {props.header}
        <Navigation />
      </header>

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Page;
