import React from 'react'
import './contact.css'
import { MdEmail, MdLocalPhone, MdLocationOn, MdSend } from 'react-icons/md'

function Contact() {
  return (
    <section id='contact'>
      <h1>GET IN <span>TOUCH</span></h1>

      <div className="contact-item-container">
        <div className="contact-item">
          <h3>LET'S TALK!</h3>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <a href="https://maps.app.goo.gl/c3HpTiNQiTUvGTwg8" rel="noreferrer" target="_blank">
            <MdLocationOn />
            <div className='contact-text-wrapper'>
              <span>ADDRESS POINT</span>
              <p>Mangalam Nagar #210, Kollam, Kerala 691015</p>
            </div>
          </a>
          <a  href="mailto:sreeadarsh4@gmail.com " rel="noreferrer" target="_blank">
          <MdEmail />
            <div className='contact-text-wrapper'>
              <span>MAIL ME</span>
              <p>sreeadarsh4@gmail.com</p>
            </div>
          </a>
          <a href='tel:+917907969115' rel="noreferrer" target="_blank">
          <MdLocalPhone />
            <div className='contact-text-wrapper'>
              <span>CALL ME</span>
              <p>+91 7907969115</p>
            </div>
          </a>
        </div>

        <div className="contact-item-input">
          <span>
            <input type="text" placeholder='YOUR NAME' />
            <input type="email" placeholder='YOUR NAME' />
          </span>

          <input type="text" placeholder='YOUR NAME' />
          <textarea placeholder='YOUR NAME' cols="30" rows="10"></textarea>
          <div className='resume-btn-container'>
            <button>
              <span>SEND MESSAGE</span>
              <span className='download-icon-span'>
                <MdSend />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact