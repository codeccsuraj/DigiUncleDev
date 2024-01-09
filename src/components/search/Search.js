import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { products } from '../../backend/db/Products';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    if (inputValue) {
      const filteredResult = products.filter((item) =>
        item.title
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(inputValue.toLowerCase())
      );

      setSearchResult(filteredResult);
    } else {
      setSearchResult([]);
    }
  };

  const handleResultClick = () => {
    // Reset the search results when a result is clicked
    setSearchResult([]);
    // Optionally, you can also clear the search term and input value
    setSearchTerm('');
  };

  return (
    <>
      <div className='search-bar position-relative'>
        <input
          type='search'
          className='form-control bg-primary-subtle'
          onChange={handleChange}
        />
        <span className='search-icon'>
          <FaSearch />
        </span>

        {searchTerm && (
          <div className='col search-result-box w-100 bg-secondary-subtle position-absolute'>
            <ul className='nav flex-column'>
              {searchResult.map((item) => (
                <Link key={item.id} to={`/products/${item.id}`} onClick={handleResultClick} className='h6 p-2 nav-item border-bottom border-danger'>
                  <li className='nav-link text-dark'>
                    <div className='row'>
                      <div className='col-2 search-filter-image'>
                        <img src={item.image} alt='' className='img-fluid' />
                      </div>
                      <div className='col'>
                      {item.title}
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
