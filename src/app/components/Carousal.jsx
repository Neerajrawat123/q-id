"use client";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Carousal() {
  console.log(process.env.NEXT_PUBLIC_DATABASE_URL);
  const [testimonialsData, setTestimonialsData] = useState([]);
  useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/testimonials`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data.data);
        setTestimonialsData(response.data.data);
      }
    };

    getTestimonials();
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        loop="true"
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
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card data={testimonial.attributes} />
          </SwiperSlide>
        ))}

        <div className="swiper-button-next">
          <SlideNextButton />
        </div>
        <div className="swiper-button-prev">
          <SlidePrevButton />
        </div>
      </Swiper>
    </div>
  );
}
