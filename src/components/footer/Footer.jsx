import React from 'react';

import BlankTargetIconLink from '../shared/blank-target-icon-link/BlankTargetIconLink';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        {'2019 Ⓒ'}
        {' - '}

        {'(+57) 305 772 4370'}
        {' - '}

        <BlankTargetIconLink
          href="mailto:john.19col+web-profile@gmail.com"
          icon="mail-open"
          title="Mail"
        />

        <BlankTargetIconLink
          href="https://www.linkedin.com/in/john-cely"
          icon="logo-linkedin"
          title="LinkedIn"
        />

        <BlankTargetIconLink
          href="https://github.com/johncol"
          icon="logo-github"
          title="GitHub"
        />

        <BlankTargetIconLink
          href="https://codepen.io/johncol"
          icon="logo-codepen"
          title="CodePen"
        />

        <BlankTargetIconLink
          href="https://profile.codersrank.io/user/johncol"
          icon="code"
          title="CodersRank"
        />
      </div>
    </footer>
  );
};

export default Footer;
