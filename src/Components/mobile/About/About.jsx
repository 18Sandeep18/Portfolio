import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const skills = [
  // Languages
  { name: 'Java', percentage: 87, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'DSA', percentage: 90, icon: 'https://cdn-icons-png.flaticon.com/512/9431/9431139.png' },

  // Frameworks
  { name: 'React.js', percentage: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', percentage: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Machine Learning', percentage: 85, icon: 'https://cdn-icons-png.flaticon.com/512/5439/5439444.png' },
  { name: 'Deep Learning', percentage: 80, icon: 'https://cdn-icons-png.flaticon.com/512/4149/4149640.png' },
  // Databases
  { name: 'SQL', percentage: 85, icon: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
  { name: 'MongoDB', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <motion.div className="skills-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <h4>{skill.name}</h4>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <span className="percentage">{skill.percentage}%</span>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'certifications':
        return (
          <div className="text-content">
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
          <div className="text-content">
            <h3>BTech Graduation:</h3>
            <ul>
              <li>Vellore Institute of Technology</li>
              <li>Graduation Year: 2025</li>
              <li>CGPA: 8.76</li>
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

      {/* Content */}
      <div className="content-box">
        {renderContent()}
      </div>
    </section>
  );
};

export default About;
