import React from 'react'
import '../css/member.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Member({name,post,image,linkdin}) {
    return (
        <div className='member'>

            <img src={image} alt='' className='member_img'/>
            <p className='name'>
                <strong>{name}</strong>
            </p>
            <p className='post'>
                {post}
            </p>
            <div className="social_button">
            <a href={linkdin} target='blank' className='social_link'><LinkedInIcon className='btn'/></a>
            </div>
            
          
        </div>
    )
}

export default Member
