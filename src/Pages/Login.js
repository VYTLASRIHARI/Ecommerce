import React from 'react'
import BreadCrum from './BreadCrum'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'
const Login = () => {
  return (
    <>
    <BreadCrum title='Login Form'/>
    <Container class1="login-wrapper py-5 home-wrapper-2">
      
     <div className="row">
        <div className="col-12">
          <div className="login-card">
            <h3 className='text-center mb-3'>Login</h3>
            <form action='' className='d-flex flex-column gap-20'>
              <CustomInput type='email'
              name=''
              placeholder='Enter Email'
              />
              <CustomInput type='password' 
              name='Password'
              placeholder='Enter Password'
              />
             <div>
              <Link to='/forgot-password'>Forgot Password</Link>
              <div className='d-flex justify-content-center gap-20 align-items-center'>
                <button className='button border-0' type='submit'>Login</button>
                <Link to='/signup'className='button signup'>SignUp</Link>
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

export default Login
