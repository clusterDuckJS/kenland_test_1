import React, { useState } from 'react'
import './navbar.css'
import { MdHome } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { GiFiles } from "react-icons/gi";
import { MdChat } from "react-icons/md";


function Navbar() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><BiSolidUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><GiFiles /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><MdChat /></a>
    </nav>
  )
}

export default Navbar