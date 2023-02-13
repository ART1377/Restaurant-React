import React, { useState, useEffect } from 'react';
import css from './Discount.module.css';
import SectionTitle from './SectionTitle';
import { TbDiscount2 } from 'react-icons/tb';
import { foods } from '../data/FoodData';
import FoodCard from './FoodCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Discount = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  let size =
    width < 574
      ? 'sm'
      : width < 744
      ? 'md'
      : width < 992
      ? 'lg'
      : width < 1200
      ? 'xl'
      : 'xxl';
  let number =
    size === 'sm'
      ? 1.5
      : size === 'md'
      ? 2
      : size === 'lg'
      ? 3
      : size === 'xl'
      ? 4
      : 5;

  const foodDiscount = foods.filter((food) => food.discount !== '');

  return (
    <>
      <SectionTitle title={'تخفیفات ویژه'} />
      <div className={`container-fluid px-4 ${css['']}`}>
        <div className={`row px-3 pt-2 pb-5 ${css['discount-row']}`}>
          <div
            className={`pt-3 mt-sm-5 mb-4 mb-sm-1 ${css['discount-left']}`}
          >
            <h2 className={`pb-2 ${css['title']}`}>تخفیفات ویژه شب یلدا </h2>
            <p className={`pt-2 ${css['text']}`}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه که لازم
              است
            </p>
            <TbDiscount2 className={`${css[`icon`]}`} />
            <div className={`${css['circle']} ${css['circle1']}`}></div>
            <div className={`${css['circle']} ${css['circle2']}`}></div>
          </div>
          <div className={`${css['discount-right']}`}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={18}
              slidesPerView={number}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {foodDiscount.map((food) => {
                return (
                  <SwiperSlide key={food.id}>
                    <FoodCard list={food} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
