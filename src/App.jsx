import React from 'react'

import Navbar from './Components/desktop/Navbar/Navbar'
import Hero from './Components/desktop/Hero/Hero'
import About from './Components/desktop/About/About'
import Experience from './Components/desktop/Experience/Experience'
import Contact from './Components/desktop/Contact/Contact'
import Footer from './Components/desktop/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Learn from './Components/desktop/Learn/Learn'

import MobileLayout from './Components/mobile/MobileLayout'; 

import useIsMobile from './hooks/useIsMobile'
const App = () => {
  const isMobile = useIsMobile();
  return (
    <Router basename="/">
      {isMobile ? (
        <MobileLayout />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Learn />
          <Contact />
          <Footer />
        </div>  
      )}
    </Router>
  )
}

export default App;
