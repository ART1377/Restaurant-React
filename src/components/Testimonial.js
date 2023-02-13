import React from 'react'
import css from './Testimonial.module.css'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import ReactStars from 'react-stars'



const Testimonial = ({list}) => {
 

  return (
    <>
        <div className={`p-3 ${css['card']}`}>
            <div className={`row ${css['card-row']}`}>
                <div className={`col-4 d-flex justify-content-center align-items-center p-3 ${css['right']}`}>
                    <div className={`d-flex justify-content-center align-items-center ${css['shape']}`}>
                        <img className={` ${css['image']}`} src={list.image} alt="userImage" />
                    </div>
                </div>
                <div className={`col-8 p-3 d-flex justify-content-center align-items-center flex-column ${css['left']}`}>
                    <div className={`d-flex justify-content-between align-items-center w-100`}>
                        <h5 className={`fw-bold ${css['name']}`}>{list.name}</h5>
                        <div className={`${css['stars']}`} id='stars' >
                            <ReactStars
                                count={5}
                                size={24}
                                color2={'#ff3333'}
                                value={list.star}
                                half={false}
                                edit={false} />
                        </div>
                    </div>
                    <div className={`my-3 p-2 ${css['text']}`}>
                        <div>
                            <FaQuoteRight />
                        </div>
                        <p>{list.description}</p>
                        <div className='text-start'>
                            <FaQuoteLeft />
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className={`${css['circle1']}`}></div>
                <div className={`${css['circle2']}`}></div>
                <div className={`${css['circle3']}`}></div>
            </div>
        </div>
    </>
  )
}

export default Testimonial
