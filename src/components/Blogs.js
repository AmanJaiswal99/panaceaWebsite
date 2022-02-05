import React from 'react'
import Blog from './Blog'
import '../css/blogs.css'

function Blogs() {
    return (
        <div className='blog_section'>
            <div className="blog_heading">
                <h1>READ OUR BLOGS</h1>
            </div>
            <div className="blog_subheading">
                <p>Weekly Updates related to Technology</p>
            </div>

            <div className="blog_row">
                <Blog blog_name='New-Age Warfare: The Digital Attack' 
                link='https://panacea.code.blog/2020/09/23/new-age-warfare-the-digital-attack/'/>


                <Blog blog_name='Time Capsule Cryptography: The Dark Archive' 
                link='https://panacea.code.blog/2020/09/16/time-capsule-cryptography-the-dark-archive/'/>
                
                <Blog blog_name='5G: The age of IoT' 
                link='https://panacea.code.blog/2020/09/09/5g-the-age-of-iot/'/>
                
                <Blog blog_name='One Reality to rule them all' 
                link='https://panacea.code.blog/2020/09/03/one-reality-to-rule-them-all/'/>

                
                <Blog blog_name='Intelligent Machinery' 
                link='https://panacea.code.blog/2020/08/18/intelligent-machinery/'/>

                
                <Blog blog_name='Morpheus' 
                link='https://panacea.code.blog/2020/07/01/morpheus/'/>

                
                <Blog blog_name='What is Quantum Computing?' 
                link='https://panacea.code.blog/2020/01/22/quantum-computing/'/>
                
            </div>
        </div>
    )
}

export default Blogs
