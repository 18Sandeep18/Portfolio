import React, { useState } from 'react';
import './Experience.css';
import img1 from 'D:/TECH _PROJECTS/Portfolio-1/src/assets/p1.webp';
import img2 from 'D:/TECH _PROJECTS/Portfolio-1/src/assets/Roll.jpg';
import img3 from 'D:/TECH _PROJECTS/Portfolio-1/src/assets/Car.jpg';
import img4 from 'D:/TECH _PROJECTS/Portfolio-1/src/assets/Product.png';
import img5 from 'D:/TECH _PROJECTS/Portfolio-1/src/assets/chatbot.avif';
import img6 from 'D:/TECH _PROJECTS/Portfolio-1/src/assets/Fetus.jpg';

const projects = [
  {
    name: 'Pneuemonia Detection Using CNN',
    title: 'Pneumonia detection using CNN',
    description: 'Pneumonia detection using Convolutional Neural Networks (CNN) involves training a deep learning model to accurately identify pneumonia from chest X-ray images. This project utilizes image preprocessing and data augmentation techniques to enhance the training process.',
    image: img1,
    liveDemo: 'http://livedemo1.com',
    github: 'https://github.com/18Sandeep18/DL-Pneumonia-Detection-using-CNN.git',
  },
  {
    name: 'Fetal Health Detection Using AI',
    title: 'Fetal Health Detection Using AI',
    description: 'Fetal health prediction using machine learning models on CTG dataset. Built a complete frontend website connected to backend ML models for real-time predictions.',
    image: img6,
    liveDemo: 'https://fetal-ai.onrender.com/',
    github: 'https://github.com/18Sandeep18/Fetal-AI.git',
  },
  {
    name: 'Study Partner',
    title: 'Study Partner - MERN App',
    description: 'Task manager app using MERN stack with authentication, authorization, Firebase integration, and Tailwind CSS for responsive design.',
    image: img4,
    liveDemo: 'https://studypartner-sandeep-mern.vercel.app/',
    github: 'https://github.com/18Sandeep18/StudyPartner-MERN01.git',
  },
  {
    name: 'Roll the Dice',
    title: 'Roll the Dice',
    description: 'Fun dice rolling game developed using HTML, CSS, and JavaScript showcasing random dice roll logic with clean UI.',
    image: img2,
    liveDemo: 'https://dice-roll-new.vercel.app/',
    github: 'https://github.com/18Sandeep18/DiceRoll-New.git',
  },
  {
    name: 'Car Price Prediction',
    title: 'Car Price Prediction',
    description: 'Car price prediction web app using machine learning models, trained to predict based on car features like model, year, and mileage.',
    image: img3,
    liveDemo: 'https://car-price-prediction-2-hrm7.onrender.com/',
    github: 'https://github.com/18Sandeep18/car-price-prediction.git',
  },
  {
    name: 'E-commerce Website',
    title: 'E-commerce Website',
    description: 'Full-stack e-commerce app built with the MERN stack, featuring user authentication, product management, and online payments.',
    image: img4,
    liveDemo: 'https://mern-app-2.vercel.app/',
    github: 'https://github.com/18Sandeep18/MERN-APP2.git',
  },
  {
    name: 'ChatBot',
    title: 'ChatBot',
    description: 'Intelligent chatbot web application designed to answer user queries in real-time using natural language processing techniques.',
    image: img5,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  const nextProject = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2>EXPERIENCE</h2>
      </div>
      <div className="experience-carousel">
        <button onClick={prevProject} className="arrow-btn">&#10094;</button>

        <div className="experience-content">
          <h3>{projects[current].title}</h3>
          <img src={projects[current].image} alt={projects[current].name} />
          <p>{projects[current].description}</p>
          <div className="experience-buttons">
            <a href={projects[current].github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={projects[current].liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <button onClick={nextProject} className="arrow-btn">&#10095;</button>
      </div>
    </section>
  );
};

export default Projects;
