import React from 'react'

const Sidebar = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='price-slider py-2'>
                <h2 className='fs-4'>Select price range</h2>
            </div>
            <div className='category-box'>
                <h2 className='fs-4 py-2'>Categories</h2>
                <div className="form-check py-2 mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mt-1 ms-1 fw-bpld" htmlFor="flexCheckDefault">
                        Category
                    </label>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar