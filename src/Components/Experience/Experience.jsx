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
    github: 'https://github.com/18Sandeep18/DL-Pneumonia-Detection-using-CNN.git',
  },
  {
    name: 'Fetal Health Detection Using AI',
    title: 'Fetal Health Detection Using AI',
    description: 'Pneumonia detection using Convolutional Neural Networks (CNN) involves training a deep learning model to accurately identify pneumonia from chest X-ray images. This project utilizes image preprocessing and data augmentation techniques to enhance the training process.',
    image: img1,
    liveDemo: 'https://fetal-ai.onrender.com/',
    github: 'https://github.com/18Sandeep18/Fetal-AI.git',
  },
  {
    name: 'Study Partner',
    title: 'Task Manager using MERN stack',
    description: 'Implemented Complete CRUD operations with highly secure authentication using JWT, and incorporated many tools such as tailwind css, firebase',
    image: img4,
    liveDemo: 'https://studypartner-sandeep-mern.vercel.app/',
    github: 'https://github.com/18Sandeep18/StudyPartner-MERN01.git',
  },
  {
    name: 'Roll the dice',
    title: 'Roll the dice',
    description: 'Roll the Dice project, is an interactive web game created using HTML, CSS, and JavaScript, allowing users to roll virtual dice and play according to my rules displayed dynamically. This fun and engaging project showcases the use of basic web development skills to create a simple yet enjoyable user experience.',
    image: img2,
    liveDemo: 'https://dice-roll-new.vercel.app/',
    github: 'https://github.com/18Sandeep18/DiceRoll-New.git',
  },
  {
    name: 'Car Price Prediction',
    title: 'Car Price Prediction',
    description: 'The Car Price Prediction project utilizes machine learning algorithms to analyze and predict the prices of cars based on various features such as make, model, year, and mileage. This project demonstrates the application of data science techniques to provide valuable insights and accurate pricing estimates in the automotive industry.',
    image: img3,
    liveDemo: 'https://car-price-prediction-2-hrm7.onrender.com/',
    github: 'https://github.com/18Sandeep18/car-price-prediction.git',
  },
  {
    name: 'E-commerce Website',
    title: 'E-commerce Website',
    description: 'Developing a full-featured e-commerce website using the MERN stack,  Consists of Mongo DB, Express JS, React JS, Node JS encompassing product listings, user authentication, and secure payment integration. Implementing a responsive design for seamless user experience across devices. Demonstrated expertise in end-to-end application development and deployment',
    image: img4,
    liveDemo: 'https://mern-app-2.vercel.app/',
    github: 'https://github.com/18Sandeep18/MERN-APP2.git',
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
      if (mobile && index !== 0 && index !== buttons.length - 1) {
        button.addEventListener('click', function () {
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
          button.removeEventListener('click', function () {
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
    <div id="experience" className="ex-projects">
      <div className="container">
        <div className="exsidebar">
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
                <img src={activeProject.image} alt="Project Image" />
              </div>
              <div className="description-text">
                <p>{activeProject.description}</p>
                <div className="buttons">
                  <a
                    href={activeProject.github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={activeProject.liveDemo}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
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
