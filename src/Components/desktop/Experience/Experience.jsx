import React, { useEffect, useState } from 'react';
import './Experience.css';
import img1 from '../../../assets/p1.webp';
import img2 from '../../../assets/Roll.jpg';
import img3 from '../../../assets/Car.jpg';
import img4 from '../../../assets/Product.png';
import img5 from '../../../assets/chatbot.avif';
import img6 from '../../../assets/Fetus.jpg';

const projects = [
  {
    name: 'Pneumonia Detection Using CNN',
    title: 'Pneumonia Detection Using CNN',
    description: 'Built a deep learning model using CNN to detect pneumonia from chest X-ray images with high accuracy. Implemented preprocessing, data augmentation, and Grad-CAM for model interpretability. Deployed a web app for real-time X-ray image predictions.',
    image: img1,
    liveDemo: 'http://livedemo1.com',
    github: 'https://github.com/18Sandeep18/DL-Pneumonia-Detection-using-CNN.git',
    techStack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Deep Learning'],
  },
  {
    name: 'Fetal Health Detection Using AI',
    title: 'Fetal Health Detection Using AI',
    description: 'Developed a machine learning model to predict fetal health conditions from CTG data. Achieved high accuracy using Random Forest, Decision Tree, and KNN classifiers. Created a web interface for easy predictions and data visualization.',
    image: img6,
    liveDemo: 'https://fetal-ai.onrender.com/',
    github: 'https://github.com/18Sandeep18/Fetal-AI.git',
    techStack: ['Python', 'Random Forest', 'Flask', 'Render'],
  },
  {
    name: 'Study Partner',
    title: 'Task Manager using MERN stack',
    description: 'Designed a full-stack MERN application to manage academic tasks with authentication and CRUD operations. Integrated secure JWT-based login, TailwindCSS UI, and Firebase notifications. Users can track, update, and prioritize their learning goals.',
    image: img4,
    liveDemo: 'https://studypartner-sandeep-mern.vercel.app/',
    github: 'https://github.com/18Sandeep18/StudyPartner-MERN01.git',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JWT', 'Firebase'],
  },
  {
    name: 'Roll the dice',
    title: 'Roll the dice',
    description: 'Built an interactive dice-rolling web game using vanilla HTML, CSS, and JavaScript.Users can roll dice dynamically and enjoy a rule-based mini-game experience.Focused on simple animations and clean UI/UX for fun engagement.',
    image: img2,
    liveDemo: 'https://dice-roll-new.vercel.app/',
    github: 'https://github.com/18Sandeep18/DiceRoll-New.git',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Car Price Prediction',
    title: 'Car Price Prediction',
    description: 'Created a machine learning model to predict car prices based on features like brand, year, and mileage.Performed feature engineering, model training, and hyperparameter tuning.Deployed an easy-to-use web app for quick price estimation.',
    image: img3,
    liveDemo: 'https://car-price-prediction-2-hrm7.onrender.com/',
    github: 'https://github.com/18Sandeep18/car-price-prediction.git',
    techStack: ['Python', 'Machine Learning', 'Scikit-Learn', 'Flask'],
  },
  {
    name: 'E-commerce Website',
    title: 'E-commerce Website',
    description: 'Developed a responsive, full-fledged e-commerce platform using the MERN stack.Included user authentication, product management, and Stripe payment integration.Focused on seamless user experience and secure transactions.',
    image: img4,
    liveDemo: 'https://mern-app-2.vercel.app/',
    github: 'https://github.com/18Sandeep18/MERN-APP2.git',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe'],
  },
  {
    name: 'ChatBot',
    title: 'ChatBot',
    description: 'Built an AI-powered chatbot capable of responding to user queries in real-time.Trained on diverse datasets to understand and reply in conversational language.Deployed a lightweight web application for interactive chat.',
    image: img5,
    liveDemo: 'http://livedemo3.com',
    github: 'http://github3.com',
    techStack: ['Python', 'NLP', 'Machine Learning', 'Flask'],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    const buttons = document.querySelectorAll('.exsidebar button');
    const mobile = window.innerWidth <= 700;
    
    if (mobile) {
      buttons.forEach((button) => {
        button.addEventListener('click', function () {
          this.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        });
      });
    }

    return () => {
      if (mobile) {
        buttons.forEach((button) => {
          button.removeEventListener('click', function () {
            this.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
          });
        });
      }
    };
  }, []);

  return (
    <section id="experience" className="ex-projects">
      <div className="container">
        <aside className="exsidebar">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(project)}
              className={activeProject.name === project.name ? 'active' : ''}
            >
              {project.name}
            </button>
          ))}
        </aside>

        <main className="main-content">
          <h2 className="description-title">{activeProject.title}</h2>
          <div className="sub-pro">
            <img src={activeProject.image} alt={activeProject.title} className="description-image" />
            <div className="description-text">
              <p>{activeProject.description}</p>

              {/* Tech Stack Badges */}
              <div className="tech-stack">
                {activeProject.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="buttons">
                <a href={activeProject.github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={activeProject.liveDemo} className="btn" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      <p className="page-intro">
        Here’s a collection of projects I've built across AI/ML, full-stack development, and creative web apps. Each one helped me dive deeper into coding, problem-solving, and real-world application building. Feel free to explore!
      </p>
    </section>
  );
};

export default Projects;
