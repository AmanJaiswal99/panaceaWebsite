import React from 'react'
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'
import about3 from '../images/about3.jpg'
import about4 from '../images/about4.jpg'
import '../css/about.css'




function About() {
    return (
        <div className='tot'>
            <div className='about'>
                <div className="about_heading">
                
                   <div className="about_img1">
                    <img  className='imgg'src={about1} alt=''/>
                    <img  className='imgg' src={about2} alt=''/>
                   </div>
                   <div className="about_img2">
                   <img  className='img' src={about3} alt=''/>
                   <img  className='img4' src={about4} alt=''/>
                   </div>
                </div>

                <div className="about_text">

                    <div className="who_wrap">
                    <h1 className='who'>Who are we?</h1>
                    </div>
                    
                    <p className="about_subtext">Panacea is the technical club for Computer and Communication branch of Manipal University Jaipur. Our goal is to create a community of bright, intelligent, sharp and shrewd people who are willing to put in the work for a bright future in the tech industry.</p>
                    <p className="about_subtext">This technical club will give you a place to learn and hone your skills through various events, workshops, mentorship and collaborative sessions.
                    </p>
                    <p className="about_subtext"> We keep ourselves updated on most popular and latest technologies in the various fields of Computer Engineering
                    </p>
                </div>
               
            </div>
       
           
        </div>
    )
}

export default About
