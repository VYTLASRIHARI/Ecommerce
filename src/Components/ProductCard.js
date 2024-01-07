import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import wishlist from '../images/wishlist.svg';
import watch from'../images/watch.jpg';
import tab from '../images/tab.jpg'
import addcart from '../images/add-cart.svg'
import view from'../images/view.svg'
import watch1 from'../images/watch1.jpg'
import tab5 from'../images/tab5.jpg'
import tab6 from'../images/tab6.jpg'
import speaker from'../images/speaker.jpg'
import mini1 from '../images/mini1.jpg'
import phone1 from '../images/phone1.jpg'
import phone2 from '../images/phone2.jpg'
import camera from '../images/camera.jpg'
import photo from '../images/photo.jpg'
import acc from '../images/acc.jpg'
import homeapp from '../images/homeapp.jpg'
const ProductCard = (props) => {
  const {grid}= props;
  console.log(grid);
  let location =useLocation();
  return (
    <>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}` :"col-2"} `}>
      <Link to='product/:id'className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src={wish} alt=''/></button>
        </div>
        <div className="product-image">
          <img src={watch} className='img-fluid '  width='150px'
          height='150px'alt='product'/>
          <img src={watch1} className='img-fluid ' width='110px'
          height='110px' alt='product'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels </h6>
          <h5 className="product-title"> 
           Watches for Students in Mutlple colors
          </h5>
          <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p className={`description ${grid === 12 ? "d-block" :"d.none"}`}>
          
          
           </p>
        <p className='price'>$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-20'>
            <Link>
            <img src={prodcompare} alt='procompare'/>
            </Link>
            <Link>
            <img src={view} alt='view'/>
            </Link>
            <Link>
            <img src={addcart} alt='addcart'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}` :"col-2"} `}>
      <Link to='product/:id'className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src={wish} alt=''/></button>
        </div>
        <div className="product-image">
          <img src={tab5} className='img-fluid' width='120px' height='120px' alt='product'/>
          <img src={tab6} className='img-fluid' width='110px'
          height='110px' alt='product'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels </h6>
          <h5 className="product-title"> 
           Samsung Galaxy Note 10 Tablets
          </h5>
          <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p className={`description ${grid === 12 ? "d-block" :"d.none"}`}>
           
          
           </p>
        <p className='price'>$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-20'>
            <Link>
            <img src={prodcompare} alt='procompare'/>
            </Link>
            <Link>
            <img src={view} alt='view'/>
            </Link>
            <Link>
            <img src={addcart} alt='addcart'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}` :"col-2"} `}>
      <Link to='product/:id'className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src={wish} alt=''/></button>
        </div>
        <div className="product-image">
          <img src={speaker} className='img-fluid 'width='130px' height='130px' alt='product'/>
          <img src={mini1} className='img-fluid ' width='150px'
          height='150px' alt='product'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels </h6>
          <h5 className="product-title"> 
           Best Room-filling Sound  Speakers 
          </h5>
          <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p className={`description ${grid === 12 ? "d-block" :"d.none"}`}>
           
          
           </p>
        <p className='price'>$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-20'>
            <Link>
            <img src={prodcompare} alt='procompare'/>
            </Link>
            <Link>
            <img src={view} alt='view'/>
            </Link>
            <Link>
            <img src={addcart} alt='addcart'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}` :"col-2"} `}>
      <Link to='product/:id'className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src={wish} alt=''/></button>
        </div>
        <div className="product-image">
          <img src={phone1} className='img-fluid mb-0' alt='product'/>
          <img src={phone2} className='img-fluid m-2 mt-0 mb-0' width='130px'
          height='130px' alt='product'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels </h6>
          <h5 className="product-title"> 
           Apple Mobiles Multi-color for students
          </h5>
          <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p className={`description ${grid === 12 ? "d-block" :"d.none"}`}>
          
          
           </p>
        <p className='price'>$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-20'>
            <Link>
            <img src={prodcompare} alt='procompare'/>
            </Link>
            <Link>
            <img src={view} alt='view'/>
            </Link>
            <Link>
            <img src={addcart} alt='addcart'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
   <div className={` ${location.pathname == "/product" ? `gr-${grid}` :"col-2"} `}>
      <Link to='product/:id'className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src={wish} alt=''/></button>
        </div>
        <div className="product-image">
          <img src={photo} className='img-fluid ' width='130px'
          height='130px'alt='product'/>
          <img src={camera} className='img-fluid ' width='130px'
          height='130px' alt='product'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels </h6>
          <h5 className="product-title"> 
           Best Camera for low-price for students
          </h5>
          <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p className={`description ${grid === 12 ? "d-block" :"d.none"}`}>
           
          
           </p>
        <p className='price'>$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-20'>
            <Link>
            <img src={prodcompare} alt='procompare'/>
            </Link>
            <Link>
            <img src={view} alt='view'/>
            </Link>
            <Link>
            <img src={addcart} alt='addcart'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}` :"col-2"} `}>
      <Link to='product/:id'className='product-card position-relative'>
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src={wish} alt=''/></button>
        </div>
        <div className="product-image">
          <img src={acc} className='img-fluid 'width='120px' height='120px'alt='product'/>
          <img src={homeapp} className='img-fluid ' width='120px'
          height='120px' alt='product'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels </h6>
          <h5 className="product-title"> 
           Bluetooth headphones for students
          </h5>
          <ReactStars
             count={5}
             size={24}
             value='3'
             edit={false}
             activeColor="#ffd700"
           />
           <p className={`description ${grid === 12 ? "d-block" :"d.none"}`}>
           
          
           </p>
        <p className='price'>$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-20'>
            <Link>
            <img src={prodcompare} alt='procompare'/>
            </Link>
            <Link>
            <img src={view} alt='view'/>
            </Link>
            <Link>
            <img src={addcart} alt='addcart'/>
            </Link>
          </div>
        </div>
      </Link>
    </div>
   </> 
  )
}

export default ProductCard
