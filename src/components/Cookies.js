import React from 'react';
import '..css/pages.css';
import FirstBanner from './FirstBanner';

const Cookies = () => {
  return (
    <div className="bannerContainer">
      <FirstBanner />
      <div className='style'>
        <h1>Cookies</h1>
        <iframe src="https://giphy.com/embed/yFYioeSeCa99YF9Ucj" width="580" height="370" frameBorder="0" allowFullScreen></iframe>
      </div>
      <FirstBanner />
    </div>
  );
};

export default Cookies;
