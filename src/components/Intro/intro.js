import React from 'react'
import "./intro.css"
import {Link} from 'react-scroll'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Typewriter from './Typewriter';
import BgImg from '../../images/bg-forPort2.png'


function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introText">I'm <span className="introName">Vignesh Raman</span><br /><Typewriter/></span>
            <p className="introPara">Iam a Skilled Developer with experience <br />in creating apps and websites</p>
            <div className="btnContainer">
            <Link to='contact'><button className="btn1">Hire Me <FontAwesomeIcon icon={faBriefcase} /></button></Link>
            <Link to='projects'><button className="btn2">Projects <FontAwesomeIcon icon={faCode} /> </button></Link>
            </div>
            <div className="imgContainer">
              <img src={BgImg} alt="img-forPort" className="bgImg" />
            </div>
        </div>
    </section>

  
  )
}

export default Intro
