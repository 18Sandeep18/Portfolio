import React, { useEffect, useState } from 'react';
import './Experience.css';
import im from '../../assets/Product.png';
import img1 from '../../assets/p1.webp';
import img2 from '../../assets/Roll.jpg';
import img3 from '../../assets/Car.jpg';
import img4 from '../../assets/Product.png';
import img5 from '../../assets/chatbot.avif';

const projects = [
  {
    name: 'Pneuemonia Detection Using CNN',
    title: 'Pneuemonia Detection Using CNN',
    description: 'Pneumonia detection using Convolutional Neural Networks (CNN) involves training a deep learning model to accurately identify pneumonia from chest X-ray images. This project utilizes image preprocessing and data augmentation techniques to enhance the training process.',
    image: img1,
    liveDemo: 'http://livedemo1.com',
    github: 'http://github1.com',
  },
  {
    name: 'Roll the dice',
    title: 'Roll the dice',
    description: 'Roll the Dice project, is an interactive web game created using HTML, CSS, and JavaScript, allowing users to roll virtual dice and play according to my rules displayed dynamically. This fun and engaging project showcases the use of basic web development skills to create a simple yet enjoyable user experience.',
    image: img2,
    liveDemo: 'http://livedemo2.com',
    github: 'http://github2.com',
  },
  {
    name: 'Car Price Prediction',
    title: 'Car Price Prediction',
    description: 'The Car Price Prediction project utilizes machine learning algorithms to analyze and predict the prices of cars based on various features such as make, model, year, and mileage. This project demonstrates the application of data science techniques to provide valuable insights and accurate pricing estimates in the automotive industry.',
    image: img3,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'E-commerce Website',
    title: 'E-commerce Website',
    description: 'Developed a full-featured e-commerce website using the MERN stack,  Consists of Mongo DB, Express JS, React JS, Node JS encompassing product listings, user authentication, and secure payment integration. Implemented a responsive design for seamless user experience across devices. Demonstrated expertise in end-to-end application development and deployment',
    image: img4,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
  {
    name: 'ChatBot',
    title: 'ChatBot',
    description: 'The Car Price Prediction project utilizes machine learning algorithms to analyze and predict the prices of cars based on various features such as make, model, year, and mileage. This project demonstrates the application of data science techniques to provide valuable insights and accurate pricing estimates in the automotive industry.',
    image: img5,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {

    const buttons = document.querySelectorAll('.sidebar button');
    const mobile = window.minWidth <= 700
    buttons.forEach((button, index) => {
      if (mobile && index != 0 && index != buttons.length - 1) {
        button.addEventListener('click', function() {
          this.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          });
        });
      }
    });

    return () => {
      buttons.forEach((button, index) => {
        if (index !== 0 && index !== buttons.length - 1) {
          button.removeEventListener('click', function() {
            this.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center'
            });
          });
        }
      });
    };
  }, [activeProject]);

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
            <div className="project-description">
              <div className="description-title">{activeProject.title}</div>
              <div className="sub-pro">
                <div className="description-image">
                  <img src={activeProject.image} alt="Project Image"/>
                </div>
                <div className="description-text">
                  <p>{activeProject.description} </p>
                  <div className="buttons">
                    <button className="btn">GitHub</button>
                    <button className="btn">Live Demo</button>
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
