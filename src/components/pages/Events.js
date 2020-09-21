import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import handRight from '../../assets/handRight.svg';
import handLeft from '../../assets/handLeft.svg';
import bill from '../../assets/bill2.png';
import bel from '../../assets/car.jpg';
import buy from '../../assets/buy.svg';
import cal from '../../assets/cal.svg';
import './Events.scss';

const Events = () => {
  const [x, setX] = useState(0);

  const handlePrev = () => {
    x === 0 ? setX(-100 * sliderArr.length - 1) : setX(x + 100);
  };
  const handleNext = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      <section className='events-section'>
        <h1 className='events-section__title'>upcoming events</h1>
        {/* <div className='hands'>
          <img src={handLeft} className='left' />

          <img src={handRight} className='right' />
        </div> */}

        <div className='ticket-container'>
          <ul className='ticket-container__ul'>
            <li>
              <figure className='figure'>
                <img src={bill} className='event-img' alt='band photo' />
                <figcaption className='figcap'>
                  <h3>Wyld Stallyns</h3>
                  <h4>fri, apr 12, 2019 8:00 pm</h4>
                </figcaption>
              </figure>
              <button className='ticket-btn'>
                <img src={buy} className='buy' />
                Buy tickets
              </button>
            </li>
            <li>
              <figure className='figure'>
                <img src={bel} className='event-img' alt='blue classic car' />
                <figcaption className='figcap'>
                  <h3>classic car show</h3>
                  <h4>sat-sun, may 25-26, 10 - 5 </h4>
                </figcaption>
              </figure>
              <button className='ticket-btn'>
                <img src={buy} className='buy' />
                Buy tickets
              </button>
            </li>
          </ul>
        </div>
        <div className='cal'>
          <button className='ticket-btn cal-left'>
            <img src={cal} className='buy' />
           events calendar
          </button>
          <button className='ticket-btn'>
           host an event at brushy
          </button>
        </div>

        {/* <div className='hands'>
          <img src={handLeft} className='left' />

          <img src={handRight} className='right' />
        </div> */}
      </section>
    </>
  );
};

export default Events;
