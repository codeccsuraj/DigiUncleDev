import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/shop/Shop';
import AuthContextProvider from './context/authContext/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './pages/productdetail/ProductDetail';
import { products } from './backend/db/Products';
import { CartProvider } from 'react-use-cart';
import Cart from './components/products/Cart';

const App = () => {
  const [loading, setLoading] = useState(true); // Initialize loading with true
  const spinner = document.getElementById('spinner');

  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = 'none';
        setLoading(false);
      }, 2200);
    }
  }, [spinner]);

  return (
    loading ? null : ( // Return null while loading is true
      <CartProvider id="id">
        <AuthContextProvider>
          <ToastContainer autoClose={3} />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />
                {/* Pass the products prop here */}
                <Route path='products/:id' element={<ProductDetails products={products} />} />
                <Route path='shop/:category' element={<Shop products={products} />} />
                <Route path='shop' element={<Shop products={products} />} />
                <Route path='cart' element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </CartProvider>
    )
  );
};

export default App;
