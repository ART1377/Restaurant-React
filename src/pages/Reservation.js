import React,{useState} from 'react';
import css from './Reservation.module.css';
import {
  FaPhone,
  FaBuilding,
  FaUserAlt,
  FaUserFriends,FaCalendarAlt
} from 'react-icons/fa';
import branch1 from '../assets/image/branches01.jpg';
import branch2 from '../assets/image/branches02.jpg';
import branch3 from '../assets/image/branches03.jpg';
import branch4 from '../assets/image/branches04.jpg';
import branch5 from '../assets/image/branches05.jpg';
import branch6 from '../assets/image/branches06.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reservation = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      branch: '',
      phoneNumber: '',
      guest: '',
      date: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'حداکثر باید 15 کاراکتر باشد')
        .required('پرکردن این فیلد الزامی است'),
      lastName: Yup.string()
        .max(20, 'حداکثر باید 20 کاراکتر باشد')
        .required('پرکردن این فیلد الزامی است'),
      branch: Yup.string().required('پرکردن این فیلد الزامی است'),
      phoneNumber: Yup.string()
        .required('پرکردن این فیلد الزامی است')
        .matches(phoneRegExp, 'شماره معتبر وارد کنید'),
      guest: Yup.string().required('پرکردن این فیلد الزامی است'),
      date: Yup.string().required('پرکردن این فیلد الزامی است'),
    }),
    onSubmit: (values) => {
      formik.resetForm();
    },
  });


  const notify = () => {
    if (!Object.keys(formik.errors).length&&formik.dirty) {
      toast.success('اظلاعات با موفقیت ثبت شد', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } if(Object.keys(formik.errors).length||!formik.dirty) {
      toast.error('اشتباهی رخ داده است', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };




  return (
    <>    
      <div className={`container-fluid px-0 ${css['parent']}`}>
        <div
          className={`row px-0 mx-auto d-flex justify-content-end ${css['hero']}`}
        >
          <h1 className={`m-4 p-1 ${css['title']}`}>رزرو میز</h1>
        </div>
        <div className="container my-5">
          <div className={`row ${css['branches']}`}>
            <div className={`col-md-4 ${css['col']}`}>
              <div className={` ${css['h-400']}`}>
                <img src={branch1} alt="تصویر شعبه" />
                <div className={` ${css['content']}`}>
                  <h5>شعبه اقدسیه</h5>
                  <p>اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰</p>
                </div>
              </div>
              <div className={` ${css['h-250']}`}>
                <img src={branch2} alt="تصویر شعبه" />
                <div className={` ${css['content']}`}>
                  <h5>شعبه آرژانتین</h5>
                  <p>میدان آرژانتین - ابتدای خیابان الوند</p>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${css['col']}`}>
              <div className={` ${css['h-250']}`}>
                <img src={branch3} alt="تصویر شعبه" />
                <div className={` ${css['content']}`}>
                  <h5>شعبه سعادت آباد</h5>
                  <p>
                    سعادت آباد، میدان کاج (شهید طهرانی مقدم)، ابتدای خیابان
                    علامه شمالی،نبش خیابان اقبال ملی
                  </p>
                </div>
              </div>
              <div className={` ${css['h-400']}`}>
                <img src={branch4} alt="تصویر شعبه" />
                <div className={` ${css['content']}`}>
                  <h5>شعبه شهریار</h5>
                  <p>شهریار، میدان نماز، خیابان مطهری، تقاطع بهشتی</p>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${css['col']}`}>
              <div className={` ${css['h-250']}`}>
                <img src={branch5} alt="تصویر شعبه" />
                <div className={` ${css['content']}`}>
                  <h5>شعبه نیاوران</h5>
                  <p>خیابان باهنر، تقاطع کامرانیه شمالی</p>
                </div>
              </div>
              <div className={` ${css['h-400']}`}>
                <img src={branch6} alt="تصویر شعبه" />
                <div className={` ${css['content']}`}>
                  <h5>شعبه صادقیه</h5>
                  <p>
                    فلکه دوم صادقيه، ابتدای محمد علی جناحفلکه دوم صادقيه، ابتدای
                    محمد علی جناح
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`row mx-auto px-3 py-5 ${css['row']}`}>
          <div className={`p-3 p-lg-5 ${css['form-container']}`}>
            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex row mb-5">
                <div
                  className={`col-12 col-sm-6 mb-sm-2 d-flex flex-column mb-5 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? css.errorField
                      : ''
                  }`}
                >
                  <label htmlFor="firstName">
                    <FaUserAlt /> نام
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps('firstName')}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <small>{formik.errors.firstName}</small>
                  ) : null}
                </div>
                <div
                  className={`col-12 col-sm-6 mb-sm-2 d-flex flex-column mb-5 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? css.errorField
                      : ''
                  }`}
                >
                  <label htmlFor="lastName">
                    <FaUserAlt /> نام خانوادگی
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    {...formik.getFieldProps('lastName')}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <small>{formik.errors.lastName}</small>
                  ) : null}
                </div>
              </div>
              <div
                className={`d-flex flex-column mb-5 ${
                  formik.touched.branch && formik.errors.branch
                    ? css.errorField
                    : ''
                }`}
              >
                {' '}
                <label htmlFor="branch">
                  <FaBuilding /> نام شعبه
                </label>
                <select
                  className="form-select form-select-lg"
                  id="branch"
                  type="branch"
                  {...formik.getFieldProps('branch')}
                >
                  <option defaultValue={true} value="شهریار">
                    شهریار
                  </option>
                  <option value="سعادت آباد">سعادت آباد</option>
                  <option value="نیاوران">نیاوران</option>
                  <option value="اقدسیه">اقدسیه</option>
                  <option value="آرژانتین">آرژانتین</option>
                </select>
                {formik.touched.branch && formik.errors.branch ? (
                  <small>{formik.errors.branch}</small>
                ) : null}
              </div>
              <div
                className={`d-flex flex-column mb-5 ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? css.errorField
                    : ''
                }`}
              >
                {' '}
                <label htmlFor="phoneNumber">
                  <FaPhone /> شماره تلفن
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...formik.getFieldProps('phoneNumber')}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <small>{formik.errors.phoneNumber}</small>
                ) : null}
              </div>

              <div className="d-flex row mb-5">
                <div
                  className={`col-12 col-sm-6 mb-sm-2 d-flex flex-column mb-5 ${
                    formik.touched.guest && formik.errors.guest
                      ? css.errorField
                      : ''
                  }`}
                >
                  <label htmlFor="guest">
                    <FaUserFriends /> تعداد مهمان
                  </label>
                  <input
                    id="guest"
                    type="text"
                    {...formik.getFieldProps('guest')}
                  />
                  {formik.touched.guest && formik.errors.guest ? (
                    <small>{formik.errors.guest}</small>
                  ) : null}
                </div>
                <div
                  className={`col-12 col-sm-6 mb-sm-2 d-flex flex-column mb-5 ${
                    formik.touched.date && formik.errors.date
                      ? css.errorField
                      : ''
                  }`}
                >
                  <label htmlFor="date">
                    <FaCalendarAlt /> تاریخ
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="date"
                    {...formik.getFieldProps('date')}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <small>{formik.errors.date}</small>
                  ) : null}
                </div>
              </div>
              <Button func={notify} type={'submit'} name={'btn-main-medium-outline'}>
                رزرو
              </Button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
