import React from 'react';

import photo from './photo.jpg';
import './Photo.scss';

const Photo = () => {
  return (
    <div className="photo">
      <img src={photo} alt="John's Profile" />
    </div>
  );
};

export default Photo;
