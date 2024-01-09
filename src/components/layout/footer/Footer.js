import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <>
      <footer className='container-xxl d-flex justify-content-center border-top border-dark'>
        <div className='container-sm row py-4'>
          <div className='col-2'>
            <ul className='nav flex-column'>
              <li className='nav-item position-relative bar'>
                <h6 className='ms-3'>Digiuncle Map</h6>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>About us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Contact us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Sale in Digiuncle</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Career</Link>
              </li>
            </ul>
          </div>
          <div className='col-2'>
            <ul className='nav flex-column'>
              <li className='nav-item position-relative bar'>
                <h6 className='ms-3'>Customer Services</h6>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Common questions</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Return policies</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Privacy</Link>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <ul className='nav flex-column'>
              <li className='nav-item position-relative bar'>
                <h6 className='ms-3'>Shopping Guide</h6>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>How to place an order?</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Order submission procedure</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fs-7 fw-bold text-secondary'>Payment methods</Link>
              </li>
            </ul>
          </div>
          <SocialLinks />
        </div>
      </footer>
    </>
  )
}

export default Footer