import React from 'react'
import '../css/blog.css'

function Blog({blog_name,link}) {
    return (
        <div className='blog'>
            <div className="blog_name">
            <h1>{blog_name}</h1>
            </div>
            <div className="blog_button">
                <a href={link} target='black' className='read'>READ</a>
            </div>
        </div>
    )
}

export default Blog
