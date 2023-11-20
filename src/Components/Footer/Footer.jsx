import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import icon_1 from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <div className="footer-socials-icons">
          <div className="footer-icons-container">
            <img src={icon_1} alt='' />
          </div>
          <div className="footer-icons-container">
            <img src={pinterest_icon} alt='' />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt='' />
          </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer