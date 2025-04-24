import React from 'react';
import './Hero.css';
import { unstable_HistoryRouter } from 'react-router-dom';
import profilePic from '../../assets/profile.png'; // update with the correct path to your image
import resume from '../../assets/Resume.pdf'; // update with the correct path to your resume
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Home = () => {

    const handleDownloadResume = () => {
        window.open(resume, '_blank');
    };
    return (
        <div id='home' className="home-container">
            <div className="image-container">
                <img src={profilePic} alt="Tadi Sandeep Rishi" />
            </div>
            <div className="description-container">
                <h1>TADI SANDEEP RISHI,</h1>
                <h2>-FULL STACK WEB DEVELOPER</h2>
                <p>
                    I am a B.Tech final year Computer Science Engineering student specialized in AIML, good at problem-solving.
                </p>
                <div className="buttons-container">
                    <AnchorLink
                        className="connect-button"
                        href='#contact'
                        onClick={() => handleClick("contact")}
                        >
                        Contact
                    </AnchorLink>
                    <button className="resume-button"  onClick={handleDownloadResume}>Download Resume</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
