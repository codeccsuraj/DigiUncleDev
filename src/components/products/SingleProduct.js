import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../backend/db/Products';
import UserRating from './UserRating';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const SingleProduct = () => {
  const { addItem, totalUniqueItems } = useCart();
  const [shuffledProducts, setShuffledProducts] = useState([]);

  const showToast = () => {
    toast.success((totalUniqueItems + 1) + 'Item added to cart successfully');
  };

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

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="custom-slick-arrow custom-prev-arrow"
      style={{ left: "-30px", zIndex: 1, color:'black' }}
    />
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="custom-slick-arrow custom-next-arrow"
      style={{ right: "-30px", zIndex: 1, color:'black' }}
    />
  );

  useEffect(() => {
    // Shuffle the products array on mount
    setShuffledProducts(shuffleArray(products));
  }, []);

  return (
    // <section className='product-wrapper'>
    //   <div className='container-fluid d-flex justify-content-center'>
    //     <div className='container-xxl d-flex flex-column align-items-center'>
    //       <div className='col py-3'>
    //         <h2 className='fs-1 fw-bold'>Popular Products</h2>
    //         <p className='text-center h5 py-3'>
    //           <Link to='/shop' className='h5 nav-link text-primary'>See all</Link>
    //         </p>
    //       </div>
    //       <div className='row col-11'>
    //         {shuffledProducts.slice(0, 8).map((p) => (
    //           <div key={p.id} className='col-3 product-card-wrapper mb-3 rounded-0 bg-light'>
    //             <div className='product-img position-relative d-flex flex-column bg-light align-items-center bg-light'>
    //               <img src={p.image} alt='' className='prod-img' />
    //             </div>
    //             <div className='product-info'>
    //               <span className='text-start text-secondary'>{p.brand}</span>
    //               <Link to={`/products/${p.id}`}>
    //                 <h6>{p.title}</h6>
    //               </Link>
    //               <UserRating initialRating={p.rating} />
    //             </div>
    //             <div className='product-pricing row justify-content-evenly align-items-center'>
    //               <div className='col'>
    //                 <p className='fs-8 m-0'>
    //                   {p.discounted ? (
    //                     <>
    //                       <del>{p.currency} {p.price}</del>
    //                       <span className='h6 fw-bold'>{p.discounted}</span>
    //                     </>
    //                   ) : (
    //                     <>
    //                       <span className='fw-bold fs-6 m-0'>{p.currency} {p.price}</span>
    //                       {p.discounted && <span className='fs-7'>{p.discounted}</span>}
    //                     </>
    //                   )}
    //                 </p>
    //               </div>
    //               <div className='col-3'>
    //                 <button className='btn border border-warning' onClick={() => { addItem(p); showToast(); }}>
    //                   <FaCartPlus />
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <>
      <section className='product-wrapper py-6'> 
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-10'>
              <p className='py-3 position-relative'><h1 className='fs-1 fw-bold bar text-danger'>Best Seller of Month</h1></p>
              <Slider
                {...sliderSettings}
                prevArrow={<CustomPrevArrow />}
                nextArrow={<CustomNextArrow />}
                >
                
                {shuffledProducts.slice(0, 8).map(( recentProduct ) => (
                  <div className='card'>
                    <img src={recentProduct.image} alt='' className='card-img-top' />
                    <div className='card-body'>
                      <span className='text-secondary'>{recentProduct.brand}</span>
                      <Link to={`/products/${recentProduct.id}`}>
                        <h4 className='fs-5 fw-bold py-2'>{recentProduct.title.slice(0, 20)}{recentProduct.title.length > 20 ? '...' : ''}</h4>
                      </Link>
                      <p className='d-flex align-items-center'><UserRating initialRating={recentProduct.rating} /> ({recentProduct.rating})</p>
                      {recentProduct.discounted ? (
                            <>
                                <div className='py-2'>
                                    <del>{recentProduct.currency} {recentProduct.price}</del>
                                    <span className='h6 fw-bold ms-2'>{recentProduct.currency} {recentProduct.discounted}</span>
                                    <span className='text-success ms-2 fs-7'>Save ({recentProduct.currency}{recentProduct.price - recentProduct.discounted})</span>
                                </div>
                            </>
                                ) : (
                            <>
                                <div className='py-2'>
                                    <span className='fw-bold fs-6 m-0'>{recentProduct.currency} {recentProduct.price}</span>
                                    {recentProduct.discounted && <span className='fs-7'>{recentProduct.discounted}</span>}
                                </div>
                            </>
                            )}
                      <div className='col-lg pt-3'>
                        <button className='btn btn-warning fw-bold w-100 text-light' onClick={() => { addItem(recentProduct); showToast(); }}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
