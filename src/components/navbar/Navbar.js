import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {
    return (
        <>
        <nav>
           <ul>
               <li>Tours</li>
               <li>Events</li>
               <li>Shop Brushy</li>
               <li>Distillery</li>
               <li>Gallery</li>
           </ul>
        </nav>
        </>
    )
}

export default Navbar