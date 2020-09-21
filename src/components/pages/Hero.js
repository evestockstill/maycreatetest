import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import logo from '../../assets/logo.png';
import sm from '../../assets/smLogo.png';
import square from '../../assets/square.svg';
import arrow from '../../assets/arrowhead.svg';

const Hero = () => {
  return (
    <>
      <header className='header'>
        <div className='header__logo-box'>
          <button className='menu-btn'>
            <img src={square} className='square' />
            <p className='menu'>menu</p>
            <img src={sm} className='sm-logo' />
          </button>
        </div>
        <div className='header__text-box'>
          <h1 className='heading'>
            <span className='heading__logo'>
              <img src={logo} className='heading__logo--main'></img>
              <h1>Come visit the prison that ate america's sins.</h1>
            </span>

            <span>
              <div className='heading__sub'>Learn More</div>
              <img src={arrow} className='arrow' />
            </span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Hero;
