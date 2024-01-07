import React from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../images/blog1.jpg'


const BlogCard = () => {
  return (
    <>   
    <div className='blog-card'>
     <div className="card-image">
      <img src={blog1}   alt='' className='img-fluid'/>
      </div> 
      <div className="blog-content">
        <p className='date'>15 dec 2023</p>
        <h5 className='title'>A Beautiful sunday morning renaissance</h5>
        <p className='desc'>Lorem ipsum dolar sit amet consector adipsting elit.Atque quearst accusums office 
          telescopic display sec the real world of the telescopic vision for..
          </p>
        <Link to='/blog/:id' className='button'>Read More</Link>
      </div>
    </div>
    <br/>
   
    </>
 
  )
}

export default BlogCard
