import React from 'react'
import BreadCrum from './BreadCrum'
import Container from '../Components/Container'
const Favourite = () => {
  return (
    <>
     <BreadCrum title='Favourite'/>
     <Container class1="wishlist-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
            <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
             />
             <div className="wishlist-card-image ">
               <img src='images/watch.jpg' 
               className='img-fluid w-100'
               alt='watch'/>
              </div> 
              <div>
             <div className='py-3 px-3'>
              <h5 className='title'>
                Honor T1 7.0 1 GB ROM 7 Inch with Wi-Fi+3G Tablet
              </h5>
              <h6 className='price'>$ 100</h6>
              </div>   
             </div>  
            </div>
          </div><div className="col-3">
            <div className="wishlist-card position-relative">
            <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
             />
             <div className="wishlist-card-image ">
               <img src='images/watch.jpg' 
               className='img-fluid w-100'
               alt='watch'/>
              </div> 
              <div>
             <div className='py-3 px-3'>
              <h5 className='title'>
                Honor T1 7.0 1 GB ROM 7 Inch with Wi-Fi+3G Tablet
              </h5>
              <h6 className='price'>$ 100</h6>
              </div>   
             </div>  
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
            <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
             />
             <div className="wishlist-card-image ">
               <img src='images/watch.jpg' 
               className='img-fluid w-100'
               alt='watch'/>
              </div> 
              <div>
             <div className='py-3 px-3'>
              <h5 className='title'>
                Honor T1 7.0 1 GB ROM 7 Inch with Wi-Fi+3G Tablet
              </h5>
              <h6 className='price'>$ 100</h6>
              </div>   
             </div>  
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
            <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
             />
             <div className="wishlist-card-image ">
               <img src='images/watch.jpg' 
               className='img-fluid w-100'
               alt='watch'/>
              </div> 
              <div>
             <div className='py-3 px-3'>
              <h5 className='title'>
                Honor T1 7.0 1 GB ROM 7 Inch with Wi-Fi+3G Tablet
              </h5>
              <h6 className='price'>$ 100</h6>
              </div>   
             </div>  
            </div>
          </div>
        
        </div>
     </Container>
    </>
  )
}

export default Favourite
