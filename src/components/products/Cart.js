import React from 'react'
import { useCart } from 'react-use-cart'
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import emptybag from '../../assets/empty-wish.gif';
import CartAuthContext from '../../context/cartContext/cartAuthContext';


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart()
     
      const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

      const { checkoutHandler } = CartAuthContext();


      if (isEmpty) return <>
      <p className='fs-1 text-center py-3'>OOPs ..!</p>
      <div className='d-flex justify-content-center'><img src={emptybag} alt='' /></div>
      <Link to='/' className='fs-4 nav-link text-center py-2'>Explore now..</Link>
      </>
  return (
    <>
        <section className='product-cart-wrapper'>
            <div className='container-xxl d-flex justify-content-center'>
                <div className='row container-sm justify-content-center'>
                    <div className='col-8 cart-list'>
                        <div className='cart-header py-3 my-3 px-2 d-flex justify-content-between border border-secondary rounded'>
                            <p className='fs-6 fw-bold'>My cart ({totalUniqueItems} items)</p>
                            <p>Shipping to : 121001 </p>
                        </div>
                        <div className='cart-list'>
                            {items.map(item => (
                                <div className='col border border-secondary pt-2 my-3 px-2 rounded' key={item.id}>
                                    <div className='row py-3'>
                                        <div className='col d-flex gap-0'>
                                            <div className='row'> 
                                                <div className='col'>
                                                    <img src={item.image} alt='' className='img-fluid' />
                                                    <div className='cart-counter d-flex align-items-center py-2'>
                                                        <button className='btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><FaPlusCircle size={25} /></button>
                                                        <input type='text' className='form-control fw-bold text-center' value={item.quantity} readOnly />
                                                        <button className='btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><FaMinusCircle size={25} /></button>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <h1 className='fs-5 fw-bold py-2'>{item.title}</h1>
                                                    <p className='text-secondary'>{item.product_code}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6 d-flex flex-column align-items-end'>
                                            <p className='text-end fs-5 fw-bold pe-2'>{item.currency} {item.price}</p>
                                            <span className='fw-bold text-success'>Free Shipping</span>
                                        </div>
                                    </div>
                                    <div className='row px-1'>
                                        <div className='col border border-secondary p-2'>
                                            <Link onClick={() => removeItem(item.id)} className='nav-link fs-5 fw-bold text-secondary text-center'>Remove</Link>
                                        </div>
                                        <div className='col border border-secondary p-2'>
                                            <Link className='nav-link fs-5 fw-bold text-secondary text-center'>Move to Wishlist</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='cart-checkout border border-secondary py-3 my-3 px-2'>
                            <div className='col py-3 my-3 px-2'>
                                <button className='btn btn-danger text-light w-100' onClick={checkoutHandler}>CHECKOUT</button>
                            </div>
                            <div className='col'>
                                <div className='coupone-box'>
                                    <form className='d-flex mt-2'>
                                        <input type="search" className='form-control rounded-0' placeholder="Apply coupon" aria-label="Search"/>
                                        <button className="btn btn-outline-success rounded-0" type="submit">Apply</button>
                                    </form>
                                </div>
                            </div>
                            <div className='col py-3'>
                                <p className='fs-5 fw-bold'>Price Details</p>
                                <table className='table'>
                                    <tr >
                                        <th scope='col'>Price ({totalUniqueItems} items)</th>
                                        <td>&#8377; {subtotal}</td>
                                    </tr>
                                    <tr>
                                        <th scope='col'>Discount</th>
                                        <td className='text-center pe-2'>0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Cart