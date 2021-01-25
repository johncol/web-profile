import React from 'react';

import DefaultHeader from '../header/DefaultHeader';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

import './Page.scss';

const Page = props => {
  return (
    <div className="page">
      <header>
        {props.header || <DefaultHeader />}
        <Navigation />
      </header>

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Page;
