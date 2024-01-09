import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '../../../backend/db/Products';

const CategoryDrop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterProducts = selectedCategory
    ? products.filter((product) => product.categoryName === selectedCategory)
    : products;

  return (
    <div className='category-dropdown'>
      <nav className='navbar'>
        <ul className='nav flex-column'>
            <li><Link to='/shop' className='nav-link'>See all</Link></li>
          {categories.map((category) => (
            <li key={category.id} className='nav-item'>
              <Link
                to={`/shop/${category.categoryName}`}
                className='nav-link'
                onClick={() => handleCategoryClick(category.categoryName)}
              >
                {category.categoryName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryDrop;
