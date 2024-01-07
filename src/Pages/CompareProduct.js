import React from 'react'
import BreadCrum from './BreadCrum'
import Color from '../Components/Color'
import Container from '../Components/Container'
const CompareProduct = () => {
  return (
    <>
      <BreadCrum title='Compare-Products'/>
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
                />
                <div className="product-image-card">
                  <img src='images/watch.jpg'alt='watch'/>
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$ 100</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-details">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
                />
                <div className="product-image-card">
                  <img src='images/headphone.jpg' width='150px' height='240px'alt='watch' className='mb-4 m-5 mt-0'/>
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$ 100</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Type:</h5>
                      <p>Headphone</p>
                    </div>
                    <div className="product-details">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
                />
                <div className="product-image-card">
                  <img src='images/speaker.jpg'alt='watch' width='150px' height='240px' className='mb-4 m-5 mt-0'/>
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$ 100</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Type:</h5>
                      <p>Speaker</p>
                    </div>
                    <div className="product-details">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
                />
                <div className="product-image-card">
                  <img src='images/tab.jpg' width='180px' height='240px'alt='watch' className='mb-4 m-5 mt-0'/>
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$ 100</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Type:</h5>
                      <p>Tablet</p>
                    </div>
                    <div className="product-details">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </Container>
    </>
      
  
  )
}

export default CompareProduct
