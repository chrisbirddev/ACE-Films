import React from 'react';
import '..css/AppStart.css';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';
import logoNo from './images/logoNoBack.png';
import posters from './images/posters.jpg';
import FAQ from './components/FAQ';
import Account from './components/Account';
import Contact from './components/Contact';
import Help from './components/Help';
import Legal from './components/Legal';
import Cookies from './components/Cookies';

const AppStart = () => {
  return (
    <Router>
    <div className="appContainer">
      <div className="firstScreen">
        <div className="logo">
          <img src={logoNo} alt="ACE Films Logo" />
        </div>
        <div className="signInButton">
          <button>Sign In</button>
        </div>
        <div className='posters'>
          <img src={posters} alt="reel of movie posters"/>
        </div>
        <div className="content">
          <h1>Unlimited films!</h1>
          <h2>Just £3.99</h2>
          <h3>Sign in or click to Sign Up Now</h3>
          <h4>Cancel any time</h4>
        </div>
        <div className="signUpButton">
          <button>Sign Up Now</button>
        </div>
      </div>
      <div className="footer">
        <div className="footerContent">
          <div className="copyright">
            <p>&copy; 2023 ACE Films</p>
          </div>
          <div className="columns">
            <div className="column">
              <Link to="/faq">FAQ</Link>
              <Link to="/account">Account</Link>
            </div>
            <div className="column">
              <Link to="/contact">Contact Us</Link>
              <Link to="/help">Help</Link>
            </div>
            <div className="column">
              <Link to="/legal">Legal Information</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

        <Routes>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>

      </div>
    </Router>
  );
};

export default AppStart;