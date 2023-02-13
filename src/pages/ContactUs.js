import React from 'react';
import css from './ContactUs.module.css';
import {
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserAlt,
  FaEnvelopeOpenText,
} from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import { notify } from '../components/Toast'; */

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      textarea: '',
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
      textarea: Yup.string().required('پرکردن این فیلد الزامی است'),
    }),
    onSubmit: (values) => {
      /* alert(JSON.stringify(values, null, 2)); */
      formik.resetForm();
    },
  });

  /*  if (!Object.keys(formik.errors).length) {
    notify("You signed up successfully", "success")
} else {
    notify("Invalid data!", "error")
} */
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
          <h1 className={`m-4 p-1 ${css['title']}`}>تماس با ما</h1>
        </div>
        <div className={`row mx-auto px-3 py-5 ${css['row']}`}>
          <div className={`col-12 col-md-7 p-4 ${css['form-container']}`}>
            <h3>پیام خود را به ما ارسال کنید</h3>
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
                className={`d-flex flex-column mb-5 my-3 ${
                  formik.touched.textarea && formik.errors.textarea
                    ? css.errorField
                    : ''
                }`}
              >
                {' '}
                <label htmlFor="textarea">
                  <FaEnvelopeOpenText /> متن خود را وارد کنید
                </label>
                <textarea
                  id="textarea"
                  cols="15"
                  rows="7"
                  type="text"
                  {...formik.getFieldProps('textarea')}
                ></textarea>
                {formik.touched.textarea && formik.errors.textarea ? (
                  <small>{formik.errors.textarea}</small>
                ) : null}
              </div>

              <Button func={notify} type={'submit'} name={'btn-main-medium-outline'}>
                ارسال پیام
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

            <div></div>
          </div>
          <div className={`col-12 col-md-5 p-4 mt-4 ${css['info-container']}`}>
            <h3 className="mb-5">تماس با ما</h3>
            <div className="d-flex py-2">
              <FaPhone />
              <p className="px-3">021-3315</p>
            </div>
            <div className="d-flex py-2">
              <FaEnvelope />
              <p className="px-3">alirezatt705@gamil.com</p>
            </div>
            <div className="d-flex py-2">
              <FaMapMarkerAlt />
              <p className="px-3">
                تهران میرداماد رازان شمالی دفتر مرکزی رستوران های زنجیره ای
                لبخند
              </p>
            </div>
            <div className="mt-4">
              <h4>ما را دنبال کنید</h4>
              <div className={` ${css['social']}`}>
                <FaTwitter />
                <FaTelegramPlane />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
