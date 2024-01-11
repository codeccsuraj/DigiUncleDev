import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from '../../backend/db/Products';
import UserRating from './UserRating';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className='popular-products-wrapper bg-gradient-blue py-5'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <h2 className='fs-1 fw-bold py-3 position-relative bar'>Popular Products</h2>
              <div className='btn-box py-2 d-flex align-items-center gap-2'>
                <button className='btn btn-dark fs-7 fw-bold'>Best Seller</button>
                <button className='btn btn-outline-dark fs-7 fw-bold'>Category</button>
              </div>
            </div>
          </div>
          <div className='row justify-content-center py-3'>
            <div className='col-lg-10'>
              <Slider {...sliderSettings}>
                {products.map((item) => (
                  <div key={item.id} className='col-lg-3 py-3'>
                    <div className='card'>
                        <img src={item.image} alt='' className='card-img-top' />
                        <div className='card-body'>
                            <span className='text-secondary'>{item.brand}</span>
                            <Link to={`/products/${item.id}`}>
                                <h5 className='fs-6 fw-bold'>{item.title.slice(0, 20)}{item.title.length > 20 ? '...' : ''}</h5>
                            </Link>
                            <UserRating initialRating={item.rating} />
                            {item.discounted ? (
                            <>
                                <div className='py-2'>
                                    <del>{item.currency} {item.price}</del>
                                    <span className='h6 fw-bold ms-2'>{item.currency} {item.discounted}</span>
                                    <span className='text-success ms-2 fs-7'>Save ({item.currency}{item.price - item.discounted})</span>
                                </div>
                            </>
                                ) : (
                            <>
                                <div className='py-2'>
                                    <span className='fw-bold fs-6 m-0'>{item.currency} {item.price}</span>
                                    {item.discounted && <span className='fs-7'>{item.discounted}</span>}
                                </div>
                            </>
                            )}
                            <div className='row pt-2'>
                                <div className='col-lg'>
                                    <button className='btn btn-warning w-100 fs-7 fw-bold'>Add to Cart</button>
                                </div>
                                <div className='col-lg'>
                                    <button className='btn btn-outline-dark w-100 fs-7 fw-bold'>Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <p className='py-3 text-center fs-4'><Link to='/shop' className='mt-3 nav-link text-primary fw-bold'>See all products..</Link></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
