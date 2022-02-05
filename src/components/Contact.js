import React from 'react'
import emailjs from 'emailjs-com';
import '../css/contact.css'
import DraftsIcon from '@material-ui/icons/Drafts';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_tmqrxlt', 'template_udlycya', e.target, 'user_z7bHBqXT6AcvVbMVKZScJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (

        <div className="contact">

{/* contact_logo */}
            <div className="contact_logo">
            <DraftsIcon className='drafticon'/>
            </div>

{/* contact form */}
<div className='contact_form'>

<div className="contact_heading">
     <h1>CONTACT US</h1>
</div>

<form className="form"  onSubmit={sendEmail}>


<div className="form-group">
  
  <input  required={true} type="text" name="name"  className="form-control" placeholder='Your Name'/>
</div>
<div className="form-group">
  
  <input required={true}type="email"  className="form-control" name="email" placeholder='Your Email' />
</div>

<div className="form-group">

<input required={true} type='text'  className="form-control" name='subject' placeholder='Subject'/>
</div>

<div className="from-group">
<textarea required={true} id='text' className="form-control" name="message" placeholder='Message...'/>
</div>

<div className="text_center">
<button type="submit" className="btn btn-start-order" value="Send Message" >SEND MESSAGE</button>
</div>

</form>
</div>
        </div>

       
    )
}

export default Contact
