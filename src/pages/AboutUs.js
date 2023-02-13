import React from 'react';
import css from './AboutUs.module.css';
import logo from '../assets/image/logo-red.jpg';

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div
          className={`row px-0 d-flex align-items-end mx-auto ${css['hero']}`}
        >
          <h1 className={`m-4 p-1 ${css['title']}`}>درباره ما</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className={`row my-2 p-3 justify-content-between ${css['content']}`}
        >
          <div className={`col-12 col-md-5 ${css['content-left']}`}>
            <div className={`row p-3 ${css['col-5-first-row']}`}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <div className={`row p-3 ${css['col-5-second-row']}`}>
              <p>
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <span>لورم ایپسوم</span>
            </div>
          </div>
          <div className={`col-12 col-md-7 ${css['content-right']}`}>
            <div className={`row ${css['col-7-first-row']}`}>
              <div className="col-4 p-3">
                <img src={logo} alt="logo" />
              </div>
              <div className="col-8 p-3 d-flex justify-content-end flex-column">
                <h5 className="py-2">رستوران های زنجیره ای لبخند</h5>
                <span>فست فود لبخند</span>
              </div>
            </div>
            <div className={`row ${css['col-7-second-row']}`}>
              <div className="col-12 col-md-8 p-3">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
              <div className="col-12 col-md-4 p-3 text-center text-light">
                <h3 className="fw-bold">10</h3>
                <h6>منطقه در سراسر تهران</h6>
                <div className={`${css['circle']}`}></div>
                <h3 className="fw-bold">12</h3>
                <h6>شعبه ی فعال</h6>
                <div className={`${css['circle']}`}></div>
                <h3 className="fw-bold">13</h3>
                <h6>سال سابقه ی همراهی شما</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
