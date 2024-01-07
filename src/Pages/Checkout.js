import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import tab  from '../images/tab.jpg'
import headphones from'../images/headphone.jpg'
import Container from '../Components/Container';
const Checkout = () => {
  return (
    <Container class1='checkout-wrapper py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-7">
          <h3 className='website-name'>Dev Corner</h3>
          <nav
           style={{"--bs-breadcrumb-divider":">"}}
           aria-label='breadcrumb'
          >
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
             <Link className='text-dark total-price' to='/cart'>
              Cart
             </Link>
            </li>
            &nbsp; /
            <li className='breadcrumb-item total-price active' aria-current='page'>
              Information
            </li>
            &nbsp; /
            <li className='breadcrumb-item total-price active'>
              Shipping
            </li>
            &nbsp; /
            <li className='breadcrumb-item total-price active' aria-current='page'>
              Payment
            </li>
         
          </ol>
        </nav>
        <h4 className="title total">Contact Information</h4>
        <p className='user-details total'>
          Navdeep Dahiya (example1231@gmail.com)
        </p>
        <form action='' 
         className='d-flex gap-20 flex-wrap justify-content-between'>
        <div className='w-100'>
        <select name=''
         className='form-control form-select' 
         id=''>
         <option value='' >
          Select Country
         </option>
        </select>
        </div>
        <div className='flex-grow-1'>
          <input type='text'
           placeholder='First Name' 
           className='form-control'/>
        </div>
        <div className='flex-grow-1'>
           <input type='text' 
           placeholder='Last Name'
           className='form-control'/>
        </div> 
        <div className='w-100'>
           <input type='text'
           placeholder='Address' 
           className='form-control'/>
        </div>
        <div className='w-100'>
           <input type='text' 
           placeholder='Apartment,Suite,etc'
           className='form-control'/>
        </div>
        <div className='flex-grow-1'>
           <input type='text' 
           placeholder='City'
           className='form-control'/>
        </div>
       
        <div className='flex-grow-1'>
        <select name=''
         className='form-control form-select' 
         id=''>
         <option value='' selected disabled>Select State</option>
        </select>
        
        </div>
         <div>
           <input type='text' 
           placeholder='Zip code'
           className='form-control'/>
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center">
            <Link to='/cart' className='text-dark'>{<IoMdArrowRoundBack className='me-2'/>}Return to Cart</Link>
            <Link to='/cart' className='button'>Continue to Shipping</Link>
          </div>
        </div>
        </form>
        </div>
        <div className="col-5">
         <div className="border-bottom py-4">
          <div className='d-flex gap-10  mb-2 align-items-center'>
            <div className='w-75 d-flex gap-10'>
              <div className='w-25 position-relative'>
                <span 
                style={{top:'-10px',right:'2px'}}
                className='badge bg-secondary text-white rounded-circle p-2 position-absolute'> 1</span>
                <img  className='img-fluid'src={tab}  width='80px' height='80px'alt='product'/>
              </div>
              <div>
                <h5 className='total-price'>Honor T1 7.0.1 GB RAM 8 GB ROM 7 inch<br/>
                 with Wi-Fi+3G Tablet</h5>
                <p className='total-price'>S /+BSCIDE</p>
              </div>
            </div>
            <div>
              <h5 className='total'>$ 100</h5>
            </div>
          </div>
          <div className='d-flex gap-10  mb-2 align-items-center'>
            <div className='w-75 d-flex gap-10'>
              <div className='w-25 position-relative'>
                <span 
                style={{top:'-10px',right:'2px'}}
                className='badge bg-secondary text-white rounded-circle p-2 position-absolute'> 1</span>
                <img  className='img-fluid'src={headphones} alt='product'/>
              </div>
              <div>
                <h5 className='total-price'>Kids headphones bulk 10 pack multi<br/>
                 colored for students</h5>
                <p className='total-price'>S /#A85A5A</p>
              </div>
            </div>
            <div>
              <h5 className='total'>$ 100</h5>
            </div>
          </div>
         
          </div>
          <div className='border-bottom py-4'>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='total'>Subtotal</p>
              <p className='total-price'>$ 10000</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0 total'>Shipping</p>
              <p className='mb-0 total-price'>$ 10000</p>
            </div>
         </div>
         <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>$ 10000</h5>
            </div>
         
        </div>
      </div>
    
    </Container>
  )
}

export default Checkout
