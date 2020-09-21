import React from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Hero from '../pages/Hero';
import Events from '../pages/Events';
import Images from '../pages/Images';
import Weather from '../pages/Weather';
import Footer from '../footer/Footer';


export default function App() {
  return (
    <>
      <>
        {/* <Router> */}
          <Navbar />
          <Hero />
          <Images />
          <Events />
          <Weather />
          <Footer />

          {/* <Route exact path='/' component={MainPage} /> */}
         
        
        {/* </Router> */}
      </>
    </>
  );
}
  