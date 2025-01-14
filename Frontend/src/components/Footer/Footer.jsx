import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis maiores voluptas officia vitae magni tempore labore non? Dolores neque vitae saepe earum officiis voluptas ad voluptatum, nisi molestias esse.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivey</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <li>98008474848</li>
          <li>Contact@gmail.com</li>
        </div>
      </div>
      <hr />
      <p className='footer-cpyright'>Copyright 2024 Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
