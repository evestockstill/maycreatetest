import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Images.scss';
import bullet from '../../assets/bullet.svg'
import visit from '../../assets/visit.png';
import shop from '../../assets/shop.png';
import tours from '../../assets/tours.png';
import table from '../../assets/table.png';

const Images = () => {
  
  
  return (
    <>
      <main>
        <div className='title'>
          <h3>Welcome to the</h3>
          <h1>End of the Line.</h1>
        </div>

        <article>
          Known as the "End of the Line," Brushy Mountain State Penitentiary was
          the last place you wanted to be sent to. <br />
          Brushy was a maximum-security prison that held murders, robbers,
          rapists, and evil men who committed <br />
          heartless crimes with little remorse. Today, it's open to the public
          to explore its history.{' '}
        </article>
        <div className='img-container'>
          <ul>
            <li>
              <img src={visit} />
            </li>
            <li>
              <img src={shop} />
            </li>
            <li>
              <img src={tours} />
            </li>
            <li>
              {' '}
              <img src={table} />
            </li>
          </ul>
        </div>
        <div className='info-container'>
          <ul>
            <li>
              <h3>
                Tours & museum Hours <br />
                <span>
                  10:30a - 6:30p <span className='bullet'>.</span> 7 Days <br />{' '}
                  (Last tickets sold at 5p)
                </span>
              </h3>
            </li>
            <li>
              <h3>
                Gift Shop Hours <br />
                <span>
                  10:30a - 8p <span className='bullet'>.</span> 7 Days{' '}
                </span>
              </h3>
            </li>
            <li>
              <h3>
                Warden's Table <br />
                <span>
                  11:00a - 8p <span className='bullet'>.</span> 7 Days{' '}
                </span>
              </h3>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Images;
