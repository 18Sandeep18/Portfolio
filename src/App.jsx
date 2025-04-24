import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Learn from './Components/Learn/Learn'



const App = () => {
  return (
    <Router basename="/">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Learn />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
