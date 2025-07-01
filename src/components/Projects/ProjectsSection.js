import React from 'react';
import './projects.css';
import pImg1 from '../../images/pImg1.png';
import pImg2 from '../../images/pImg2.png';
import pImg4 from '../../images/pImg4.jpg';

const Projects = () => {
  const projectData = [
    {
      name: 'Pro-Ject',
      imageUrl: pImg1,
      githubLink: 'https://pro-ject-1.onrender.com/',
      techStack: [
        "Pro-Ject is the project management tool where we can assign tasks to our team members and can track the progresses"
      ],
    },
    {
      name: 'Bloggy',
      imageUrl: pImg2,
      githubLink: 'https://github.com/vickythecode/Bloggy',
      techStack: [
        "Developed a responsive blog platform",
        "Built with MERN stack and modern UI/UX practices"
      ],
    },
    {
      name: 'X Clone',
      imageUrl: pImg4,
      githubLink: 'https://vickythecode.github.io/X-clone/',
      techStack: [
        "UI clone of X using HTML and Tailwind CSS",
        "Enhanced web development and design skills"
      ],
    },
  ];

  return (
    <section id='projects'>
      <h2 className='projectsTitle'>My Projects</h2>
      <div className='projectsImgs'>
        {projectData.map((project, index) => (
          <a
            href={project.githubLink}
            target='_blank'
            rel="noopener noreferrer"
            className='imgFirst'
            key={index}
          >
            <div className='imgContainer2'>
              <img src={project.imageUrl} alt={project.name} className='projectImg' />
              <div className='overlay'>
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='contentHead'>{project.name}</div>
          </a>
        ))}
      </div>
      <a href="https://github.com/vickythecode" target='_blank' rel="noopener noreferrer">
        <button className='projectBtn'>See More</button>
      </a>
    </section>
  );
};

export default Projects;
