import React from 'react';
import css from './Feature.module.css';

const Feature = ({ title, icon }) => {
  return (
    <>
      <div className={`text-center px-2 py-4 m-2 ${css['card']}`}>
        <div
          className={`d-flex justify-content-center align-items-center mx-auto my-3 ${css['icon']}`}
        >
          {icon}
        </div>
        <h3 className={`pb-1 ${css['title']}`}>{title}</h3>
        <p className={` ${css['text']}`}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
    </>
  );
};

export default Feature;
