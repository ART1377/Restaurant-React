import React from 'react';
import css from './Hero.module.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import HeroIcons from './HeroIcons';
import HeroImageMd from '../assets/image/HeroImageMd.png';
import {
  FaHamburger,
  FaWineBottle,
  FaPizzaSlice,
  FaMugHot,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className={`row px-lg-5 px-sm-3 ${css['hero-row']}`}>
          <div className="col-sm-6 pt-5 hero-content">
            <div className="hero-header">
              <h1 className={`${css['hero-title']}`}>
                بهترین فست فود های تهران را با
                <span className={`display-5 fw-bolder ${css['smile-text']}`}>
                  لبخند
                </span>
                تجربه کنید
              </h1>
            </div>
            <p className={`pt-3 w-75 ${css['hero-text']}`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه که لازم
              است
            </p>
            <div className="d-flex py-3 pt-lg-5">
              <Link to="/Register/Login">
                <Button name={'btn-main-medium'}>ورود</Button>
              </Link>
              <Link to="/Register/SignUp">
                <Button name={'btn-main-medium-outline'}>ثبت نام</Button>
              </Link>
            </div>
            <div className={`d-flex py-4 ${css['hero-icons']}`}>
              <HeroIcons>
                <FaHamburger />
              </HeroIcons>
              <HeroIcons>
                <FaPizzaSlice />
              </HeroIcons>
              <HeroIcons>
                <FaWineBottle />
              </HeroIcons>
              <HeroIcons>
                <FaMugHot />
              </HeroIcons>
            </div>
          </div>

          <div className="col-sm-6 ps-0">
            <img
              src={HeroImageMd}
              alt="HeroImage"
              className={`d-none d-sm-block img-fluid ${css['hero-image']}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
