import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/DigiUncle (1).png'
import Search from '../../search/Search'
import { FaShoppingCart, FaHeart, FaChevronDown } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import UserDropDown from './UserDropDown';
import CategoryDrop from './CategoryDrop';
import { useCart } from 'react-use-cart';

const Navbar = () => {
    const { totalUniqueItems } = useCart();
  return (
    <>
        <nav className='row m-0 p-0 sticky-top'>
            <div className='container-xxl'>
                <div className='row bg-light align-items-center'>
                    <div className='col-lg-3 d-flex align-items-center ms-3'>
                        <Link to='/'><img src={Logo} width={130} alt='' /></Link>
                    </div>
                    <div className='col-lg-5 '>
                        <Search />
                    </div>
                    <div className='col-lg d-flex align-items-center justify-content-evenly gap-1'>
                        <div className='user-location d-flex align-items-center justify-content-center gap-1'>
                            <Link>
                                <FaLocationDot size={25}/>
                            </Link>
                        </div>
                        <div className='user-location d-flex align-items-center justify-content-center gap-1'>
                            <Link to="/cart" className='position-relative'>
                                <FaShoppingCart size={25}/>
                                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{totalUniqueItems}</span>
                            </Link>
                        </div>
                        <div className='user-location d-flex align-items-center justify-content-center gap-1'>
                            <Link>
                                <FaHeart size={25}/>
                            </Link>
                        </div>
                        <div className='user-location d-flex align-items-center justify-content-center gap-1'>
                            <UserDropDown />    
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav className='bg-primary'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-10'>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <Link className='nav-link category-drop-btn text-light fw-bold d-flex align-items-center gap-2 position-relative'>
                                    <MdGridOn /> Categories<FaChevronDown />
                                    <div className='category-drop-list position-absolute'><CategoryDrop /></div>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-light fw-bold d-flex align-items-center gap-2 border-start'>Compare Products</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-light fw-bold d-flex align-items-center gap-2 border-start'>Return Policy</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/shop' className='nav-link text-light fw-bold d-flex align-items-center gap-2 border-start'>Shop</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-light fw-bold d-flex align-items-center gap-2 border-start'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar