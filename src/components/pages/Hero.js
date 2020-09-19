import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import hero from '../../assets/trueHero.jpg';
import logo from '../../assets/logo.png';

const Hero = () => {
  return (
    <>
      <main>
        <div className='hero'>
          <img src={hero} className='hero__image' />
          {/* <div className='learn'>
            <h2>Learn More</h2>
          </div>
          <div>{logo}</div> */}
        </div>
      </main>
    </>
  );
};

export default Hero;
