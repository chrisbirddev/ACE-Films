import React from 'react';
import '..css/pages.css';
import FirstBanner from './FirstBanner';

const Help = () => {
  return (
    <div className="bannerContainer">
      <FirstBanner />
      <div className='style'>
        <h1>Help Center</h1>
        <iframe src="https://giphy.com/embed/sU511xfb7ORqw" width="580" height="370" frameBorder="0" allowFullScreen></iframe>
      </div>
      <FirstBanner />
    </div>
  );
};

export default Help;