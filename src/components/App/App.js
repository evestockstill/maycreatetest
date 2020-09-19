import React from 'react';
import './App.scss';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { fab } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../navbar/Navbar';
import Hero from '../pages/Hero';
import Events from '../pages/Events';
import Images from '../pages/Images';
import Footer from '../footer/Footer';


export default function App() {
  return (
    <>
      <>
        {/* <Router> */}
          <Navbar />
          <Hero />
          <Events />
          <Images />
          <Footer />

          {/* <Route exact path='/' component={MainPage} /> */}
         
        
        {/* </Router> */}
      </>
    </>
  );
}
  