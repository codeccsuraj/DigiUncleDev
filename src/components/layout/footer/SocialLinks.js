import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa6";
import NewsLetter from './NewsLetter';

const SocialLinks = () => {
  return (
    <>
        <div className='col'>
            <div className='mb-2'>
                <h4 className='text-secondary'>Be with us</h4>
            </div>
            <div className='mb-2 d-flex gap-3 py-3'>
                <FaFacebookF size={35}/>
                <FaTwitter size={35} />
                <FaPinterestP size={35}/>
            </div>
                <NewsLetter />
        </div>
    </>
  )
}

export default SocialLinks