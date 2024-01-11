import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sorting from './Sorting';
import UserRating from '../../components/products/UserRating';
import Sidebar from './Sidebar';

const Shop = ({ products }) => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');

  useEffect(() => {
    // Filter products based on the selected category
    const updatedProducts = category
      ? products.filter((product) => product.categoryName === category)
      : products;

    setFilteredProducts(updatedProducts);
    setSelectedCategoryTitle(category); // Update the selected category title
  }, [category, products]);

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-lg'>
          <nav className='navbar'>
            <div className='container-fluid'>
              <div className='col'>
                <p className='fs-3 fw-bold text-dark'>{selectedCategoryTitle}</p>
              </div>
              <ul className='nav ms-auto'>
                <li>
                  <Sorting />
                </li>
              </ul>
            </div>
          </nav>
          <div className='row py-4 '>
              {filteredProducts.map((product) => (
               <div key={product.id} className='col-4 mb-3 p-2 product-border-hover'>
                  <div className='row justify-content-center align-items-center'>
                    <div className='col-4'>
                      <Link to={`/products/${product.id}`}><img src={product.image} alt='' className='img-fluid' /></Link>
                    </div>
                    <div className='col-lg'>
                      <Link to={`/products/${product.id}`}><h2 className='fs-5 fw-bold'>{product.title}</h2></Link>
                      <p className='fs-7'>{product.description.split(' ').slice(0, 7).join(' ')}...</p>
                      <UserRating initialRating={product.rating} />
                      <div className='product-price d-flex justify-content-between align-items-center py-2'>
                        {product.discounted ? (
                          <p><del className='fs-7'>{product.currency} {product.price}</del> <span className='fs-5'>{product.discounted}</span></p>
                        ) : (
                          <p>{product.currency} {product.price}</p>
                        )}
                          <button className='btn btn-warning rounded-0'>Buy</button>
                      </div>
                    </div>
                  </div>
                </div> 
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
