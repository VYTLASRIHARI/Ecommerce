import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../Components/BlogCard'
import BlogCard1 from '../Components/BlogCard1'
import BlogCard2 from '../Components/BlogCard2'
import BlogCard3 from '../Components/BlogCard3'
import ProductCard from '../Components/ProductCard'
import Container from '../Components/Container'
import { services } from './utils/Data'
import ReactStars from "react-rating-stars-component";
import SpecialProduct from '../Components/SpecialProduct'
const Home = () => {
  return (
    <>

    <Container class1='home-wrapper-1 py-5'>
    <div className="row">
          <div className="col-6">
            <div className='d-flex flex-wrap justify-content-between align-items-center'>           
            <div className="main-banner-content position-relative  me-3">
              <img src='images/main-banner-1.jpg'  
              className='img-fluid rounded-3'
              alt='main banner'/>
              <div className="main-banner-content  position-absolute">
                <h4>SUPERCHARGED FOR PRO5</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999.00 or $41.62/mo</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          </div>
          
           <div className="col-6">
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>           
             <div className="small-banner position-relative ">
              <img src='images/catbanner-01.jpg'  
              className='img-fluid rounded-3'
              alt='main banner'/>
              <div className="small-banner-content  position-absolute">
                <h4>BESTSALE</h4>
                <h5>Laptops Max</h5>
                <p>From $999.00 or<br/> $41.62/mo</p>
              
              </div>
            </div>
            <div className="small-banner position-relative ">
              <img src='images/catbanner-03.jpg'  
              className='img-fluid rounded-3'
              alt='main banner'/>
              <div className="small-banner-content  position-absolute">
                <h4>NEW ARRRIVAL</h4>
                <h5>BUY IPad Air</h5>
                <p>From $999.00 or<br/> $41.62/mo</p>
              
              </div>
            </div>
            <div className="small-banner position-relative ">
              <img src='images/catbanner-02.jpg'  
              className='img-fluid rounded-3'
              alt='main banner'/>
              <div className="small-banner-content  position-absolute">
                <h4>15% OFF</h4>
                <h5>Smartwatch7</h5>
                <p>Shop the latest band <br/>styles and colors
                </p>
              
              </div>
            </div>
            <div className="small-banner position-relative ">
              <img src='images/catbanner-04.jpg'  
              className='img-fluid rounded-3'
              alt='main banner'/>
              <div className="small-banner-content  position-absolute">
                <h4>FREE ENGRAVING</h4>
                <h5>AirPodsMax</h5>
                <p>High-fidelity playback & <br/>Ultra-low distartion</p>
              
              </div>
            </div>
           </div>
          </div>
    </div>
    </Container>
    <Container class1='home-wrapper-2py-5'>
   <div className="row">
        <div className="col-12">
          <div className=' services d-flex align-items-center justify-content-between'>
            {services?.map((i,j)=>{

              return(
                <div className='d-flex align-items-center gap-20'>
              <img src={i.image} alt='services'/>
              <div>
                <h6>{i.title}</h6>
                <p className='mb-0'>{i.tagline}</p>
              </div>
            </div>
           
              );
            })}
          
          </div>
          </div>
        </div>
    </Container>
    <Container class1='home-wrapper-3 py-5'>
    <div className="row">
          <div className="col-12">
            <div className="catagories d-flex  justify-content-betwwen align-items center">
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Computer&Laptop</h6>
              <p>5 Items</p>
            </div>
            <img src='images/laptop.jpg' width='80px' height='80px'alt='camera'/>
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Cameras & Voides</h6>
              <p>10 Items</p>
            </div>
            <img src='images/camera.jpg'width='80px' height='80px' alt='camera'/>
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Smart Television</h6>
              <p>12 Items</p>
            </div>
            <img src='images/tv2.jpg'width='70px' height='70px' alt='camera'/>
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Smart watches</h6>
              <p>13 Items</p>
            </div>
            <img src='images/watch1.jpg' alt='camera' width='75px' height='75px'/>
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Music & Gaming</h6>
              <p>4 Items</p>
            </div>
            <img src='images/games.jpg'width='80px' height='80px' alt='camera'/>
           </div>
           </div>
           </div>
      </div>
    <div className="row">
          <div className="col-12">
            <div className="catagories d-flex  justify-content-betwwen align-items center">
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Mobile&Tablets</h6>
              <p>5 Items</p>
            </div>
            <img src='images/mobile.jpg' width='80px' height='80px'alt='camera'/>
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Headphoness</h6>
              <p>6 Items</p>
            </div>
            <img src='images/headphone.jpg' width='80px' height='80px'alt='camera'/>
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Accessories</h6>
              <p>10 Items</p>
            </div>
            <img src='images/speaker1.png' width='80px' height='80px' alt='camera'/>
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Portable Speaker</h6>
              <p>8 Items</p>
            </div>
            <img src='images/mini1.jpg' width='100px' height='100px' className='mt-3'alt='camera'  />
           </div>
           <div className='d-flex  align-items-center'> 
            <div>
              <h6>Home Applliances</h6>
              <p>10 Items</p>
            </div>
            <img src='images/homeapp.jpg' width='80px' height='80px'alt='camera'/>
           </div>
           </div>
           </div>
      </div>
    </Container>
    <Container class1='Feature-wrapper py-5 home-wrapper-2'>
    <div className="row">
          <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <div className='col-2'>
              <div className="product-card">
                <div className=''>              
                <img src='images/headphone.jpg' className='m-3' alt='watch'/>
                </div>
 
              <div className="product-details">
              <h6 className='brand'>Havels</h6>
              <h5 className='product-title'>Kids Headphones Bulk 10
                Pack Multi Colored For..
              </h5>
              <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p>$100</p>
           
              </div>
              </div>
            </div>
            <div className='col-2'>
              <div className="product-card">
               <img src='images/camera.jpg' className='m-3' alt='watch'/>
              
              <div className="product-details">
              <h6 className='brand'>Sony</h6>
              <h5 className='product-title'>
                olympus pen E-PL9 kit width
                14-42 EZ Lens Camera
              </h5>
              <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p>$100</p>
           
              </div>
              </div>
            </div>
            <div className='col-2'>
              <div className="product-card">
               <img src='images/tab.jpg' width='100px' height='150px' className='mt-0 mb-2 m-4' alt='watch'/>
              
              <div className="product-details">
              <h6 className='brand'>Havels</h6>
              <h5 className='product-title'>
                Honor T1.7.0 1GB RAM 8 ROM 
              </h5>
              <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p>$100</p>
           
              </div>
              </div>
            </div>
            <div className='col-2'>
              <div className="product-card">
               <img src='images/speaker.jpg' width='140px' height='140px'
               alt='watch'/>
              
              <div className="product-details">
              <h6 className='brand'>Havels</h6>
              <h5 className='product-title'>Beoplay A1 Portable 
               Bluetooth Speakers With..
              </h5>
              <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p>$100</p>
           
              </div>
              </div>
            </div>
            <div className='col-2'>
              <div className="product-card">
               <img src='images/watch1.jpg' className='m-2' alt='watch'/>
              
              <div className="product-details">
              <h6 className='brand'>Sony</h6>
              <h5 className='product-title'>Milanese Loop watch Band 
              For 42mm /44mm Apple..
              </h5>
              <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p>$100</p>
           
              </div>
              </div>
            </div>
            <div className='col-2'>
              <div className="product-card">
               <img src='images/speaker1.png' className='m-3'width='110px' height='110px' alt='watch'/>
              
              <div className="product-details">
              <h6 className='brand'>Havels</h6>
              <h5 className='product-title'>Kids Headphones Bulk 10
                Pack Multi Colored For..
              </h5>
              <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p>$100</p>
           
              </div>
              </div>
            </div>
           
            
    </div>
 
    </Container>
    <Container class1='famous-wrapper py-5 home-wrapper-3'>
       <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative w-100">
              <img src='images/download.jpeg' className='img-fluid'  width='280rem' height='280rem'alt='watch'/>
              <div className="famous-content position-absolute">
                <p className='text-white'>BIG SCREEN</p>
                <h6 className='text-white'>Smart Watch Series7</h6>
                <p className='text-white'>From $399or $16.62/mo.for 24 mo.</p>
              </div>
            </div>
          </div>
           <div className="col-3">
            <div className="famous-card position-relative">
              <img src='images/laptop1.jpg' className='img-fluid ' width='980rem' height='980rem'alt='watch'/>
              <div className="famous-content position-absolute">
                <p >STUDIO DISPLAY</p>
                <h6>600 nits of brightness</h6>
                <p>27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
       <div className="col-3">
            <div className="famous-card position-relative">
              <img src='images/phone.jpg' className='img-fluid 'width='300rem' height='300rem'alt='watch'/>
              <div className="famous-content position-absolute">
                <p>SMARTPHONES</p>
                <h6>Smartphone 13 Pro.</h6>
                <p>Now in Green From $999.00 or $4162/mo for 24.</p>
              </div>
            </div>
          </div>
       <div className="col-3">
            <div className="famous-card position-relative">
              <img src='images/mini2.jpg' className='img-fluid'   width='287rem' height='287rem'alt='watch'/>
              <div className="famous-content position-absolute">
                <p>HOME-SPEAKERS</p>
                <h6>Room-filling sound.</h6>
                <p >From $699or $116.62/mo.for 12 mo.</p>
              </div>
            </div>
          </div>
      
        </div>
    </Container>
    <Container class1='special-wrapper py-5 home-wrapper-4'>
      <div className="row">
        <div className="col-12">
          <h3 className='section-heading'>Special Products</h3>
        </div>
      </div>
      <div className="row ">
        <SpecialProduct />        
      
      </div>
    </Container>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
        
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
         <ProductCard/>
            
          </div>
    
    </Container>
    <Container class1='marque-wrapper py-5'>
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand'/>
                </div>
               <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand'/>
                </div>
              <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand'/>
               </div>
              <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand'/>
                </div>
             
              </Marquee>
            </div>
          </div>
        </div>
  

    </Container>
    <Container class1='blog-wrapper py-5 home-wrapper-2'>
        
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
         </div>
         <div className="row">
          <div className="col-3">
            <BlogCard/>
         </div>
         <div className="col-3 ">
            <BlogCard1/>
         </div>
         <div className="col-3 ">
            <BlogCard2/>
         </div>
         <div className="col-3 ">
            <BlogCard3/>
         </div>
      
      
      </div>
    </Container>
    
  
    </>
  )
}

export default Home