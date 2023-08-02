import React from "react";
import css from "../components/Footer.module.css";
import logoWhite from "../assets/image/logo-white.jpg";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChair,
  FaPhone,
  FaInfoCircle,
  FaQuestionCircle,
  FaGithub,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {

  return (
    <>
      <div className={`container-fluid p-0 ${css["container"]}`}>

        <div className={`${css["second-container"]}`}>
          <div className={`row overflow-hidden m-0 ${css["circle-parent"]}`}>
            <div className={`px-0 ${css["circle1"]}`}></div>
            <div className={`px-0 ${css["circle2"]}`}></div>
            <div
              className={`px-0 d-flex justify-content-center align-items-center ${css["circle3"]}`}
            >
              <Link
                to="/homePage"
                className="d-flex justify-content-center align-items-center"
              >
                <img src={logoWhite} alt="" className={css["footer-logo"]} />
              </Link>
            </div>
            <div className={`px-0 ${css["circle4"]}`}></div>
            <div className={`px-0 ${css["circle5"]}`}>
              <svg width={55} height={54} viewBox="0 0 55 54">
                <path
                  opacity="0.3"
                  d="M55 26.7041C55 41.3396 42.6878 53.2041 27.5 53.2041C12.3122 53.2041 0 41.3396 0 26.7041C0 12.0686 12.3122 0.204102 27.5 0.204102C42.6878 0.204102 55 12.0686 55 26.7041ZM6.95948 26.7041C6.95948 37.6358 16.1558 46.4977 27.5 46.4977C38.8442 46.4977 48.0405 37.6358 48.0405 26.7041C48.0405 15.7724 38.8442 6.91051 27.5 6.91051C16.1558 6.91051 6.95948 15.7724 6.95948 26.7041Z"
                  fill="#FF7373"
                />
              </svg>
            </div>

            <div
              className={`d-flex mx-auto flex-column ${css["dot-container"]}`}
            >
              <div className={`d-flex mx-auto ${css["dot-groupe"]}`}>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
              </div>
              <div className={`d-flex mx-auto ${css["dot-groupe"]}`}>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
              </div>
            </div>
            <div
              className={`d-flex mx-auto flex-column ${css["dot-container2"]}`}
            >
              <div className={`d-flex mx-auto ${css["dot-groupe"]}`}>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
              </div>
              <div className={`d-flex mx-auto ${css["dot-groupe"]}`}>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
                <div className={`${css["dot"]}`}></div>
              </div>
            </div>

            <div className={`text-center ${css["footer-right"]}`}>
              <div className={`mx-auto w-100 ${css["square-container"]}`}>
                <div className={`px-0 ${css["square1"]}`}></div>
                <div className={`px-0 ${css["square2"]}`}></div>
              </div>
              <h6 className="w-100 pt-3">لبخند</h6>
              <div className={`rounded-pill ${css["social-container"]}`}>
                <Link to={`https://github.com/ART1377`} replace={true}>
                  <FaGithub />
                </Link>
                <Link to={`https://t.me/ART_1377`} replace={true}>
                  <FaTelegramPlane />
                </Link>
                <a href="mailto:insertemailhere@xyz.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className={`px-0 ${css["footer-navbar"]}`}>
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link to="/homePage">
                    <FaHome className="me-2" />
                    صفحه اصلی
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reservation">
                    <FaChair className="me-2" />
                    رزرو
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutUs">
                    <FaInfoCircle className="me-2" />
                    درباره ما
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactUs">
                    <FaPhone className="me-2" />
                    تماس با ما
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/commonQuestion">
                    <FaQuestionCircle className="me-2" />
                    سوالات متداول
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
