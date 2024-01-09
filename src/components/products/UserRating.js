import React , { useState }from 'react'
import ReactStars from 'react-rating-star-with-type'; 


const UserRating = () => {
    const [star, setStar] = useState(5);
    const onChange = (nextValue) => {
        setStar(nextValue);
    }
    console.log(star)
  return (
    <>
        <ReactStars
            onChange={onChange}
            value={3.2}
            edit={true}
            activeColor={["#FFCE00"]}
        />
    </>
  )
}

export default UserRating