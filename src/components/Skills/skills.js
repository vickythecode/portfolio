import React from 'react';
import './skills.css';
import HtmlImg from '../../images/html.png'
import cssImg from '../../images/css.png'
import jsImg from '../../images/js.png'
import reactImg from '../../images/react.png'
import pythonImg from '../../images/python.png'
import bootImg from '../../images/bootstrap.png'
import tailImg from '../../images/tailwind.png'
import javaImg from '../../images/java.png'
import github from '../../images/github.png'
import nextjs from '../../images/nextjs.png'
import node from '../../images/node.png'
import express from '../../images/express.png'


const Skills = () => {
  return (
    <div>
        <section id='skills'>
            <span className="skillTitle">What I Know</span>
            <div className="skillBars">
              <div className="skillBar">
                <img src={HtmlImg} alt="HtmlImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>Html</h2>
                </div>
              </div>
              
              <div className="skillBar">
                <img src={cssImg} alt="CssImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>Css</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={jsImg} alt="JsImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>javascript</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={reactImg} alt="ReactImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>React</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={pythonImg} alt="PythonImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>Python</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={bootImg} alt="BootstrapImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>Bootstrap</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={tailImg} alt="TailwindImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>Tailwind</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={javaImg} alt="JavaImg" className="skillBarImg" />
                <div className="skillBarText">
                  <h2>Java</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={github} alt="gitImg" className="skillBarImg" style={{backgroundColor:"white",borderRadius:"5px"}} />
                <div className="skillBarText">
                  <h2>Github</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={nextjs} alt="nextjsImg" className="skillBarImg" style={{backgroundColor:"white",borderRadius:"5px"}} />
                <div className="skillBarText">
                  <h2>NextJs</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={node} alt="nodeImg" className="skillBarImg" style={{backgroundColor:"white",borderRadius:"5px"}} />
                <div className="skillBarText">
                  <h2>NodeJs</h2>
                </div>
              </div>
              <div className="skillBar">
                <img src={express} alt="expressImg" className="skillBarImg" style={{backgroundColor:"white",borderRadius:"5px"}} />
                <div className="skillBarText">
                  <h2>Express</h2>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Skills
