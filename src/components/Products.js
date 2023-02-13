import React, { useState } from 'react';
import Button from './Button';
import Svg from '../svg/Svg';
import css from './Products.module.css';
import { foods } from '../data/FoodData';
import FoodCard from '../components/FoodCard';
import SectionTitle from './SectionTitle';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Products = () => {

  const sortFoods = (foods, sortParams) => {
    return foods.sort((foodA, foodB) => {
      if (sortParams === 'asc') {
        return foodA.price > foodB.price ? 1 : -1;
      } 
      if (sortParams === 'des') {
        return foodA.price < foodB.price ? 1 : -1;
      }
    });
  };

  const [thisCategory, setThisCategory] = useState('پیتزا');
  const changeCategory = (event) => {
    setThisCategory(event.target.innerText);
  };
  const category = foods.filter((food) => food.category === thisCategory);

  const navigate = useNavigate();
  const sortHandler = (event) => {
    event.target.innerText === 'ارزان ترین'
      ? navigate('?sort=asc')
      : navigate('?sort=des');
  };
  const [searchParams] = useSearchParams();
  const sortParams = searchParams.get('sort');

  return (
    <>
      <SectionTitle title={'تمام محصولات'} />
      <div className={`container-fluid py-5 ${css['container']}`}>
        <div className="row d-flex justify-content-end">
          <div
            className={`me-2 me-sm-4 mb-4 px-2 px-sm-5 d-flex align-items-center ${css['sort-container']}`}
          >
            <h5 className={`px-1 px-sm-3 ${css['sort']}`}>ترتیب بر اساس : </h5>
            <h4
              onClick={sortHandler}
              className={`mx-1 mx-sm-3 ${sortParams==='des'&&css['active']} ${css['expensive']}`}
            >
              گران ترین
            </h4>
            <h4 onClick={sortHandler} className={` ${sortParams==='asc'&&css['active']} ${css['cheap']}`}>
              ارزان ترین
            </h4>
          </div>
        </div>
        <div className={`row p-2 p-sm-4 ${css['']}`}>
          <div className={`col-5 col-sm-3 ${css['right']}`}>
            <div className={`row ${css['btn-group']}`}>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'پیتزا'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'پیتزا'} />
                  پیتزا
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'ساندویچ'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'ساندویچ'} />
                  ساندویچ
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'برگر'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'برگر'} />
                  برگر
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'سوپ'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'سوپ'} />
                  سوپ
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'سالاد'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'سالاد'} />
                  سالاد
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'استیک'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'استیک'} />
                  استیک
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'سوخاری'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'سوخاری'} />
                  سوخاری
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'پاستا'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'پاستا'} />
                  پاستا
                </Button>
              </div>
              <div onClick={changeCategory}>
                <Button
                  addClass={'my-3'}
                  name={
                    thisCategory === 'نوشیدنی'
                      ? 'btn-main-medium-curve-active'
                      : 'btn-main-medium-curve'
                  }
                >
                  <Svg category={'نوشیدنی'} />
                  نوشیدنی
                </Button>
              </div>
            </div>
          </div>
          <div className={`col-7 col-sm-9 ${css['left']}`}>
            <div className="row d-flex justify-content-center align-content-center">
              {sortFoods(category,sortParams).map((food) => {
                return (
                  <div
                    key={food.id}
                    className={`col-6 col-lg-4 mb-4 px-0 px-sm-2 d-flex justify-content-center ${css['card-container']}`}
                  >
                    <FoodCard list={food} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
