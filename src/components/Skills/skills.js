import React from 'react';
import './skills.css';
import HtmlImg from '../../images/html.png';
import cssImg from '../../images/css.png';
import jsImg from '../../images/js.png';
import reactImg from '../../images/react.png';
import pythonImg from '../../images/python.png';
import bootImg from '../../images/bootstrap.png';
import tailImg from '../../images/tailwind.png';
import javaImg from '../../images/java.png';
import github from '../../images/github.png';
import nextjs from '../../images/nextjs.png';
import node from '../../images/node.png';
import express from '../../images/express.png';
import mongo from '../../images/mongo.png';

const skillData = [
  { img: HtmlImg, alt: 'HtmlImg', name: 'Html' },
  { img: cssImg, alt: 'CssImg', name: 'Css' },
  { img: jsImg, alt: 'JsImg', name: 'javascript' },
  { img: reactImg, alt: 'ReactImg', name: 'React' },
  { img: bootImg, alt: 'BootstrapImg', name: 'Bootstrap' },
  { img: tailImg, alt: 'TailwindImg', name: 'Tailwind' },
  { img: github, alt: 'gitImg', name: 'Github', style: { backgroundColor: 'white', borderRadius: '5px' } },
  { img: nextjs, alt: 'nextjsImg', name: 'NextJs', style: { backgroundColor: 'white', borderRadius: '5px' } },
  { img: node, alt: 'nodeImg', name: 'NodeJs', style: { backgroundColor: 'white', borderRadius: '5px' } },
  { img: express, alt: 'expressImg', name: 'Express', style: { backgroundColor: 'white', borderRadius: '5px' } },
  { img: mongo, alt: 'mongoImg', name: 'MongoDb', style: { backgroundColor: 'white', borderRadius: '5px' } },
  { img: pythonImg, alt: 'PythonImg', name: 'Python' },
  { img: javaImg, alt: 'JavaImg', name: 'Java' },
];

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I Know</span>
        <div className="skillBars">
          {skillData.map((skill, index) => (
            <div className="skillBar" key={index}>
              <img src={skill.img} alt={skill.alt} className="skillBarImg" style={skill.style || {}} />
              <div className="skillBarText">
                <h2>{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
