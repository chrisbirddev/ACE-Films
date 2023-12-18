import React from 'react';
import '..css/pages.css';
import FirstBanner from './FirstBanner';
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div className="bannerContainer">
      <FirstBanner />
      <div className='style'>
        <h1>Contact Us</h1>
      </div>
    <div className='contCont'>
      <div>
        <h2>Address</h2>
        <p>14 Apple Crescent East, Manchester, M16 ODE</p>
      </div>
      <div>
        <h2>Phone</h2>
        <p>0161 549 7504</p>
      </div>
      <div>
        <h2>Email</h2>
        <p>contact@acefilms.co.uk</p>
      </div>
    </div>
    <FirstBanner />
    </div>
  );
};

export default Contact;