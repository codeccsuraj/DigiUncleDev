import React from 'react'
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <>
        <div className='search-bar position-relative'>
            <input type='search' className='form-control bg-primary-subtle'/>
            <span className='search-icon'>
                <FaSearch /> 
            </span>
        </div>
    </>
  )
}

export default Search