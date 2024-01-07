import React from 'react'
import BreadCrum from './BreadCrum'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'
const SignUp = () => {
  return (
    <>
    <BreadCrum  title='SignUp'/>
    <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="login-card">
            <h3 className='text-center mb-3'>SignUp</h3>
            <form action='' className='d-flex flex-column gap-20'>
            <CustomInput type='text'
              name='name'
              placeholder='Enter Name'
              />
            <CustomInput type='email'
              name=''
              placeholder='Enter Email'
            />
            <CustomInput 
            type='number'
            name=''
            placeholder='Mobile Number'
            
              />
            <CustomInput className='mt-1'
             type='password' 
              name='Password'
              placeholder='Enter Password'
              
              />
  
            
            <div>
            <div className='d-flex justify-content-center gap-20 align-items-center'>
                <button className='button border-0' type='submit'>SignUp</button>
  
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

export default SignUp
