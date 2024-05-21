import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-scroll'; 
import logoVImg from '../../images/logoV.png'
import menu from '../../images/menu.png'

const Navbar = () => {
  const contactScroll=()=>{
    document.querySelector(".contact").scrollIntoView({behavior:"smooth"})
  }

  const [showMenu,setShowMenu]=useState(false)
  const ShowMenuToggle=()=>{
    setShowMenu(!showMenu)
  }
    return (
    <nav className='navbar'>
        <img className='logo' src={logoVImg} alt="reload" />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        </div>
        <button className="desktopMenuBtn" onClick={contactScroll}>Contact Me</button>

        <img className='mobMenu' src={menu} alt="menu" onClick={ShowMenuToggle} />
        <div className="navMenu" style={{display:showMenu?"flex":"none"}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>{setShowMenu(false)}}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>{setShowMenu(false)}}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className='ListItem' onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>{setShowMenu(false)}}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>{setShowMenu(false)}}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
