import React from 'react'
import './about.css'


function About() {
  const items = [
    {question: "First Name:", answer : "Adarsh"},
    {question: "Last Name:", answer : "Sreekumar"},
    {question: "Age:", answer : "27 Years"},
    {question: "Freelance:", answer : "Available"},
    {question: "Phone:", answer : "+91 7907969115"},
    {question: "Nationality:", answer : "Indian"},
    {question: "State:", answer : "Kerala"},
    {question: "Email:", answer : "sreeadarsh4@gmail.com"},
    {question: "Languages:", answer : "English, Malayalam"},

  ]
  return (
    <section id='about'>
      <h1>ABOUT <span>ME</span></h1>
      <div className='about-data-container'>
        <div className='about-data-left'>
          <h3>PERSONAL INFOS</h3>
          <ul>
            {items.map((item, id) => (
              <li key={id}>{item.question}<span> {item.answer}</span></li>
            ))}
          </ul>
        </div>
        <div className='about-data-right'>
          <div className='about-data-right-item'>
            <h3>10</h3>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className='about-data-right-item'>
            <h3>80</h3>
            <p>COMPLETED PROJECTS</p>
          </div>
          <div className='about-data-right-item'>
            <h3>90</h3>
            <p>HAPPY CUSTOMERS</p>
          </div>
          <div className='about-data-right-item'>
            <h3>23</h3>
            <p>AWARDS WON</p>
          </div>
        </div>
      </div>

      {/* <div className="skill-container">
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
      </div> */}

    </section>
  )
}

export default About