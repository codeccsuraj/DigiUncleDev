import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../backend/db/Products';
import { FaCartPlus } from 'react-icons/fa';
import UserRating from './UserRating';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';

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

  useEffect(() => {
    // Shuffle the products array on mount
    setShuffledProducts(shuffleArray(products));
  }, []);

  return (
    <section className='product-wrapper'>
      <div className='container-fluid d-flex justify-content-center'>
        <div className='container-xxl d-flex flex-column align-items-center'>
          <div className='col py-3'>
            <h2 className='fs-2 text-center fw-bold'>Popular Products</h2>
            <p className='text-center h5 py-3'>
              <Link to='/shop' className='h5 nav-link text-primary'>See all</Link>
            </p>
          </div>
          <div className='row col-11'>
            {shuffledProducts.slice(0, 8).map((p) => (
              <div key={p.id} className='col-3 product-card-wrapper mb-3 rounded-0 bg-light'>
                <div className='product-img position-relative d-flex flex-column bg-light align-items-center bg-light'>
                  <img src={p.image} alt='' className='prod-img' />
                </div>
                <div className='product-info'>
                  <span className='text-start text-secondary'>{p.brand}</span>
                  <Link to={`/products/${p.id}`}>
                    <h6>{p.title}</h6>
                  </Link>
                  <UserRating initialRating={p.rating} />
                </div>
                <div className='product-pricing row justify-content-evenly align-items-center'>
                  <div className='col'>
                    <p className='fs-8 m-0'>
                      {p.discounted ? (
                        <>
                          <del>{p.currency} {p.price}</del>
                          <span className='h6 fw-bold'>{p.discounted}</span>
                        </>
                      ) : (
                        <>
                          <span className='fw-bold fs-6 m-0'>{p.currency} {p.price}</span>
                          {p.discounted && <span className='fs-7'>{p.discounted}</span>}
                        </>
                      )}
                    </p>
                  </div>
                  <div className='col-3'>
                    <button className='btn border border-warning' onClick={() => { addItem(p); showToast(); }}>
                      <FaCartPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
