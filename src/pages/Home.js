import React from 'react'
import Banner from '../components/banner/Banner'
import SingleProduct from '../components/products/SingleProduct'
import Categories from '../components/banner/Categories'
import FeatureService from '../features/FeatureService'
import ShopByBrand from './shop/ShopByBrand'

const Home = () => {
  return (
    <>
    <Banner />
    <SingleProduct />
    <Categories />
    <ShopByBrand />
    <FeatureService />
    </>
  )
}

export default Home