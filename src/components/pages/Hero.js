import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import hero from '../../assets/trueHero.jpg';
import logo from '../../assets/logo.png';
import square from '../../assets/square.svg';
import arrow from '../../assets/arrowhead.svg';

const Hero = () => {
  return (
    <>
      <header className='header'>
        {/* <div className="nav-main"> */}

       
        {/* <div className='header__logo-box'> */}
        {/* <div className="nav-closed">
          <div className="nav-left open">
          <div className='hamburger'>
            <img src={square} className='square'/>
          </div>
          <p className='menu'>Menu</p>

          </div>
          <div className="nav-right">
            <div className="nav-logo">
            <img src={logo} alt='logo' className='header__logo' />

            </div>
          </div>
        </div> */}
       

        <div className='header__text-box'>
          <h1 className='heading'>
            <span className='heading__logo'>
              <img src={logo} className='heading__logo--main'></img>
              <h1>Come visit the prison that ate america's sins.</h1>
            </span>
            
            <span>
            <div className='heading__sub'>Learn More</div>
              <img src={arrow} className='arrow'/>
            </span>
          </h1>
        </div>
        {/* </div> */}
      </header>
    </>
  );
};

export default Hero;
