// ProductDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserRating from '../../components/products/UserRating';
import { FaShareAlt, FaHeart } from "react-icons/fa";


const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10); // Parse the id to an integer
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
   <>
    <section className='product-detail-wrapper'>
      <div className='container-xxl'>
        <div className='row justify-content-center'>
          <div className='col-4 position-relative'>
            <div className='prod-img p-2'>
              <img src={product.image} alt='' className='img-fluid' />
            </div>
            <div className='prod-action p-2 d-flex flex-column gap-2 position-absolute'>
              <Link className='nav-link'>
                <FaShareAlt size={30} />
              </Link>
              <Link>
                <FaHeart size={30 } />
              </Link>
            </div>
          </div>
          <div className='col-6'>
            <div className='prod-info'>
              <h2 className='text-secondary py-3 display-6'>{product.title}</h2>
              <p className='py-2'>{product.description}</p>
              <p className='hr'></p>
              <div className='prod-ratings py-2'>
                <UserRating />
              </div>
              <div className='product-detail'>
                <h3 className='text-secondary py-2'>Product details :</h3>
                <table className='table'>
                  <tbody>
                    <tr>
                      <th scope='col'>Material :</th>
                    </tr>
                    <tr>
                      <th scope='col'>Dimension :</th>
                    </tr>
                    <tr>
                      <th scope='col'>weight :</th>
                    </tr>
                    <tr>
                      <th scope='col'>color :</th>
                    </tr>
                    <tr>
                      <th scope='col'>Manufacture :</th>
                      <td>{product.brand}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='prod-price py-3 row justify-content-between'>
              <div className='col'>
                <p className='fs-3'>{product.currency} {product.price}</p>
              </div> 
              <div className='col'>
                <button className='btn btn-warning fs-5 rounded-0 text-light me-3'>Buy now</button>
                <button className='btn btn-danger fs-5 rounded-0 text-light'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default ProductDetails;
