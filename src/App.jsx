import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'



const App = () => {
  return (
    <Router basename="https://18sandeep18.github.io/Portfolio">
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
    </Router>
  )
}

export default App;
