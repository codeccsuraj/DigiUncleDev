import React from 'react'
import { brands } from '../../backend/db/Products'

const ShopByBrand = () => {
  return (
    <>
        <section className='brand-wrapper'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                        <p className='py-3 position-relative'><h1 className='fs-1 fw-bold bar text-danger'>Shop with Brands</h1></p>
                    </div>
                    <div className='row justify-content-center py-5'>
                        {brands.slice(0, 4).map((brand) => (
                            <div className='col-lg-5 mb-3 d-flex justify-content-center'>
                                <img src={brand.brandImg} className='brand-img-thumbnail' alt='' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShopByBrand