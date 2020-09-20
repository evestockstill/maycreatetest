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

        <article className='article'>
          Known as the "End of the Line," Brushy Mountain State Penitentiary was
          the last place you wanted to be sent to. <br />
          Brushy was a maximum-security prison that held murders, robbers,
          rapists, and evil men who committed <br />
          heartless crimes with little remorse. Today, it's open to the public
          to explore its history.{' '}
        </article>
        <div className='img-container'>
          <ul className='img-container__ul'>
            <li>
              <figure className='figure'>
                <img src={visit} alt='take a tour' />
              </figure>
            </li>
            <li>
              <figure className='figure'>
                <img src={shop} alt='shop photo' />
              </figure>
            </li>
            <li>
              <figure className='figure'>
                <img src={tours} alt='our tours' />
              </figure>
            </li>
            <li>
              <figure className='figure'>
                <img src={table} alt='warrens table'/>
              </figure>
            </li>
          </ul>
        </div>
        <div className='info-container'>
          
              <h3 className='info-title'>
                Tours & museum <br />Hours 
                <p>
                  10:30a - 6:30p <span className='bullet'>.</span> 7 Days <br />{' '}
                  (Last tickets sold at 5p)
                </p>
              </h3>
           
              <h3 className='info-title'>
                Gift Shop Hours 
                <p>
                  10:30a - 8p <span className='bullet'>.</span> 7 Days{' '}
                </p>
              </h3>
           
              <h3 className='info-title'>
                Warden's Table 
                <p>
                  11:00a - 8p <span className='bullet'>.</span> 7 Days{' '}
                </p>
              </h3>
          
        </div>
      </main>
    </>
  );
};

export default Images;
