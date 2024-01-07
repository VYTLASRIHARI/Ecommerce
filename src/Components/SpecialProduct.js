import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
const SpecialProduct = () => {
  return (
    <>
    <div className='col-4 mb-3'>

      <div className="special-product-card">
       <div className="d-flex justify-content-between">
        <div>
          <img src='images/tab.jpg' alt='watch' width='100px' height='100px'className='img-fluid m-4 '/>
          <img src='images/tab1.jpg' alt='watch'width='80px' height='80px' className='img-fluid mt-4'/>
          <img src='images/tab1.jpg' alt='watch'width='80px' height='80px'className='img-fluid mt-4'/>
        </div>
        <div className='special-product-content'>
         <h5 className='brand'>Havels</h5>
         <h6 className='title'>
          Samsung Galaxy Note10+ Mobile Phone:
         </h6>
         <ReactStars
             count={5}
             size={18}
             value={4}
             edit={false}
             activeColor="#ffd700"
           />
         <p className="price">
          <span className='red-p'>$100</span> &nbsp;<strike>$200</strike>
         </p>
         <div className='discount-till d-flex align-items-center gap-10'>
          <p className='mb-0'>
            <b>5</b>days
          </p>
          <div className='d-flex gap-10'>
            <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
            <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
            <span className='badge  rounded-circle p-2 bg-warning'>1</span>
          </div>
          </div>
          <div className='prod-count my-3'>
            <p>Products:</p>
            <div className='progress'>        
           <div 
             className='progress-bar'
             role='progressbar'
             style={{"width":"25%"}}  
             aria-valuenow='25'
             aria-valuemin='0'
             aria-valuemax='100'
            >

            </div>
          </div>
         </div>
         <Link className='button mb-2'>Add to Cart</Link>
        </div>
       </div>
      </div>
      </div>
    <div className='col-4 mb-3'>

<div className="special-product-card">
 <div className="d-flex justify-content-between">
  <div>
    <img src='images/camera.jpg' alt='watch' width='130px' height='130px'className='img-fluid mt-4'/>
    <img src='images/camera.jpg' alt='watch'width='80px' height='80px' className='img-fluid mt-4'/>
    <img src='images/photo.jpg' alt='watch'width='80px' height='80px'className='img-fluid mt-5'/>
       
  </div>
  <div className='special-product-content'>
   <h5 className='brand'>Havels</h5>
   <h6 className='title'>
    Samsung Galaxy Note10+ Mobile Phone:
   </h6>
   <ReactStars
       count={5}
       size={18}
       value={4}
       edit={false}
       activeColor="#ffd700"
     />
   <p className="price">
    <span className='red-p'>$100</span> &nbsp;<strike>$200</strike>
   </p>
   <div className='discount-till d-flex align-items-center gap-10'>
    <p className='mb-0'>
      <b>5</b>days
    </p>
    <div className='d-flex gap-10'>
      <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
      <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
      <span className='badge  rounded-circle p-2 bg-warning'>1</span>
    </div>
    </div>
    <div className='prod-count my-3'>
      <p>Products:</p>
      <div className='progress'>        
     <div 
       className='progress-bar'
       role='progressbar'
       style={{"width":"25%"}}  
       aria-valuenow='25'
       aria-valuemin='0'
       aria-valuemax='100'
      >

      </div>
    </div>
   </div>
   <Link className='button mb-2'>Add to Cart</Link>
  </div>
 </div>
</div>
     </div>
   <div className='col-4 mb-3'>

       <div className="special-product-card">
        <div className="d-flex justify-content-between">
         <div>
           <img src='images/speaker.jpg' alt='watch' width='140px' height='140px'className='img-fluid mt-3'/>         
           <img src='images/speaker.jpg' alt='watch'width='70px' height='70px' className='img-fluid mt-4 '/>
          <img src='images/mini1.jpg' alt='watch'width='90px' height='90px'className='img-fluid mt-5 '/>
          

         </div>
         <div className='special-product-content'>
          <h5 className='brand'>Havels</h5>
          <h6 className='title'>
           Samsung Galaxy Note10+ Mobile Phone:
          </h6>
          <ReactStars
              count={5}
              size={18}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
          <p className="price">
           <span className='red-p'>$100</span> &nbsp;<strike>$200</strike>
          </p>
          <div className='discount-till d-flex align-items-center gap-10'>
           <p className='mb-0'>
             <b>5</b>days
           </p>
           <div className='d-flex gap-10'>
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>
           </div>
           </div>
           <div className='prod-count my-3'>
             <p>Products:</p>
             <div className='progress'>        
            <div 
              className='progress-bar'
              role='progressbar'
              style={{"width":"25%"}}  
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='100'
             >
 
             </div>
           </div>
          </div>
          <Link className='button mb-2'>Add to Cart</Link>
         </div>
        </div>
       </div>
      </div>
    <div className='col-4 mb-3'>

       <div className="special-product-card">
        <div className="d-flex justify-content-between">
         <div>
           <img src='images/laptop2.png' alt='watch' width='140px' height='140px'className='img-fluid mt-3 '/>
           <img src='images/laptop4.jpg' alt='watch'width='90px' height='90px' className='img-fluid mt-5 '/>
          <img src='images/laptop5.jpg' alt='watch'width='80px' height='80px'className='img-fluid mt-5'/>
       
         </div>
         <div className='special-product-content'>
          <h5 className='brand'>Havels</h5>
          <h6 className='title'>
           Samsung Galaxy Note10+ Mobile Phone:
          </h6>
          <ReactStars
              count={5}
              size={18}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
          <p className="price">
           <span className='red-p'>$100</span> &nbsp;<strike>$200</strike>
          </p>
          <div className='discount-till d-flex align-items-center gap-10'>
           <p className='mb-0'>
             <b>5</b>days
           </p>
           <div className='d-flex gap-10'>
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>
           </div>
           </div>
           <div className='prod-count my-3'>
             <p>Products:</p>
             <div className='progress'>        
            <div 
              className='progress-bar'
              role='progressbar'
              style={{"width":"25%"}}  
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='100'
             >
 
             </div>
           </div>
          </div>
          <Link className='button mb-2'>Add to Cart</Link>
         </div>
        </div>
       </div>
     </div>
       <div className='col-4 mb-3'>

       <div className="special-product-card">
        <div className="d-flex justify-content-between">
         <div>
           <img src='images/phone1.jpg' alt='watch'  width='150px' height='150px' className='img-fluid mt-4'/>
           <img src='images/phone1.jpg' alt='watch' width='60px' height='60px'className='img-fluid mt-5 me-4'/>
           <img src='images/phone2.jpg' alt='watch' width='50px' height='50px'className='img-fluid mt-5'/>
         </div>
         <div className='special-product-content'>
          <h5 className='brand'>Havels</h5>
          <h6 className='title'>
           Samsung Galaxy Note 10+ Mobile Phone:
          </h6>
          <ReactStars
              count={5}
              size={18}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
          <p className="price">
           <span className='red-p'>$100</span> &nbsp;<strike>$200</strike>
          </p>
          <div className='discount-till d-flex align-items-center gap-10'>
           <p className='mb-0'>
             <b>5</b>days
           </p>
           <div className='d-flex gap-10'>
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>:
             <span className='badge  rounded-circle p-2 bg-warning'>1</span>
           </div>
           </div>
           <div className='prod-count my-3'>
             <p>Products:</p>
             <div className='progress'>        
            <div 
              className='progress-bar'
              role='progressbar'
              style={{"width":"25%"}}  
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='100'
             >
 
             </div>
           </div>
          </div>
          <Link className='button mb-2'>Add to Cart</Link>
         </div>
        </div>
       </div>
       </div>
       <div className='col-4 mb-3'>

       <div className="special-product-card">
        <div className="d-flex justify-content-between">
         <div>
           <img src='images/tab4.jpg' alt='watch' width='130px' height='130px'className='img-fluid mt-4 m-3'/>
           <img src='images/tab5.jpg' alt='watch'width='60px' height='60px' className='img-fluid mt-5 me-4'/>
          <img src='images/tab6.jpg' alt='watch'width='50px' height='50px'className='img-fluid mt-5'/>
       
         </div>
         <div className='special-product-content'>
          <h5 className='brand'>Sony</h5>
          <h6 className='title'>
           Samsung Galaxy Tab A SM-T295, 40...
          </h6>
          <ReactStars
              count={5}
              size={18}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
          <p className="price">
           <span className='red-p'>$100</span> &nbsp;<strike>$200</strike>
          </p>
          <div className='discount-till d-flex align-items-center gap-10'>
           <p className='mb-0'>
             <b>538</b>days
           </p>
           <div className='d-flex gap-10'>
             <span className='badge  rounded-circle p-2 bg-danger'>13</span>:
             <span className='badge  rounded-circle p-2 bg-danger'>00</span>:
             <span className='badge  rounded-circle p-2  bg-danger'>35</span>
           </div>
           </div>
           <div className='prod-count my-3'>
             <p>Products:</p>
             <div className='progress'>        
            <div 
              className='progress-bar'
              role='progressbar'
              style={{"width":"25%"}}  
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='100'
             >
 
             </div>
           </div>
          </div>
          <Link className='button mb-2'>Add to Cart</Link>
         </div>
        </div>
       </div>
       </div>
       </>
    
  )
}

export default SpecialProduct
