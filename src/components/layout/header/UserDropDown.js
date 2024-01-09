import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { auth } from '../../../backend/utils/Firebase_auth';
import { IoClose } from 'react-icons/io5';
import Swal from 'sweetalert2';
import banner from '../../../assets/favicon.jpeg';

const UserDropDown = () => {
  const [authUser, setAuthUser] = useState(null);
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    return () => unsubscribe();
  }, []);

  const showLogoutConfirmation = () => {
    Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        userSignOut();
      }
    });
  };

  const userSignOut = () => {
    logoutHandler();
  };

  return (
    <>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <FaRegUserCircle size={25} />
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            Profile
          </h5>
          <button
            type="button"
            className="btn-close btn-dark text-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <IoClose size={20} />
          </button>
        </div>
        <div className="offcanvas-body">
          {authUser ? (
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="btn w-100 text-start h6 border m-0 rounded-0">Edit profile</Link>
              </li>
              <li className="nav-item">
                <Link className="btn w-100 text-start h6 border m-0 rounded-0">Oreders</Link>
              </li>
              <li className="nav-item">
                <button onClick={showLogoutConfirmation} className="btn w-100 text-start h6 border m-0 rounded-0">
                  Sign out
                </button>
              </li>
            </ul>
          ) : (
            <>
              <div className="col d-flex justify-content-center">
                <div className="banner-image">
                  <img src={banner} width={150} height={150} alt="" className="rounded-circle p-3" />
                </div>
              </div>
              <ul className="nav flex-column">
                <li className="nav-item text-center py-3">
                  <Link to="/login" className="btn btn-primary w-75">
                    Login
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDropDown;
