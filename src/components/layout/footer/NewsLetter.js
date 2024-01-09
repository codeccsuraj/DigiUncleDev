import React from 'react'

const NewsLetter = () => {
  return (
    <>
        <div className='form-group'>
            <label className='h6'>Stay up to date with the latest discounts by emailing us</label>
            <form className='d-flex mt-2'>
                <input type="search" className='form-control rounded-0' placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success rounded-0" type="submit">Subscribe</button>
            </form>
        </div>
    </>
  )
}

export default NewsLetter