import React from 'react';
import './Hero.css'; // Link the CSS
import profile from '../../../assets/PhotoID.jpg'; // Your image path

const Home = () => {
  return (
    <div className="mobile-home">
      {/* Profile Image */}
      <img 
        src={profile}
        alt="Sandeep Rishi"
        className="profile-img"
      />

      {/* Name and Role */}
      <h2 className="name-title">
        TADI SANDEEP RISHI
      </h2>
      <h3 className="role-title">
        - AI SYSTEM ENGINEER
      </h3>

      {/* Description */}
      <p className="description">
        I am a B.Tech final year, Computer Science Engineering student
        specialized in AIML, good at problem-solving.
      </p>

      {/* Buttons */}
      <div className="buttons-container">
        <button className="action-button">Contact Me</button>
        <button className="action-button">Download Resume</button>
      </div>
    </div>
  );
};

export default Home;
