import React from 'react'
import { Link } from 'react-router-dom'
import blog3 from '../images/blog3.jpg'

const BlogCard3 = () => {
  return (
    <>
      <div className='blog-card'>
     <div className="card-image">
      <img src={blog3}  width='250px' height='250px'alt='' className='img-fluid'/>
      </div> 
      <div className="blog-content">
        <p className='date'>15 dec 2023</p>
        <h5 className='title'>Urna Pretium Elit Mauris Cursus Curabitu</h5>
        <p className='desc'>You're Only As Good As Your Last Collections,Which is An
         Enormous Pressure. I Think There is Something.. 
        </p>
        <Link to='/blog/:id' className='button'>Read More</Link>
      </div>
    </div>
     
    </>
  )
}

export default BlogCard3
