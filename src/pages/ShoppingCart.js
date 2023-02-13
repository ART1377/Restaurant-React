import React from 'react';
import css from './ShoppingCart.module.css';
import {
  TbCircleMinus,
  TbCirclePlus,
  TbTrash,
  TbArrowLeft,
  TbMoodSad,
} from 'react-icons/tb';
import {
  removeAction,
  increaseAction,
  decreaseAction,
  checkoutAction,
} from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  return (
    <>
      <div className="container-fluid p-4">
        <div className="row d-flex justify-content-evenly">
          <div className={`col-12 col-lg-8 mb-4 p-3 ${css['right']}`}>
            <div className={`d-flex justify-content-between ${css['header']}`}>
              <h4>سبد خرید</h4>
              <Link to="/homepage">
                بازگشت و ادامه خرید
                <TbArrowLeft />
              </Link>
            </div>
            {state.selectedItems.length === 0 && (
              <div className={`p-5 d-flex flex-column justify-content-center align-items-center text-center ${css['empty']}`}>
                <TbMoodSad />
                <h3>
                  محصولی به سبد خرید خود اضافه نکردید !
                </h3>
              </div>
            )}
            {state.selectedItems.map((item) => {
              return (
                <div key={item.id} className={`card mb-5 ${css['card']}`}>
                  <div className={`row g-0 ${css['card-row']}`}>
                    <div
                      className={`col-4 d-flex align-items-center ${css['col-img']}`}
                    >
                      <img
                        src={item.image}
                        className={`img-fluid rounded-start ${css['image']}`}
                        alt="..."
                      />
                    </div>
                    <div className={`col-8 ${css['col-content']}`}>
                      <div className="card-body h-100">
                        <h5 className="card-title pt-2">{item.name}</h5>
                        <p className={`card-text ${css['text']}`}>
                          <small className="text-muted">
                            {item.description}
                          </small>
                        </p>
                        <div
                          className={`d-flex justify-content-between mb-4 mb-sm-0 rounded-pill border p-2 ${css['price']}`}
                        >
                          قیمت :<small>{item.discount}</small>
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`d-flex justify-content-between align-items-canter rounded-pill border p-2 ${css['operation']}`}
                    >
                      <TbCirclePlus
                        onClick={() => dispatch(increaseAction(item))}
                      />
                      <h4 className="m-0">{item.quantity}</h4>
                      {item.quantity === 1 && (
                        <TbTrash onClick={() => dispatch(removeAction(item))} />
                      )}
                      {item.quantity !== 1 && (
                        <TbCircleMinus
                          onClick={() => dispatch(decreaseAction(item))}
                        />
                      )}
                    </div>
                    <div
                      onClick={() => dispatch(removeAction(item))}
                      className={` ${css['trash']}`}
                    >
                      <TbTrash />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {state.selectedItems.length === 0 || (
            <div
              className={`col-12 col-sm-8 col-lg-3 p-0 overflow-hidden text-center ${css['left']}`}
            >
              <h3 className={`py-2 mb-5 ${css['head']}`}>پرداخت</h3>
              <div className="d-flex justify-content-between p-3">
                <h5>تعداد محصولات</h5>
                <h5>{state.itemsCounter}</h5>
              </div>
              <div className="d-flex justify-content-between p-3">
                <h5>سود شما از خرید</h5>
                <h5>{state.benefit}</h5>
              </div>
              <div className="d-flex justify-content-between p-3">
                <h5>هزینه ارسال</h5>
                <h5>رایگان</h5>
              </div>
              <hr className={`w-75 mx-auto`} />
              <div className="d-flex justify-content-between p-3">
                <h4 className="fw-bolder">مجموع قیمت </h4>
                <h4>{state.total}</h4>
              </div>
              <div className="d-flex align-items-center flex-column p-3">
                <Button
                  func={() => dispatch(checkoutAction())}
                  addClass={'rounded-pill mx-0 my-1 w-100'}
                  name={'btn-main-medium'}
                >
                  پرداخت
                </Button>
                <Link to="/homepage" className="w-100 my-1 mx-0">
                  <Button
                    addClass={'rounded-pill w-100 bg-transparent'}
                    name={'btn-main-medium-outline'}
                  >
                    ادامه خرید
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
