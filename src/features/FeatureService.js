import React from 'react'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer, BiSupport } from "react-icons/bi";
const FeatureService = () => {
  return (
    <section className='feature-wrapper py-5'>
        <div className='row justify-content-center'>
            <div className='col-10'>
                <div className='row justify-content-evenly'>
                    <div className='col-lg-3 d-flex flex-column align-items-center border-end'>
                        <AiOutlineSafetyCertificate size={50} color='white'/>
                        <p className='fs-5 text-center py-2 fw-bold text-light'>100% Safe & Secure Payments</p>
                    </div>
                    <div className='col-lg-3 d-flex flex-column align-items-center border-end'>
                        <CiDeliveryTruck size={50} color='white' />
                        <p className='fs-5 text-center py-2 fw-bold text-light'>Safe and Fast Delivery</p>
                    </div>
                    <div className='col-lg-3 d-flex flex-column align-items-center border-end'>
                        <BiSolidOffer size={50} color='white' />
                        <p className='fs-5 text-center py-2 fw-bold text-light'>Exciting Offers & Exciting Cashback</p>
                    </div>
                    <div className='col-lg-3 d-flex flex-column align-items-center'>
                        <BiSupport size={50} color='white' />
                        <p className='fs-5 text-center py-2 fw-bold text-light'>24/7 Customer Support available</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureService