import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './noti.css';

// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

const noti = [
	{
		id: 1,
		content: 'Coupon 10% khi bạn đăng ký là thành viên của CKD',
	},
	{
		id: 2,
		content: 'Coupon 10% khi bạn đăng ký là thành viên của CKD',
	},
	{
		id: 3,
		content: 'Coupon 10% khi bạn đăng ký là thành viên của CKD',
	},
	{
		id: 4,
		content: 'Coupon 10% khi bạn đăng ký là thành viên của CKD',
	},
];
function Noti() {
	return (
		<React.Fragment>
			<Swiper
				autoplay={{
					delay: 2000,
					
				}}
				
				slidesPerView={1}
				loop={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{noti.map((noti) => (
					<SwiperSlide key={noti.id}>
					<div className="wap_thongtin flex justify-center items-center ">
						<span className="font-bold text-yellow-300 text-sm">
								{noti.content}
						</span>
					</div>
				</SwiperSlide>
				))
				}
			</Swiper>
		</React.Fragment>
	)
}

export default Noti;
