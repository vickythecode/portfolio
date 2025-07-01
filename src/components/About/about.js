import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-card">
          <h1 className="about-title">Hi, I'm <span className="highlight">Vignesh Raman</span></h1>
          <p className="about-description">
            I'm a recent <strong>BSc Computer Science graduate</strong> with a passion for creating beautiful, functional, and responsive web applications. I'm currently looking for opportunities to express my skills and grow in the field of web development.
            <br /><br />
            I have experience working with various modern tech stacks including <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, and more.
            <br /><br />
            I'm always excited to learn new technologies, build innovative projects, and collaborate with other passionate developers.
          </p>
          <a href="#projects"><button className="about-button">See My Work</button></a>
        </div>
      </div>
    </section>
  );
};

export default About;
