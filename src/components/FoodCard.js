import React from 'react';
import css from './FoodCard.module.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addAction } from '../redux/cartSlice';

const FoodCard = ({ list }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={`card text-end ${css['card']}`}>
        <img
          className={`card-img-top ${css['card-img']}`}
          src={list.image}
          alt="Title"
        />
        <div className={`card-body px-1 px-sm-2 mx-0 py-0 ${css['card-body']}`}>
          <div className="d-flex justify-content-between">
            <h5 className={`card-title ${css['title']}`}>{list.name}</h5>
            <FaHeart className={`${css['heart']}`} />
          </div>
          <p className={`card-text ${css['text']}`}>
            فیله گوساله - گوجه - خیارشور - قارچ سس مخصوص - کاهو
          </p>
          <div className="d-flex justify-content-between align-items-baseline">
            <p className={`${css['price-text']}`}>قیمت : </p>
            <small className={`${css['discount']}`}>{list.discount}</small>
            <p className={`fw-bold ${css['price']}`}>{list.price}</p>
          </div>
        </div>
        <div
          onClick={() => dispatch(addAction(list))}
          className={css['logo-container']}
        >
          <FaShoppingCart />
        </div>
      </div>
    </>
  );
};

export default FoodCard;
