import React from "react";
import SectionTitle from "./SectionTitle";
import Testimonial from "./Testimonial";
import { users } from "../data/UsersData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Comments.css";
// import required modules
import { Navigation } from "swiper";

const Comment = () => {
  const usersData = users;

  return (
    <>
      <SectionTitle title={"نظرات کاربران"} />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {usersData.map((user) => {
          return (
            <SwiperSlide key={user.id}>
              <Testimonial list={user} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Comment;
