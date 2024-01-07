import React from 'react'
import { Link } from 'react-router-dom'
import blog2 from '../images/blog2.jpg'
const BlogCard1 = () => {
  return (
    <>
      <div className='blog-card'>
     <div className="card-image">
      <img src={blog2}  alt='' className='img-fluid'/>
      </div> 
      <div className="blog-content">
        <p className='date'>1 dec 2024</p>
        <h5 className='title'>Sed Ut Persplcltals Unde Omnis</h5>
        <p className='desc'>To Enjoy Alternately The Sight of Their Outness. He  Really
             Shouted with Pleasure And Shaking Monisure Du .</p>
        <Link to='/blog/:id' className='button'>Read More</Link>
      </div>
    </div>
    
    </>
  )
}

export default BlogCard1
