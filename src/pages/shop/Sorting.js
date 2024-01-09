import React, { useState, useEffect, useRef } from 'react';
import { FaSortAlphaDownAlt } from 'react-icons/fa';

const Sorting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const options = ['Sort by price', 'Sort by popularity', 'Sort by newest']; // Add your desired options

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="sorting-container" ref={dropdownRef}>
      <div className="sorting-header" onClick={toggleDropdown}>
        <div className='fs-6 fw-bold ms-3'>Sorting {selectedOption && `: ${selectedOption}`}</div>
        <FaSortAlphaDownAlt size={25} />
      </div>
      {isOpen && (
        <div className="dropdown">
          {options.map((option, index) => (
            <div key={index} onClick={() => selectOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sorting;
