import React, { useState } from 'react';
import './Navbar.css'; // Link CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      // Switch to Light Mode
      document.body.classList.add('light-mode');
    } else {
      // Switch to Dark Mode
      document.body.classList.remove('light-mode');
    }
  };
  

  return (
    <>
      {/* Top Navbar */}
      <div className="mobile-navbar">
        <h1 className="navbar-logo">Sandeep Rishi</h1>
        <div className="navbar-buttons">
          <button className="toggle-button" onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="menu-button" onClick={toggleMenu}>
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="menu-overlay">
          <ul className="menu-list">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#learn" onClick={toggleMenu}>Learn</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
