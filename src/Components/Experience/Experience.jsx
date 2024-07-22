import React, { useState } from 'react';
import './Experience.css';
import im from '../../assets/Product.png'
const projects = [
  {
    name: 'Project 1',
    description: 'Description of Project 1',
    image: 'path/to/image1.png',
    liveDemo: 'http://livedemo1.com',
    github: 'http://github1.com',
  },
  {
    name: 'Pneuemonia Detection USing CNN',
    description: 'Description of Project 2',
    image: 'path/to/image2.png',
    liveDemo: 'http://livedemo2.com',
    github: 'http://github2.com',
  },
  {
    name: 'ROll the dice using HTML<CSS<JAVASCRIPT',
    description: 'Description of Project 3',
    image: 'path/to/image3.png',
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'Project 4',
    description: 'Description of Project 3',
    image: 'path/to/image3.png',
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'Project 5',
    description: 'Description of Project 3',
    image: 'path/to/image3.png',
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'Project 6',
    description: 'Description of Project 3',
    image: 'path/to/image3.png',
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'Project 7',
    description: 'Description of Project 3',
    image: 'path/to/image3.png',
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'Project 8',
    description: 'Description of Project 3',
    image: 'path/to/image3.png',
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
              <div class="description-title">Project Title</div>
              <div className="sub-pro">

                <div class="description-image">
                  <img src={im} alt="Project Image"/>
                </div>
                <div class="description-text">
                  <p>Your project description content goes here...hgdhjlfafjahdkgsdbgfisrtf bzs,dfdbzfkuhdgfzndfg, zdjghlhdfug adh flgsdf,gmdfglskjfdghajdhfpi serhg9ehgkejrle gadfkghierhasdnfkjerhgiuerhger gbadmfnskankfjnerfuiewreprtio erjfhrueht aklfafhaefanf iryt vduy dkfjn hbhbe rwheiurheiuhh </p>
                  <div class="buttons">
                    <button class="btn">Button 1</button>
                    <button class="btn">Button 2</button>
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
