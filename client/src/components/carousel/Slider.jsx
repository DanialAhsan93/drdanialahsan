import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import { back, knee, shoulder } from '../../data';

import { EffectCards, Navigation, Pagination, Autoplay } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation
        // pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={back} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={shoulder} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={knee} alt="" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={back} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={shoulder} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={knee} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={back} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={shoulder} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-full h-full'>
            <img src={knee} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;