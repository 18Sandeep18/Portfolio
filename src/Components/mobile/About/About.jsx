import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div>
            <h3>Skills</h3>
            <ul>
              <li>Python, Java</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>React.js, Node.js</li>
            </ul>
          </div>
        );
      case 'certifications':
        return (
          <div>
            <h3>Certifications</h3>
            <ul>
              <li>Deep Learning Specialization - Coursera</li>
              <li>Data Science Professional Certificate - IBM</li>
              <li>Cloud Fundamentals - Microsoft</li>
            </ul>
          </div>
        );
      case 'education':
      default:
        return (
          <div>
            <h3>BTech Graduation:</h3>
            <ul>
              <li>Vellore Institute of Technology</li>
              <li>Graduation Year: 2025</li>
              <li>CGPA: 8.75</li>
            </ul>
            <h3>Secondary Education:</h3>
            <ul>
              <li>Jawahar Navodaya Vidyalaya (CBSE)</li>
              <li>Year Passed: 2020</li>
              <li>Percentage: 90.5%</li>
            </ul>
          </div>
        );
    }
  };

  return (
    <section id="about" className="about-section">
      <h2>ABOUT</h2>

      {/* Buttons */}
      <div className="button-container">
        <button 
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`} 
          onClick={() => setActiveTab('skills')}
        >
          SKILLS
        </button>
        <button 
          className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`} 
          onClick={() => setActiveTab('certifications')}
        >
          CERTIFICATIONS
        </button>
      </div>

      <div className="single-button">
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} 
          onClick={() => setActiveTab('education')}
        >
          EDUCATION
        </button>
      </div>

      {/* Content Box */}
      <div className="content-box">
        {renderContent()}
      </div>
    </section>
  );
};

export default About;
