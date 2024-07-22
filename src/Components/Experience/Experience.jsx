import React, { act, useState } from 'react';
import './Experience.css';
import im from '../../assets/Product.png'
import img1 from '../../assets/home.jpg'
import img2 from '../../assets/Roll.jpg'
import img3 from '../../assets/Car.jpg'
import img4 from '../../assets/Product.png'
import img5 from '../../assets/home.jpg'
const projects = [
  {
    name: 'Pneuemonia Detection Using CNN',
    title: 'Pneuemonia Detection Using CNN',
    description: 'Description of Project 1',
    image: img1,
    liveDemo: 'http://livedemo1.com',
    github: 'http://github1.com',
  },
  {
    name: 'Roll the dice',
    title: 'Roll the dice',
    description: 'Description of Project 2',
    image: img2,
    liveDemo: 'http://livedemo2.com',
    github: 'http://github2.com',
  },
  {
    name: 'Car Price Prediction',
    title: 'Car Price Prediction',
    description: 'Description of Project 3',
    image: img3,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'E-commerce Website',
    title: 'E-commerce Website',
    description: 'Description of Project 4',
    image: img4,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'ChatBot',
    title: 'ChatBot',
    description: 'Description of Project 5',
    image: img5,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  
  // Add remaining projects similarly
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div id="experience" className="projects">
      <div className="projects-content">
        <div className="container">
          <div className="sidebar">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(project)}
                className={activeProject.name === project.name ? 'active' : ''}
              >
                {project.name}
              </button>
            ))}
          </div>
          <div className="main-content">
            <div class="project-description">
              <div class="description-title">{activeProject.title}</div>
              <div className="sub-pro">

                <div class="description-image">
                  <img src={activeProject.image} alt="Project Image"/>
                </div>
                <div class="description-text">
                  <p>{activeProject.description} </p>
                  <div class="buttons">
                    <button class="btn">GitHub</button>
                    <button class="btn">Live Demo</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
