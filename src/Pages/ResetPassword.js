import React from 'react'
import BreadCrum from './BreadCrum'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'
const ResetPassword = () => {
  return (
    <>
    <BreadCrum  title='Reset Password'/>
    <Container class1="login-wrapper py-5 home-wrappe-2">
      <div className="row">
        <div className="col-12">
          <div className="login-card">
            <h3 className='text-center mb-3'>Reset Password</h3>
            <form action='' className='d-flex flex-column gap-20'>
              <CustomInput type='password' 
              name='Password'
              placeholder='Enter Password'
              />
              <CustomInput  type='password' 
              name='Password'
              placeholder='Confirm Password'
            /> 
             
             <div>
            
              <div className='d-flex justify-content-center gap-20 align-items-center'>
                <button className='button border-0' type='submit'>Ok</button>
  
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

export default ResetPassword
