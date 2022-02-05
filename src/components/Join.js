import React from 'react'

import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com';

import '../css/join.css'

function Join() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_odzdj9e', 'template_apq3sfh', e.target, 'user_z7bHBqXT6AcvVbMVKZScJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }


    return (
        <div className='join'>
            
           <div className="join_nav">
           <Link to='/' className='back_button'>
                
                <h2>BACK</h2>
            </Link>
           </div>

<div className="details">
<form  className="formm" onSubmit={sendEmail}>
<h1 className='form_headingg'>Enter Your Details</h1>

<div className="form-groupp">
  
  <input required={true} type="text" name="name"  className="form-control2" placeholder='Your Name'/>
  <input required={true} type="email"  className="form-control2" name="email" placeholder='Your Email' />
</div>

<div className="form-groupp">

<select  id="cars" name="year" className='form-control2'>
    <option value="Fresher">Fresher</option>
    <option value="Sophmore">Sophmore</option>
    <option value="Junior">Junior</option>
    <option value="Senior">Senior</option>
  </select>

<input required={true} type="text" name="section"  className="form-control2" placeholder='Section'/>
</div>



<div className="form-groupp">

<input required={true} type="text" name="reg"  className="form-control2" placeholder='Reg. Number'/>

<input required={true} type='text'  className="form-control2" name='contact' placeholder='Contact'/>

</div>

<div className="form-groupp">
<textarea  id='text' className="form-control1" name="message" placeholder='Your expectations...'/>
</div>

<div className="text_center">
<button type="submit" className="btn btn-start-order" value="Send Message" >SEND MESSAGE</button>
</div>

</form>
</div>

</div>
    )
}

export default Join
