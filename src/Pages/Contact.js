import React from 'react'
import BreadCrumb from './BreadCrum'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import Container from '../Components/Container';



const Contact = () => {
  return (
    <>
    
    <BreadCrumb title='Contact Us'/>
    <Container class1="contact-wrapper py-5 home-wrapper">
      
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486415.1779571954!2d82.93291107814404!3d17.73905113229818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1703330291253!5m2!1sen!2sin" 
          width="600"
          height="450" 
          className="border-0;" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
             <div>
              <h3 className="contact-title mb-4">Contact</h3>
              <form action='' className='d-flex flex-column gap-20'>
               <div>
                <input
                 type='text'
                 className='form-control'
                 placeholder='Name'
                 />
               </div> <div>
                <input
                 type='email'
                 className='form-control'
                 placeholder='Email'
                 />
               </div>
               <div>
                <input
                 type='tel'
                 className='form-control'
                 placeholder='Mobile Number'
                 />
               </div>
               <div>
                <textarea
                 name=''
                 id=''
                 className='w-100 form-control'
                 cols='30'
                 rows='4'
                 placeholder='Comment'
                 />
               </div>
              <div>
                <button className='button border-0'>Submit</button>
              </div>
              </form>
             </div>
             <div>
              <h3 className="contact-title mb-4">Get in touch with us</h3>
              <div>
                <ul className='ps-0'>
                 <li className='mb-3 d-flex gap-20 align-items-center'>
                  <FaHome  className='fs-5'/>
                  <address className='mb-0'>
                    Hno:277 , Near village chopal , Mandura,Sonipat,
                    Haryana
                  </address>
                  </li> 
                 <li className='mb-3 d-flex gap-20 align-items-center'>
                  <FaPhoneAlt className='fs-5'/>
                  <a href='tel:+91 1234567890'>+91 1234567890</a>
                  </li> 
                 
                 <li className='mb-3 d-flex gap-20 align-items-center'>
                  <CgMail className='fs-5'/>
                  <a href='mailto:examplecompany@gmail.com'>mailto:examplecompany@gmail.com</a>
                  </li> 
                  
                 <li className='mb-3 d-flex gap-20 align-items-center'>
                  <FaInfo className='fs-5'/>
                  <p className='mb-0'>Monday -  Friday 10 AM - 8 PM</p>
                  </li>
                </ul>
              </div>
             </div>
            </div>
            </div>
        </div>
      
    </Container>
    
    </>
  )
}

export default Contact