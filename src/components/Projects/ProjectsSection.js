import React from 'react';
import './projects.css';
import pImg2 from '../../images/pImg2.jpg';
import pImg3 from '../../images/pImg3.jpg';
import pImg4 from '../../images/pImg4.jpg';


const Projects = () => {
  const projectData = [
    {
      name: 'NewsGarage',
      imageUrl: pImg2,
      githubLink: 'https://github.com/vickythecode/newsGarageApp',
      techStack: ["Developed a news application using React, Bootstrap, and API integration to deliver up-to-date information and a seamlessuser experience"],
    },
    {
      name: 'Croxs',
      imageUrl: pImg3,
      githubLink: 'https://github.com/vickythecode/CROXS',
      techStack: ['Developed a responsive UI e-commerce website',"using HTML, CSS, and JavaScript,","showcasing proficiency in front-end technologies"],
    },
    {
      name: 'X clone',
      imageUrl: pImg4,
      githubLink: 'https://github.com/vickythecode/X-clone',
      techStack: ['I built a UI clone of X using HTML and Tailwind CSS ','to enhance and demonstrate my web development skills.'],
    },
  ];
  console.log(projectData.length);
  const toggleProj=()=>{
    
  }

  return (
    <section id='projects'>
      <h2 className='projectsTitle'>My Projects</h2>
      <div className='projectsImgs'>
        {projectData.map((project, index) => (
          <a href={project.githubLink} target='_blank' className='imgFirst' key={index}>
            <div className='contentHead'>{project.name}</div>
            <div className='imgContainer2'>
              <img src={project.imageUrl} alt={project.name} className='projectImg' />
              <div className='textOverlay'>
                
                <ul>
                  {project.techStack.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a href="https://github.com/vickythecode"target='_blank'><button className='projectBtn' onClick={toggleProj}>See More</button></a>
    </section>
  );
};

export default Projects;
