import React from 'react';

import Footer from '../footer/Footer';

import './Page.scss';

const Page = props => {
  return (
    <div className="page">
      <header>{props.header}</header>

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Page;
