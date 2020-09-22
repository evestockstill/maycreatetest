import React, { useState } from 'react';
import endLine from '../../assets/endLine.png';
import vodka from '../../assets/vodka.png';
import distil from '../../assets/distil.png';
import direct from '../../assets/direction.png';
import Widget from '../pages/Widget';
import directionArrow from '../../assets/directSvg.svg';
import './Weather.scss';

const Weather = () => {
  return (
    <>
      <section className='weather-section'>
        <div className='liquor-container'>
          <ul className='liquor-container__ul'>
            <li>
              <figure className='figure'>
                <img src={endLine} alt='endline moonshine' />
              </figure>
            </li>
            <li>
              <figure className='figure'>
                <img src={vodka} alt='vodka photo' />
              </figure>
            </li>
            <li>
              <figure className='figure'>
                <img src={distil} alt='distillery photo' />
              </figure>
            </li>
          </ul>
        </div>

        <div className='weather-container'>
          <ul className='weather-container__ul'>
            <li>
              <figure className='figure '>
                <img src={direct} alt='get directions' />
              </figure>
            </li>
            <li>
              <figure className='figure'>
                <Widget />
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <div className='wire'></div>
    </>
  );
};
export default Weather;
