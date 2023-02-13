import React from 'react';
import '../App.css';
import Category from '../components/Category';
import Discount from '../components/Discount';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Comments from '../components/Comments';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Discount />
      <Category />
      <Products />
      <Comments />
      <Features />
    </>
  );
};

export default HomePage;
