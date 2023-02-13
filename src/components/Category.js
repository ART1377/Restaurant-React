import React from 'react';
import css from './Category.module.css';
import SectionTitle from './SectionTitle';

const Category = () => {
  return (
    <>
      <div className="container-fluid p-3 mx-auto">
        <SectionTitle title={'دسته بندی محصولات'} />
        <div className="row pt-2 mx-auto">
          <div className="row px-0 mx-auto justify-content-between mb-3">
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['pizza']}`}
            >
              <h3 className="fw-bold">پیتزا</h3>
            </div>
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['burger']}`}
            >
              <h3 className="fw-bold">برگر</h3>
            </div>
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['sandwich']}`}
            >
              <h3 className="fw-bold">ساندویچ</h3>
            </div>
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['pasta']}`}
            >
              <h3 className="fw-bold">پاستا</h3>
            </div>
          </div>
          <div className="row px-0 mx-auto justify-content-between mb-3">
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['fried']}`}
            >
              <h3 className="fw-bold">سوخاری</h3>
            </div>
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['salad']}`}
            >
              <h3 className="fw-bold">سالاد</h3>
            </div>
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['steak']}`}
            >
              <h3 className="fw-bold">استیک</h3>
            </div>
            <div
              className={`col-6 col-md-3 mb-2 d-flex justify-content-center align-items-center ${css['category']} ${css['soup']}`}
            >
              <h3 className="fw-bold">سوپ</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
