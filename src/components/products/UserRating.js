import React, { useState } from 'react';
import ReactStars from 'react-rating-star-with-type';

const UserRating = ({ initialRating }) => {
  const [star, setStar] = useState(initialRating || 5);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };

  return (
    <>
      <ReactStars
        onChange={onChange}
        value={star}
        edit={true}
        activeColor={["#FFCE00"]}
      />
    </>
  );
};

export default UserRating;
