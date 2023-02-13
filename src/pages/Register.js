import React from 'react';
import css from './Register.module.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FaKey, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'حداکثر باید 15 کاراکتر باشد')
        .required('پرکردن این فیلد الزامی است'),
      lastName: Yup.string()
        .max(20, 'حداکثر باید 20 کاراکتر باشد')
        .required('پرکردن این فیلد الزامی است'),
      email: Yup.string()
        .email('ایمیل نامعتبر است')
        .required('پرکردن این فیلد الزامی است'),
      password: Yup.string()
        .required('پرکردن این فیلد الزامی است')
        .min(6, 'رمز عبور باید حداقل شامل 6 کاراکتر باشد'),
      confirmPassword: Yup.string()
        .required('پرکردن این فیلد الزامی است')
        .oneOf([Yup.ref('password'), null], 'رمز عبور مطابقت ندارد'),
      checkbox: Yup.bool().oneOf([true], 'با قوانین موافقت نکردید'),
    }),

    onSubmit: (values) => {
      formik.resetForm();
    },
  });

  const notify = () => {
    if (!Object.keys(formik.errors).length && formik.dirty) {
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
    }
    if (Object.keys(formik.errors).length||!formik.dirty) {
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

  const params = useParams();
  const loc = useLocation();

  return (
    <>
      <div className="container-fluid">
        <div className={`row mx-auto px-3 py-5 ${css['row']}`}>
          <div
            className={`col-12 col-md-7 mx-auto p-4 ${css['form-container']}`}
          >
            {(params.state === 'SignUp' ||
              params.state === 'signup' ||
              loc.pathname === '/Register') && (
              <>
                <h3 className="text-center">ایجاد حساب کاربری</h3>
                <form onSubmit={formik.handleSubmit}>
                  <div className="d-flex row mb-sm-5">
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
                      formik.touched.email && formik.errors.email
                        ? css.errorField
                        : ''
                    }`}
                  >
                    {' '}
                    <label htmlFor="email">
                      <FaEnvelope /> ایمیل
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <small>{formik.errors.email}</small>
                    ) : null}
                  </div>
                  <div
                    className={`d-flex flex-column mb-5 ${
                      formik.touched.password && formik.errors.password
                        ? css.errorField
                        : ''
                    }`}
                  >
                    {' '}
                    <label htmlFor="password">
                      <FaKey /> رمز عبور
                    </label>
                    <input
                      id="password"
                      type="password"
                      {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <small>{formik.errors.password}</small>
                    ) : null}
                  </div>
                  <div
                    className={`d-flex flex-column mb-5 ${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? css.errorField
                        : ''
                    }`}
                  >
                    {' '}
                    <label htmlFor="confirmPassword">
                      <FaKey /> تکرار رمز عبور
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <small>{formik.errors.confirmPassword}</small>
                    ) : null}
                  </div>
                  <div
                    className={`d-flex mb-5 form-check ${
                      formik.touched.checkbox && formik.errors.checkbox
                        ? css.errorField
                        : ''
                    }`}
                  >
                    {' '}
                    <input
                      className={`form-check-input ${css['check']}`}
                      id="checkbox"
                      type="checkbox"
                      {...formik.getFieldProps('checkbox')}
                    />
                    <label
                      className="form-check-label mx-2 mx-sm-5 w-100"
                      htmlFor="checkbox"
                    >
                      <small className="px-4 px-sm-1">
                        با قوانین سایت موافقت میکنم.
                      </small>
                    </label>
                    {formik.touched.checkbox && formik.errors.checkbox ? (
                      <small>{formik.errors.checkbox}</small>
                    ) : null}
                  </div>
                  <Button
                    func={notify}
                    addClass={'mx-auto'}
                    type={'submit'}
                    name={'btn-main-large'}
                  >
                    ایجاد حساب کاربری
                  </Button>
                  <div className={`d-flex mt-3 ${css['last-row']}`}>
                    <p>ثبت نام کرده اید؟</p>{' '}
                    <Link to="Login">ورود به سایت</Link>
                  </div>
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
              </>
            )}
            {(params.state === 'Login' || params.state === 'login') && (
              <>
                <h3 className="text-center">ورود به سایت</h3>
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className={`d-flex flex-column mb-5 ${
                      formik.touched.email && formik.errors.email
                        ? css.errorField
                        : ''
                    }`}
                  >
                    {' '}
                    <label htmlFor="email">
                      <FaEnvelope /> ایمیل
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <small>{formik.errors.email}</small>
                    ) : null}
                  </div>
                  <div
                    className={`d-flex flex-column mb-5 ${
                      formik.touched.password && formik.errors.password
                        ? css.errorField
                        : ''
                    }`}
                  >
                    {' '}
                    <label htmlFor="password">
                      <FaKey /> رمز عبور
                    </label>
                    <input
                      id="password"
                      type="password"
                      {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <small>{formik.errors.password}</small>
                    ) : null}
                  </div>
                  <Button
                    func={notify}
                    addClass={'mx-auto'}
                    type={'submit'}
                    name={'btn-main-large'}
                  >
                    ورود
                  </Button>
                  <div className={`d-flex mt-3 ${css['last-row']}`}>
                    <p>ثبت نام نکرده اید؟</p> <Link to="SignUp">ثبت نام</Link>
                  </div>
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
              </>
            )}

            <div className={` ${css['circle1']}`}></div>
            <div className={` ${css['circle2']}`}></div>
            <div className={` ${css['circle3']}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

/* yup.boolean().oneOf([true],'Message'); */
