'use client'
import { Navigation,  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';

export default function Carousal() {
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
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <div className='swiper-button-next'><SlideNextButton /></div>
      <div className='swiper-button-prev'><SlidePrevButton /></div>

    </Swiper>
    </div>

  );
};