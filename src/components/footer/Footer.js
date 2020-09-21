import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
const Footer = () => {
  const Insta = (
    <a
      target='self'
      href='https://www.instagram.com/historicbrushymountain/'
      className='footerLinks'
    >
      <FontAwesomeIcon
        icon={['fab', 'instagram']}
        className='icons'
        id='insta'
      ></FontAwesomeIcon>
    </a>
  );
  const FaceBook = (
    <a
      target='self'
      href='https://www.facebook.com/brushymtnstatepen/'
      className='footerLinks'
    >
      <FontAwesomeIcon
        icon={['fab', 'facebook-f']}
        className='icons'
        id='faceBook'
      ></FontAwesomeIcon>
    </a>
  );
  const Twitter = (
    <a
      target='self'
      href='https://twitter.com/brushymtngroup'
      className='footerLinks'
    >
      <FontAwesomeIcon
        icon={['fab', 'twitter']}
        className='icons'
        id='twitter'
      ></FontAwesomeIcon>
    </a>
  );
  return (
    <>
      <footer>
        <section className='main-footer'>
          <div className='main-footer__titleContainer'>
            <img src={logo} className='main-footer__logo' />
            <div className='follow'>
              <h1 className='main-footer__title'>Follow us</h1>{' '}
              <div className='main-footer__icons'>
                <p className='background'>{FaceBook}</p>
                <p className='background'> {Insta}</p>
                <p className='background'> {Twitter}</p>
              </div>
            </div>
          </div>

          <div className='main-footer__yellow'>
            <p className='main-footer__yellow-space'>
              Media Relations <span> | </span> Jobs <span> | </span> Contact
            </p>
            <p>
              Terms of Use & Release<span> | </span>Site Map<span> | </span>
              Privacy Policy
            </p>
          </div>
          <div className='info-wrapper'>
            <div className='main-footer__info'>
              <h3 className='white'>
                Tours & museum Hours
                <p>
                  10:30a - 6:30p <span className='bullet'>.</span> 7 Days <br />{' '}
                  Last tickets sold at 5p
                </p>
              </h3>

              <h3 className='white'>
                Gift Shop
                <p>
                  10:30a - 8p <span className='bullet'>.</span> 7 Days{' '}
                </p>
              </h3>

              <h3 className='white'>
                Warden's Table
                <p>
                  11:00a - 8p <span className='bullet'>.</span> 7 Days{' '}
                </p>
              </h3>
            </div>
          </div>
          <div className='circa'>
            <p>
              9182 Hwy 116, Petros, TN 37845 <span> | </span> 423-324-TOUR
              <span> | </span>423-324-8687
            </p>
            <p> &copy; 2019 brushy mountain group. all rights reserved.</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
