import React from 'react'
import BreadCrum from './BreadCrum'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'
const ForgotPassword = () => {
  return (
    <>
    <BreadCrum  title='Forgot Password' />
    
    <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="login-card">
            <h3 className='text-center mb-3'>Reset Your Password</h3>
            <p className="text-center mt-2 mb-3">
              we will send you an email to reset your password
            </p>
            <form action='' className='d-flex flex-column gap-20'>
              <CustomInput  type='email'
              name=''
              placeholder='Enter Email'
             />
             <div>
            
              <div className='d-flex justify-content-center flex-column gap-20 align-items-center'>
                <button className='button border-0'type='submit'>Submit</button>
                <Link to='/login'>Cancel</Link>
              </div>
             </div>
           </form>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default ForgotPassword
