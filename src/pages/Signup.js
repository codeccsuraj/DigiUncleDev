import React, { useContext, useState } from 'react';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';



const Signup = () => {
  const [signupCredential, setSignupCredential] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility


  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupCredential.password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
      return;
    }

    try {
      await authContext.signupHandler(signupCredential);
      toast.success("Signup successful");
      navigate('/');
    } catch (error) {
      console.error('Error during signup:', error.message);
      toast.error("Error during signup");
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <div className='form-group mb-2 p-2 border border-secondary-subtle rounded'>
          <label className='h6 ms-1' htmlFor='username'>
            Full name
          </label>
          <input
            type='text'
            id='username'
            className='form-control p-2'
            placeholder='Enter your full name..'
            value={signupCredential.username}
            onChange={(e) => setSignupCredential({ ...signupCredential, username: e.target.value })}
          />
        </div>
        <div className='form-group mb-2 p-2 border border-secondary-subtle rounded'>
          <label className='h6 ms-1' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='form-control p-2'
            placeholder='Enter your email..'
            value={signupCredential.email}
            onChange={(e) => setSignupCredential({ ...signupCredential, email: e.target.value })}
            required
          />
        </div>
        <div className='form-group mb-2 p-2 border border-secondary-subtle rounded position-relative'>
          <label className='h6 ms-1' htmlFor='password'>
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            className='form-control p-2'
            placeholder='Enter your password'
            value={signupCredential.password}
            onChange={(e) => setSignupCredential({ ...signupCredential, password: e.target.value })}
            required
          />
          <span
            className='eye-btn'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <div className='form-group mb-2 p-2 border border-secondary-subtle rounded'>
          <label className='h6 ms-1' htmlFor='password'>
            Confirm Password
          </label>
          <input
            type='password'
            id='password'
            className='form-control p-2'
            placeholder='confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className='col form-group p-2 border border-secondary-subtle rounded'>
          <button type='submit' className='btn btn-primary w-100 text-dark fw-bold'>
            Register
          </button>
          <p className='text-center py-4'>or signup with</p>
          <p className='d-flex justify-content-center'>
            <GoogleButton className='g-btn' />
          </p>
        </div>
      </form>
    </>
  );
};

export default Signup;
