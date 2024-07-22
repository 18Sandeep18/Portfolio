import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState('skills');

  return (
    <div id='about' className="about">
      <div className='about-content'>
        <div className="abt-container">
          <div className="abt-sidebar">
            <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
            <button onClick={() => setActiveSection('certifications')} className={activeSection === 'certifications' ? 'active' : ''}>Certifications</button>
            <button onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button>
          </div>
          <div className="main-content">
            {activeSection === 'skills' && (
              <div className="section skills">
                <h1>Skills</h1>
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="skill-name">Java</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '90%' }}></div>
                    </div>
                    <div className="skill-percent-text">90%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">Python</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '80%' }}></div>
                    </div>
                    <div className="skill-percent-text">80%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">HTML</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '70%' }}></div>
                    </div>
                    <div className="skill-percent-text">70%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">CSS</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-percent-text">75%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-percent-text">75%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">DJango</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-percent-text">75%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">React</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '80%' }}></div>
                    </div>
                    <div className="skill-percent-text">80%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">Node.js</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '60%' }}></div>
                    </div>
                    <div className="skill-percent-text">60%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">Express</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '55%' }}></div>
                    </div>
                    <div className="skill-percent-text">55%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">MongoDB</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" style={{ width: '65%' }}></div>
                    </div>
                    <div className="skill-percent-text">65%</div>
                  </div>
                </div>
              </div>
            )}
            {activeSection === 'education' && (
              <div className="section education">
                <h1>Education</h1>
                <div className="details">
                  <h3>BTech Graduation</h3>
                  <ul>
                    <li>Vellore Institute of Technology</li>
                    <li>Graduation Year: 2025</li>
                    <li>CGPA: 8.75</li>
                  </ul>
                  <h3>Secondary Education</h3>
                  <ul>
                    <li>Jawahar Navodaya Vidyalaya (CBSE)</li>
                    <li>Passed Year: 2020</li>
                    <li>Percentage: 90.5</li>
                  </ul>
                </div>
              </div>
            )}
            {activeSection === 'certifications' && (
              <div className="section certifications">
                <h1>Certifications</h1>
                <div className="certifications-grid">
                  <div className="certification-item">
                    <h3>AWS - Solution Architect</h3>
                    <p>Description of certification 1.</p>
                    <button className="view-certificate">View Certificate</button>
                  </div>
                  <div className="certification-item">
                    <h3>SmartBridge AIML - Google</h3>
                    <p>Description of certification 2.</p>
                    <button className="view-certificate">View Certificate</button>
                  </div>
                  <div className="certification-item">
                    <h3>IntrainTech AIML</h3>
                    <p>Description of certification 3.</p>
                    <button className="view-certificate">View Certificate</button>
                  </div>
                  <div className="certification-item">
                    <h3>Certification Title 4</h3>
                    <p>Description of certification 4.</p>
                    <button className="view-certificate">View Certificate</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
