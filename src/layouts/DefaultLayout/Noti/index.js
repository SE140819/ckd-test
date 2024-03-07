import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './noti.css';
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
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return isVisible ? (
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
                        <div className="wap_thongtin flex justify-center items-center bg-gray-800 p-7">
                            <span className="font-bold text-yellow-300 text-sm">
                                {noti.content}
							</span>
							{/* nút nằm bên phải */}
							<button onClick={handleClose} className="closed_noti ml-5text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
                        </div>
                    </SwiperSlide>
                ))}
			</Swiper>
			
        </React.Fragment>
    ) : null;
}

export default Noti;