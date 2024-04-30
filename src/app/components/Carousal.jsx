'use client'
import { Navigation,  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import { testimonials } from '../utils/testimonials';
import { useState } from 'react';

export default function Carousal() {
    const [testimonialsData, setTestimonialsData] = useState(testimonials);
    console.log(testimonialsData)
  return (
    <div className='relative'>

    <Swiper
      // install Swiper modules
      modules={[ Navigation]}
      loop='true'
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
       
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      navigation
    >
     {
        testimonialsData.map((testimonial, index) => (

            <SwiperSlide key={index} ><Card data={testimonial}/></SwiperSlide>


        ))

     }

      
      <div className='swiper-button-next'><SlideNextButton /></div>
      <div className='swiper-button-prev'><SlidePrevButton /></div>

    </Swiper>
    </div>

  );
};