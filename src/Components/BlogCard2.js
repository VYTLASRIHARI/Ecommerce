import React from 'react'
import { Link } from 'react-router-dom'
import blog4 from '../images/blog4.jpg'

const BlogCard2 = () => {
  return (
    <>
      <div className='blog-card'>
     <div className="card-image">
      <img src={blog4}  width='250px' height='250px'alt='' className='img-fluid'/>
      </div> 
      <div className="blog-content">
        <p className='date'>22 dec 2023</p>
        <h5 className='title'>Vitae Magnis Fusce Laoreet Porttitor..</h5>
        <p className='desc'>You're Only As Good As Your Last Collection. Which is an
          Encrmous Pressure. I Think There is Something ..
        </p>
        <Link to='/blog/:id' className='button'>Read More</Link>
      </div>
    </div>
     
    </>
  )
}

export default BlogCard2
