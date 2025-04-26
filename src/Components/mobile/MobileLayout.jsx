// src/components/Mobile/MobileLayout.js
import React from 'react';
import Home from '../mobile/Hero/Hero';
import Navbar from '../mobile/Navbar/Navbar';
import About from '../mobile/About/About';
import Experience from '../mobile/Experience/Experience'
import Contact from '../mobile/Contact/Contact';
const MobileLayout = () => {
  return (
    <div>
      {/* Build your Flow3 Figma design here */}
      {/* <h1>Mobile Layout coming soon!</h1> */}
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>

    </div>
  );
};

export default MobileLayout;
