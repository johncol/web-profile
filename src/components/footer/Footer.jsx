import React from 'react';

import BlankTargetLink from '../shared/blank-target-link/BlankTargetLink';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        {'2019'}
        {' - '}
        {'(+57) 305 772 4370'}
        {' - '}
        <BlankTargetLink href="https://www.linkedin.com/in/john-cely">
          LinkedIn
        </BlankTargetLink>
        {' - '}
        <BlankTargetLink href="https://github.com/johncol">GitHub</BlankTargetLink>
      </div>
    </footer>
  );
};

export default Footer;
