import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../assets/logoo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (menuItem) => {
    setMenu(menuItem);
    setActive(menuItem);
    setIsOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="LOGO" />
      <div className='hamburger' onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li>
          <AnchorLink
            className={`anchor-link ${active === "home" ? "active" : ""}`}
            href='#home'
            onClick={() => handleClick("home")}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${active === "about" ? "active" : ""}`}
            href='#about'
            onClick={() => handleClick("about")}
          >
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${active === "experience" ? "active" : ""}`}
            href='#experience'
            onClick={() => handleClick("experience")}
          >
            Experience
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${active === "learn" ? "active" : ""}`}
            href='#learn'
            onClick={() => handleClick("learn")}
          >
            Learn
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${active === "contact" ? "active" : ""}`}
            href='#contact'
            onClick={() => handleClick("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
