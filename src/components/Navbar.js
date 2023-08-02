import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cart from './Cart';
import logoWhite from '../assets/image/logo-white.jpg';
import logoRed from '../assets/image/logo-red.jpg';
import {
  FaHome,
  FaChair,
  FaPhone,
  FaInfoCircle,
  FaQuestionCircle,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid px-lg-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/homePage">
            <img src={logoRed} alt="logo" />
          </Link>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header p-2">
              <Link to="/homePage">
                <img src={logoWhite} alt="logo" />
              </Link>

              <AiOutlineClose
                className="close-offcanvas"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="line d-lg-none mx-auto my-3"></div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 pe-3">
                <li className="nav-item h5">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'activeNav nav-link' : 'nav-link'
                    }
                    to="/homePage"
                    
                  >
                    <FaHome className="me-2" />
                    صفحه اصلی
                  </NavLink>
                </li>
                <li className="nav-item h5">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'activeNav nav-link' : 'nav-link'
                    }
                    to="/reservation"
                  >
                    <FaChair className="me-2" />
                    رزرو
                  </NavLink>
                </li>
                <li className="nav-item h5">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'activeNav nav-link' : 'nav-link'
                    }
                    to="/aboutUs"
                  >
                    <FaInfoCircle className="me-2" />
                    درباره ما
                  </NavLink>
                </li>
                <li className="nav-item h5">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'activeNav nav-link' : 'nav-link'
                    }
                    to="/contactUs"
                  >
                    <FaPhone className="me-2" />
                    تماس با ما
                  </NavLink>
                </li>
                <li className="nav-item h5">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'activeNav nav-link' : 'nav-link'
                    }
                    to="/commonQuestion"
                  >
                    <FaQuestionCircle className="me-2" />
                    سوالات متداول
                  </NavLink>
                </li>
              </ul>
              <div className="line d-lg-none mx-auto my-3"></div>
              <Link className="d-lg-none ps-5 mt-4" to="/Register">
                <Button name={'btn-white'}>ورود / ثبت نام</Button>
              </Link>
            </div>
          </div>
          <Cart />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
