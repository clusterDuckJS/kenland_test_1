import React from 'react'
import './experience.css'
import { MdWork } from "react-icons/md";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiCsswizardry, SiHtml5, SiJavascript, SiReact } from "react-icons/si";
import { BiLogoFigma } from 'react-icons/bi';

function Experience() {
  return (
    <section id='experience'>
      <h1>MY <span>EXPERIENCE</span></h1>
      <div className="exp-item-container">
        <div className="exp-item">
          <div className="exp-icon"><MdWork/></div>
          <div className="exp-text-div">
            <small>2023 - PRESENT</small>
            <h3>UI DEVELPER - RSGP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit</p>
          </div>          
        </div>
        <div className="exp-item">
          <div className="exp-icon"><MdWork/></div>
          <div className="exp-text-div">
            <small>2022 - 2023</small>
            <h3>FREELANCER</h3>
            <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit</p>
          </div>          
        </div>
      </div>

      <div className="skill-container">
        <h3>MY SKILLS</h3>
        <ul>
          <li>
          <SiHtml5 />
            <p>HTML</p>
          </li>
          <li>
            <SiCsswizardry />
            <p>CSS3</p>
          </li>
          <li>
            <SiReact />
            <p>REACT JS</p>
          </li>
          <li>
            <SiJavascript />
            <p>JAVASCRIPT</p>
          </li>
          <li>
            <BiLogoFigma />
            <p>FIGMA</p>
          </li>
          <li>
            <SiAdobephotoshop />
            <p>PHOTOSHOP</p>
          </li>
          <li>
            <SiAdobeillustrator />
            <p>ILLUSTRATOR</p>
          </li>
          <li>
            <SiAdobexd />
            <p>ADOBE XD</p>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Experience