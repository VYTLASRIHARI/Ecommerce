import React from 'react'
import BreadCrum from './BreadCrum'
import headphone from '../images/headphone.jpg'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
const Cart = () => {
  return (
    <>
    <BreadCrum  title='Cart'/>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
  
      <div className="row">
        <div className="col-12">
          <div className="cart-header d-flex py-3 justify-content-between align-items-center">
           <h4 className='cart-col-1'>Product</h4>
           <h4 className='cart-col-2'>Price</h4>
           <h4 className='cart-col-3'>Quantity</h4>
           <h4 className='cart-col-4'>Total</h4>
          </div>
          <div className="cart-data d-flex py-3  mb-2 justify-content-between align-items-center">
           <div className='cart-col-1  gap-20 d-flex align-items-center'>
          <div className='w-25'>            
            <img src={headphone} className='img-fluid' alt=''/>
          </div>
          <div className='w-75'>
            <p>Headphone</p>
            <p>color :White</p>
            <p>size :Medium</p>
          </div>
           </div>
           <div className='cart-col-2'>
            <h5 className='price'>$ 100</h5>
           </div>
           <div className='cart-col-3 d-flex align-items-center gap-20'>
            <input className='form-control' type='number' name='' id='' min={1} max={10} /><MdDelete className='text-danger '/>
           </div>
           <div className='cart-col-4'>
           <h5 className='price'>$ 100</h5>
           </div>
          </div>
         </div>
        <div className="col-12 py-2 mt-4">
          <div className='d-flex  align-items-baseline'>      
           <Link to='/product' className='button'>
            Continue to Shopping
           </Link>
           </div>
           <div className='d-flex flex-column align-items-end'>
            <h3>SubTotal $ 1000</h3>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to='/checkout' className='button'>Checkout</Link>
           </div>
         </div>
      </div>
     </Container>
  
    
    </>
  )
}
export default Cart