import React from 'react'
import '../css/about.css'
import Member from './Member'
import '../css/members.css'

import akruti from '../panacea team/Akruti Sinha.jpeg'
import twisha from '../panacea team/Twisha.jpg'
import suhast from '../panacea team/Suhast Poonia.jpeg'
import devansh from '../panacea team/Devansh Gulati.jpeg'
import devika from '../panacea team/Devika Sapra.jpeg'
import dhruv from '../panacea team/Dhruv Bharara.jpeg'
import tanay from '../panacea team/Tanay Gandhi.jpeg'
import gaurangi from '../panacea team/Gaurangi Joshi.jpeg'
import divyansh from '../panacea team/Divyansh Garg.jpeg'
import priyanshi from '../panacea team/Priyanshi Dhar.jpeg'
import parv from '../panacea team/Parv Paliwal.jpeg'
import anania from '../panacea team/Ananiya Sardana.jpeg'
import kalpit from '../panacea team/Kalpit Gupta.jpeg'
import aman from '../panacea team/aman.jpeg'



function Members() {
    return (
        <div className='team_section'>
             <div className="team">
            <div className="team_heading">
                <h1>MEET OUR TEAM</h1>
            </div>
            <div className="team_qoute">
                <p>“It takes two flints to make a fire.”</p>
            </div>
 <div className="team_row">

            <Member 
            name='Akruti Sinha'
            image={akruti}
            post='President'
            linkdin='https://www.linkedin.com/in/akruti-sinha-10a990194/'
            />

            <Member 
            name='Twisha Chattopadhyay'
            image={twisha}
            post='Vice President'
            linkdin='https://www.linkedin.com/in/twisha-chattopadhyay-192715173/'
            />

            <Member 
            name='Suhast Poonia'
            image={suhast}
            post='General Secretary'
            linkdin='https://www.linkedin.com/in/suhast-poonia-2324811a9/'
            />

            <Member 
            name='Devansh Gulati'
            image={devansh}
            post='Treasurer'
            linkdin='https://www.linkedin.com/in/devansh-gulati-9946201a0/'
            />

            <Member 
            name='Aman Jaiswal'
            image={aman}
            post='Technical Head'
            linkdin='https://www.linkedin.com/in/aman-jaiswal-685212107/'
            />

            <Member 
            name='Ananiya Sardana'
            image={anania}
            post='Marketing Head'
            linkdin='https://www.linkedin.com/in/ananiya-sardana-394a751a0/'
            />

            <Member 
            name='Tanay Gandhi'
            image={tanay}
            post='Media Head'
            linkdin='https://www.linkedin.com/in/tanay-gandhi-513169173/'
            />

            <Member 
            name='Dhruv Bharara'
            image={dhruv}
            post='Deputy Media Head'
            linkdin='https://www.linkedin.com/in/dhruv-bharara-70b427197/'
            />

            <Member 
            name='Gaurangi Joshi'
            image={gaurangi}
            post='Design Head'
            linkdin='https://www.linkedin.com/in/gaurangi-joshi-1998481b0/'
            />

            <Member 
            name='Parv Paliwal'
            image={parv}
            post='Events Head'
            linkdin='https://www.linkedin.com/in/parv-paliwal-841a4316b/'
            />

            <Member 
            name='Devika Sapra'
            image={devika}
            post='Creative and Content Head'
            linkdin='https://www.linkedin.com/in/devika-sapra-a67224192/'
            />

          

            <Member 
            name='Priyanshi Dhar'
            image={priyanshi}
            post='Promotions Head'
            linkdin='https://www.linkedin.com/in/priyanshi-dhar-b7577b170/'
            />

            <Member 
            name='Divyansh Garg'
            image={divyansh}
            post='Deputy Promotions Head'
            linkdin='https://www.linkedin.com/in/divyansh-garg-1772801a6/'
            />

            
            <Member 
            name='Kalpit Gupta'
            image={kalpit}
            post='Logistics Head'
            linkdin='https://www.linkedin.com/in/kalpit-gupta-582b101b5/'
            />
            </div>
        </div>
        </div>
    )
}

export default Members
