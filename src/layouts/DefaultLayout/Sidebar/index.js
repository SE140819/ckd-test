import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
function Sidebar() {
    return   <>
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
    <SwiperSlide>
  rtttt
</SwiperSlide>

      <SwiperSlide>
     tttt
      </SwiperSlide>
    </Swiper>
  </>
}

export default Sidebar;