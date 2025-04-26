import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import github from 'D:/TECH _PROJECTS/Portfolio-1/src/assets/github-sign.png';
import twitter from 'D:/TECH _PROJECTS/Portfolio-1/src/assets//twitter.png';
import linkedin from 'D:/TECH _PROJECTS/Portfolio-1/src/assets//linkedin.png';
import leetcode from 'D:/TECH _PROJECTS/Portfolio-1/src/assets//leetcode.png';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qj8suhp', 'template_dkdlp6b', e.target, 'V_-C1ke9mn1n4q2GW')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });

    e.target.reset();
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" required />
          
          <label>Email ID</label>
          <input type="email" name="email" required />
          
          <label>Message</label>
          <textarea name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
        <div className="social-media">
          <div className="contact-info">
            <div className="contact-item show">
              <div className="icon"><img src={github} alt="GitHub" /></div>
              <div className="info"><a href="https://github.com/18Sandeep18" target="_blank" rel="noopener noreferrer">GitHub</a></div>
            </div>
            <div className="contact-item show">
              <div className="icon"><img src={twitter} alt="Twitter" /></div>
              <div className="info"><a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a></div>
            </div>
            <div className="contact-item show">
              <div className="icon"><img src={linkedin} alt="LinkedIn" /></div>
              <div className="info"><a href="https://www.linkedin.com/in/sandeeprishi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
            </div>
            <div className="contact-item show">
              <div className="icon"><img src={leetcode} alt="LeetCode" /></div>
              <div className="info"><a href="https://leetcode.com/u/Sandeep-6-0/" target="_blank" rel="noopener noreferrer">LeetCode</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
