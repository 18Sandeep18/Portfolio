import React from 'react';
import './Hero.css';
import profilePic from '../.././assets/PortfolioProfile-removebg-preview.png'; // update with the correct path to your image

const Home = () => {
    return (
        <div id = 'home'className="home-container">
            <div className="image-container">
                <img src={profilePic} alt="Tadi Sandeep Rishi" />
            </div>
            <div className="description-container">
                <h1>TADI SANDEEP RISHI,</h1>
                <h2>FULL STACK WEB DEVELOPER</h2>
                <p>
                    I am a B.Tech final year Computer Science Engineering student specialized in AIML, good at problem-solving.
                </p>
                <div className="buttons-container">
                    <button className="connect-button">Connect With Me</button>
                    <button className="resume-button">Download Resume</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
