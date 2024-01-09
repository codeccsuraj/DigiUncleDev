import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../backend/db/Products';

const Categories = () => {
  return (
    <section className='category-wrapper'>
      <div className='container-xxl'>
        <div className='col py-3'>
          <h2 className='fs-2 text-center fw-bold'>Shop by Categories</h2>
          <p className='text-center h5 py-3'>
            <Link to='/all-categories' className='nav-link text-primary'>
              See all
            </Link>
          </p>
        </div>
        <div className='row justify-content-center pb-4'>
          {categories.slice(0, 3).map((item) => (
            <div key={item.id} className='col-lg'>
              <div className='category-card position-relative rounded overflow-hidden'>
                <img src={item.image} alt='' className='img-fluid' />
                <Link className='nav-link'><h2 className='category-title position-absolute'>{item.categoryName}</h2></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
