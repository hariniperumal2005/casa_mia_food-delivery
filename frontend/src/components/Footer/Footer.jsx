import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>Casa Mia is your ultimate destination for delicious, home-style meals delivered right to your doorstep. Inspired by the warmth of home-cooked food, Casa Mia combines convenience with authentic flavors to satisfy your cravings. Whether you're a busy professional, a student looking for a quick meal, or a family in need of a hassle-free dinner solution, Casa Mia offers a wide range of dishes prepared with love and fresh ingredients.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@Casamia.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Casamia.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
