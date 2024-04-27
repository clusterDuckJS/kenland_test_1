import React from 'react'
import './footer.css'
import { MdOutlineFacebook } from 'react-icons/md'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
      <a href="https://www.facebook.com/" target='_blank'><MdOutlineFacebook /></a>
      <a href="https://www.instagram.com/adarsh.jsx" target='_blank'><BiLogoInstagramAlt /></a>
      <a href="https://twitter.com/?lang=en" target='_blank'><AiFillTwitterCircle /></a>
      </div>
      <small>{year} © Adarsh S. All Rights Reserved.
      </small>
      
      

    </footer>
  )
}

export default Footer