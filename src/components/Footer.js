import React from 'react'
import '../css/footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom'
import logo from '../images/Panacea.jpeg'

function Footer() {
    return (
        <footer className="footer">

        <div className="footer_body">
            <div className="footer_item">
                    <h1 className='heading_text'>PANACEA</h1>
            </div>
            <div className="footer_item">
                    <h1 className='heading_text'>Reach Us</h1>
                   <p className='para'><a className="link" href="mailto:panacea@muj.manipal.edu">pancea@muj.manipal.edu</a></p> 
                    <p className='para'>Manipal University Jaipur, Dehmi Kalan, Jaipur, 303007</p>
            </div>
            <div className="footer_item">
                
                <h1 className='heading_text'>Links</h1>
                <div className="links">
                <a className='link' href='#faq'>FAQs</a>
                <a className='link' href='#team'>Team</a>
                <Link className='link' to='/join'>Join Us</Link>
                </div>
                
            </div>
            <div className="footer_item">
                <h1 className='heading_text'>Follow Us</h1>
                <div className="socials">

                <a href='https://www.instagram.com/panacea.muj/' className='social' target='blank'>
                     <InstagramIcon/>
                     <p className='site_name'>Instagram</p>
                </a>

                <a href='https://www.facebook.com/Panacea-MUJ-104470847698771' className='social' target='blank'>
                     <FacebookIcon/>
                     <p className='site_name'>Facebook</p>
                </a>

                <a href='https://www.linkedin.com/company/panacea-club/' className='social' target='blank'>
                     <LinkedInIcon/>
                     <p className='site_name'>LinkedIn</p>
                </a>
                
                </div>
               
            </div>
        </div>



   
        <div className="developer">
            <a target='blank' href='https://findaman.ml/' className='dev'><small>Have a message for the Developer? Find me</small></a>
            
        </div>
        
    
         </footer>
    )
}

export default Footer
