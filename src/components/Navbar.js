import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom'
import logo from '../images/Panacea.jpeg'

function Navbar() {


    function click(){  // DO NOT TOUCH THIS FUNCTION WITHOUT AMAN
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
       
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
         });
    }
      
    function clicked(){
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        hamburger.classList.toggle("toggle");
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
         });
    }
return (
  
        <div className='navbar'>

        <div className='logo_div'>
            <img className='logo'src={logo} alt='img'/>
        </div>

        <div className="hamburger" onClick={click} >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className="nav-links" onClick={clicked}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact Us</a></li>
        
          <li><Link to='/join'>
          <button className="join-button">Join Us</button>
          </Link></li>
        </ul>
    </div>
     
    )
}

export default Navbar
