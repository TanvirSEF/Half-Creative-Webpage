import React from 'react'
import "./menu.css"
import logo from "../../assets/Logo.svg"
const Menu = () => {
  return (
        <nav>
        <div className="container">
            <div className="main">
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" className='service'>Service</a></li>
                <li><a href="#" className='blog'>Blog</a></li>
                <li><a href="#" className='contact'>Contact</a></li>
            </ul>
            <div className="btn">
            <a href="#">Contact Us</a>
            </div>
            </div>
            </div>
        </nav>
  )
}

export default Menu