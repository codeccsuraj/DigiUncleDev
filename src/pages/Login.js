import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import hero_img from '../assets/undraw_secure_login_pdn4.svg';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import Signup from './Signup';

const Login = () => {
  const [signup, setSignup] = useState(true);
  const [loginCredential, setLoginCredential] = useState({
    email: '',
    password: '',
  });
  const [title, setTitle] = useState('Login'); // State variable for the title
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      await authContext.loginHandler(loginCredential);
      toast.success("login successful")
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error.message);
      toast.error("not a user")
      // You may want to show an error message to the user using toast or other means
    }
  };

  const handleChange = () => {
    setSignup(!signup); // Toggle signup state
    setTitle(signup ? 'Signup' : 'Login'); // Update the title when the button is clicked
  };

  return (
    <>
      <section className='login-wrapper'>
        <div className='container-fluid py-4'>
          <div className='row justify-content-center'>
            <div className='col-5 d-flex justify-content-center'>
              <img src={hero_img} alt='' width={400} />
            </div>
            <div className='col-5'> 
            <h2 className='py-3 h4'>{title}</h2>
            <div className='pb-3'>
            {signup ? (
                  <span>
                    not a user ?{' '}
                    <button className='btn text-primary' onClick={handleChange}>
                      Register your account
                    </button>
                  </span>
                ) : (
                  // Render a back button to switch back to login
                  <span>
                    Already a user ?{' '}
                    <button className='btn text-primary' onClick={handleChange}>
                      Back to login
                    </button>
                  </span>
                )}
            </div>
              {signup ? (
                <form onSubmit={handleLogin}>
                <div className='form-group mb-2 p-2 border border-secondary-subtle rounded'>
                  <label className='h6 ms-1' htmlFor='email'>Email</label>
                  <input type='email' 
                    className='form-control p-2' 
                    placeholder='Enter your username..'
                    value={loginCredential.email}
                    onChange={(e) =>
                      setLoginCredential({
                        ...loginCredential,
                        email: e.target.value,
                      })} />
                </div>
                <div className='form-group mb-2 p-2 border border-secondary-subtle rounded'>
                  <label className='h6 ms-1' htmlFor='email'>Password</label>
                  <input type='password' 
                    className='form-control p-2' 
                    placeholder='Enter your password'
                    value={loginCredential.password}
                    onChange={(e) =>
                      setLoginCredential({
                        ...loginCredential,
                        password: e.target.value,
                      })}
                    />
                </div>
                <div className='col form-group p-2 border border-secondary-subtle rounded'>
                  <button type='submit' className='btn btn-primary w-100 text-dark fw-bold'>Login</button>
                  <p className='text-center py-4'>or login with</p>
                  <p className='d-flex justify-content-center'>
                    <GoogleButton
                      className='g-btn'
                      type='dark'
                    />
                  </p>
                </div>
            </form>
              ) : (
                <Signup />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
