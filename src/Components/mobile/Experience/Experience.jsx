import React, { useState } from 'react';
import './Experience.css';
import img1 from '../../../assets/p1.webp';
import img2 from '../../../assets/Roll.jpg';
import img3 from '../../../assets/Car.jpg';
import img4 from '../../../assets/Product.png';
import img5 from '../../../assets/chatbot.avif';
import img6 from '../../../assets/Fetus.jpg';
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
    description: 'Fetal health detection project using machine learning models trained on cardiotocography (CTG) data. It features a real-time web interface integrated with backend ML models for accurate health predictions.',
    image: img6,
    liveDemo: 'https://fetal-ai.onrender.com/',
    github: 'https://github.com/18Sandeep18/Fetal-AI.git',
  },
  {
    name: 'Study Partner',
    title: 'Study Partner - MERN App',
    description: 'Task management web application built with the MERN stack, offering user authentication, Firebase integration for real-time updates, and a responsive design using Tailwind CSS.',
    image: img4,
    liveDemo: 'https://studypartner-sandeep-mern.vercel.app/',
    github: 'https://github.com/18Sandeep18/StudyPartner-MERN01.git',
  },
  {
    name: 'Roll the Dice',
    title: 'Roll the Dice',
    description: 'A simple and interactive dice rolling game created with HTML, CSS, and JavaScript, implementing random dice logic and clean visual transitions for a fun user experience.',
    image: img2,
    liveDemo: 'https://dice-roll-new.vercel.app/',
    github: 'https://github.com/18Sandeep18/DiceRoll-New.git',
  },
  {
    name: 'Car Price Prediction',
    title: 'Car Price Prediction',
    description: 'Car price prediction platform leveraging machine learning regression models to estimate vehicle prices based on features like brand, year, mileage, and model type.',
    image: img3,
    liveDemo: 'https://car-price-prediction-2-hrm7.onrender.com/',
    github: 'https://github.com/18Sandeep18/car-price-prediction.git',
  },
  {
    name: 'E-commerce Website',
    title: 'E-commerce Website',
    description: 'Full-stack e-commerce platform developed using the MERN stack with secure user authentication, dynamic product listings, cart management, and integrated online payment gateway.',
    image: img4,
    liveDemo: 'https://mern-app-2.vercel.app/',
    github: 'https://github.com/18Sandeep18/MERN-APP2.git',
  },
  {
    name: 'ChatBot',
    title: 'ChatBot',
    description: 'AI-powered chatbot web application using natural language processing (NLP) techniques, capable of understanding user queries and providing intelligent, context-aware responses.',
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
