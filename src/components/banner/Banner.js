import React from 'react'
// import hero_img from '../../assets/heroimg.jpg'
import Carasoul from './Carasoul'
import PopularProducts from '../products/PopularProducts'
const Banner = () => {
  return (
    <>  
        <Carasoul />
        {/* <section className='banner-header-wrapper'>
          <div className='container-fluid'>  
            <div className='row justify-content-center align-items-center py-4'>
              <div className='col-lg-7 py-4'>
                <h1 className='display-3 p-2'>Decorate your Interior with our handcrafted items</h1>
                <button className='flat-btn-lg mx-4'>Explore more</button>
              </div>
              <div className='col-lg-4 py-4'>
                <div className='hero_img d-flex justify-content-center align-items-center'>
                  <img src={hero_img} className='img-fluid rounded-4' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <PopularProducts />
    </>
  )
} 

export default Banner