import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import handRight from '../../assets/handRight.svg';
import handLeft from '../../assets/handLeft.svg';
import bill from '../../assets/bill.png';
import bel from '../../assets/bel.png';
import './Events.scss';

const Events = () => {
  return (
    <>
      <section className='events-section'>
        <h1 className='events-section__title'>upcoming events</h1>
        <div className='hands'>
          <img src={handLeft} className='left' />
        </div>

        <div className='ticket-container'>
          <ul className='ticket-container__ul'>
            <li>
              <figure className='figure'>
                <img src={bill} alt='band photo' />
                <figcaption>
                  <h3>Wild Stallyns</h3>
                  <h4>fri, apr 12, 2019 8:00 pm</h4>
                </figcaption>
              </figure>
              <button>Buy tickets</button>
            </li>
            <li>
              <figure className='figure'>
                <img src={bel} alt='blue classic car' />
                <figcaption>
                  <h3>classic car show</h3>
                  <h4>sat-sun, may 25-26, 10 - 5 </h4>
                </figcaption>
              </figure>
              <button>Buy tickets</button>
            </li>
          </ul>
        </div>
        <div className='hands'>
          <img src={handRight} className='right' />
        </div>
      </section>
    </>
  );
};

export default Events;
