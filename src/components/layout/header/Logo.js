import React from 'react'
import logo from '../../../assets/logo-b.png'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <Link to='/'>
        <img src={logo} alt='' className='ms-3 p-0'  width={50} height={50}></img>
    </Link>
  )
}

export default Logo