import React from 'react'
import BreadCrum from './BreadCrum'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import Container from '../Components/Container';
import blog1 from '../images/blog1.jpg'

const SingleBlog = () => {
  return (
    <>
    <BreadCrum title='Dynamic Blog Name'/>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-block-card">
              <Link to='/blog' className='d-flex align-items-center gap-30'>
              <FaArrowLeft className='fs-4'/>Go Back  to Blogs</Link>
              <h3 className="title">
                A Beautiful Sunday Morning Renaisssance
              </h3>
              <img
              src={blog1}
              alt='blog'
              className=''
              />
              <p>
              Lorem ipsum dolar sit amet consector adipsting elit.Atque quearst accusums officeLorem ipsum dolar sit amet consector adipsting elit.Atque quearst accusums office
              </p>
            </div>
          </div>
        </div>
    

    </Container>
    </>
  )
}

export default SingleBlog
