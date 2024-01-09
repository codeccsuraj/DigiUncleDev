import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sorting from './Sorting';
import UserRating from '../../components/products/UserRating';

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
        {/* <div className='col-3'></div> */}
        <div className='col-lg-10'>
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
                  <div className='row'>
                    <div className='col-4'>
                      <img src={product.image} className='img-fluid' />
                    </div>
                    <div className='col-lg'>
                      <h2 className='fs-6'>{product.title}</h2>
                      <p className='fs-7'>{product.description}</p>
                      <UserRating />
                      <div className='product-price'>
                        {product.discounted ? (
                          <p><del className='fs-7'>{product.price}</del> <span className='fs-5'>{product.discounted}</span></p>
                        ) : (
                          <p>{product.price}</p>
                        )}
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
