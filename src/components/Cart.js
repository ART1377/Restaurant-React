import React from 'react';
import css from '../components/Cart.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {

  const state=useSelector(state=>state.cartState)

  return (
    <Link to="/shoppingCart">
      <div className={css['logo-container']}>
        <FaShoppingCart />
        <div className={css['logo-number']}>{state.itemsCounter}</div>
      </div>
    </Link>
  );
};

export default Cart;
