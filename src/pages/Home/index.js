 import { useEffect, useState } from "react";
 import { get } from "../../utils/httpRequest"
 import { checkIsMobile , path_upload} from "../../utils/ckdUtils"

 import 'swiper/css';
 import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Avatar, Button, Modal, Progress } from 'flowbite-react';


import RatingComponent from '../../components/intro/ratingComponent';
import { banner } from '../../data/banner2';
import { brand } from '../../data/brandindex';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Tabs, Card } from 'flowbite-react';

import './index.css';
import React from 'react';

import { Rating } from 'flowbite-react';

// data
import { product_list, review } from '../../data/home';
import { title } from '../../data/title';


function Home() {
    return (
        <>
            <section className=" data-te-lazy-load-init " data-te-lazy-load="true">
                <div id="banner">{/* <Banner /> */}</div>

                <div id="slick_cate" className="main_fix pt-5">
                    {/* <Cate /> */}
                </div>

                <div id="banner2" className="pt-5">
                    <Banner2 />
                </div>

                <div id="product_slide" className="p-5 main_fix bg-white">
                    <ProductSlide />
                </div>

                <div id="banner2" className="pt-5">
                    <Banner3 />
                </div>
                <div id="promotion_slide" className="p-5 main_fix pt-5 bg-white">
                    <PromotionSlide />
                </div>
                <div className="main_fix pt-5 bg-white">
                    <Review />
                </div>
                <div className="main_fix pt-5">
                    <Video />
                </div>
                <div className="main_fix pt-5">
                <Brand />
                </div>
            </section>
        </>
    );
}

// function Banner(){
//   const tag_mb = checkIsMobile();

//   const options = {
//     table: 'photo',
//     select: 'id,tenvi as ten,photo,link',
//     where: 'type="slidevi'+tag_mb+'" and hienthi >0',
//     order_by: 'stt,id desc',
//   };

//   const [banner,setBanner] = useState([]);

//    useEffect(()=>{
//     const fetch = async ()=>{
//       const _banner = await get('tab', {params:options})
//       setBanner(_banner)
//     }

//     fetch();
//    }, [])
  

// return (
//   <Swiper
//     loop={true}
//     autoplay={{
//       delay: 2000,
      
//         }}
        
//     modules={[Autoplay, Pagination, Navigation]}
//     onSwiper={(swiper) => console.log(swiper)}
     
//   >
   
//       { !!banner && 
//           banner.map(i =>{
//             const _url = path_upload().photo;
          
//               return (
//                   <SwiperSlide key={i.id}>
//                       <a className="bg-cover " href={i.link}>
//                           <img className="w-full object-cover h-auto" src={_url + i.photo} alt={i.ten} />
//                       </a>
//                   </SwiperSlide>
//               );
//           })
//         }
    
     
    
//   </Swiper>
// )
// }
// function Cate(){

//   const options = {
//     table: 'product_list',
//     select: 'id,tenvi as ten,tenkhongdauvi as link,photo',
//     where: 'type="san-pham" and hienthi >0',
//     order_by: 'stt,id desc',
//   };

//   const [banner,setBanner] = useState([]);

//    useEffect(()=>{
//     const fetch = async ()=>{
//       const _banner = await get('tab', {params:options})
//       setBanner(_banner)
//     }

//     fetch();
//    }, [])


//   return (
//       <Swiper
//           autoplay={{
//               delay: 2000,
//           }}
//           loop={true}
//           spaceBetween={10}
//           slidesPerView={2}
//           modules={[Autoplay, Pagination, Navigation]}
//           breakpoints={{
//               300: {
//                   slidesPerView: 3,
//                   spaceBetween: 5,
//               },
//               450: {
//                   slidesPerView: 3,
//                   spaceBetween: 5,
//               },
//               600: {
//                   slidesPerView: 4,
//                   spaceBetween: 10,
//               },
//               900: {
//                   slidesPerView: 5,
//                   spaceBetween: 20,
//               },
//           }}
//       >
//           {!!banner &&
//               banner.map((i) => {
//                   const _url = path_upload().product;

//                   return (
//                       <SwiperSlide key={i.id}>
//                           <div className="item_dm">
//                               <p className="img_sp_home zoom_hinh border overflow-hidden">
//                                   <a href={i.link} title={i.ten}>
//                                       <img
//                                           className="img-fluid border rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
//                                           src={_url + i.photo}
//                                           alt="CKD COS VIETNAM"
//                                       />
//                                   </a>
//                               </p>
//                               <h2 className="name_sp catchuoi2">
//                                   <a href={i.link} title={i.ten}>
//                                       {i.ten}
//                                   </a>
//                               </h2>
//                           </div>
//                       </SwiperSlide>
//                   );
//               })}
//       </Swiper>
//   );
// }

function Banner2(){
  return (
      <div>
          <a
              href={banner[0].url}
              title={banner[0].title}
          >
              <img
                  className="w-full h-full object-cover"
                  src={banner[0].img}
                  alt="banner"
              />
          </a>
      </div>
  );
}



function ProductSlide() {
    return (
        <>
            <Tabs style="pills" className=" justify-center mx-auto">
                <Tabs.Item active title={title.Tab1} className="flex justify-center active">
                    <Swiper
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        //  chạy
                        autoplay={{
                            delay: 5000,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        {product_list.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="item container flex justify-center mb-5">
                                    <div className="max-w-sm">
                                        <div className="bg-white relative transition duration-500 rounded-lg">
                                            <div className="item">
                                                <div className="img_sp zoom_hinh">
                                                    <div className="image-container">
                                                        <a href={item.href} title={item.alt}>
                                                            <img
                                                                className="img-fluid img-lazy img-load"
                                                                src={item.image}
                                                                alt={item.alt}
                                                                title={item.alt}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-lg bg-white">
                                                {/* reposive */}
                                                <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                    <a
                                                        href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                        title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </h1>
                                                <p className="gia_sp">
                                                    <span className="gia giamoi">{item.price}</span>
                                                </p>
                                                <div className="flex justify-center">
                                                    <span className="border rounded p-1 border-green-500 text-green-500">
                                                        New
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="text-gray-500 text-xs">{title.daban}</div>
                                                    <Progress
                                                        progress={50}
                                                        color="pink"
                                                        textLabel="50/100"
                                                        size="lg"
                                                        //    labelProgress
                                                        labelText
                                                    />
                                                </div>
                                            </div>

                                            <span
                                                className="cart-buy addcart transition"
                                                data-id="157"
                                                data-action="buynow"
                                            ></span>
                                            {!!item.voucher && (
                                                <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                    {item.voucher}%
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        //  chạy
                        autoplay={{
                            delay: 5000,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        {product_list.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="container flex justify-center mb-5">
                                    <div className="max-w-sm">
                                        <div className="bg-white relative transition duration-500 rounded-lg">
                                            <div className="item">
                                                <div className="img_sp zoom_hinh">
                                                    <div className="image-container">
                                                        <a href={item.href} title={item.alt}>
                                                            <img
                                                                className="img-fluid img-lazy img-load"
                                                                src={item.image}
                                                                alt={item.alt}
                                                                title={item.alt}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-lg bg-white">
                                                {/* reposive */}
                                                <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                    <a
                                                        href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                        title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </h1>
                                                <p className="gia_sp">
                                                    <span className="gia giamoi">{item.price}</span>
                                                </p>
                                                <div className="flex justify-center">
                                                    <span className="border rounded p-1 border-green-500 text-green-500">
                                                        New
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="text-gray-500 text-xs">{title.daban}</div>
                                                    <Progress
                                                        progress={50}
                                                        color="pink"
                                                        textLabel="50/100"
                                                        size="lg"
                                                        //    labelProgress
                                                        labelText
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className="cart-buy addcart transition"
                                                data-id="157"
                                                data-action="buynow"
                                            ></span>
                                            {!!item.voucher && (
                                                <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                    {item.voucher}%
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className="xemtatca">
                        <a
                            href="https://ckdvietnam.com/san-pham/tot-nhat"
                            className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                        >
                            {title.xemthem}
                        </a>
                    </p>
                </Tabs.Item>
                <Tabs.Item title="MỚI">
                    <Swiper
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        //  chạy
                        autoplay={{
                            delay: 5000,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        {product_list.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="container flex justify-center mb-5">
                                    <div className="max-w-sm">
                                        <div className="bg-white relative transition duration-500 rounded-lg">
                                            <div className="item">
                                                <div className="img_sp zoom_hinh">
                                                    <div className="image-container">
                                                        <a href={item.href} title={item.alt}>
                                                            <img
                                                                className="img-fluid img-lazy img-load"
                                                                src={item.image}
                                                                alt={item.alt}
                                                                title={item.alt}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-lg bg-white">
                                                {/* reposive */}
                                                <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                    <a
                                                        href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                        title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </h1>
                                                <p className="gia_sp">
                                                    <span className="gia giamoi">{item.price}</span>
                                                </p>
                                                <div className="flex justify-center">
                                                    <span className="border rounded p-1 border-green-500 text-green-500">
                                                        New
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="text-gray-500 text-xs">{title.daban}</div>
                                                    <Progress
                                                        progress={50}
                                                        color="pink"
                                                        textLabel="50/100"
                                                        size="lg"
                                                        //    labelProgress
                                                        labelText
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className="cart-buy addcart transition"
                                                data-id="157"
                                                data-action="buynow"
                                            ></span>
                                            {!!item.voucher && (
                                                <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                    {item.voucher}%
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        //  chạy
                        autoplay={{
                            delay: 5000,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        {product_list.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="container flex justify-center mb-5">
                                    <div className="max-w-sm">
                                        <div className="bg-white relative transition duration-500 rounded-lg">
                                            <div className="item">
                                                <div className="img_sp zoom_hinh">
                                                    <div className="image-container">
                                                        <a href={item.href} title={item.alt}>
                                                            <img
                                                                className="img-fluid img-lazy img-load"
                                                                src={item.image}
                                                                alt={item.alt}
                                                                title={item.alt}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-lg bg-white">
                                                {/* reposive */}
                                                <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                    <a
                                                        href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                        title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </h1>
                                                <p className="gia_sp">
                                                    <span className="gia giamoi">{item.price}</span>
                                                </p>
                                                <div className="flex justify-center">
                                                    <span className="border rounded p-1 border-green-500 text-green-500">
                                                        New
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="text-gray-500 text-xs">{title.daban}</div>
                                                    <Progress
                                                        progress={50}
                                                        color="pink"
                                                        textLabel="50/100"
                                                        size="lg"
                                                        //    labelProgress
                                                        labelText
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className="cart-buy addcart transition"
                                                data-id="157"
                                                data-action="buynow"
                                            ></span>
                                            {!!item.voucher && (
                                                <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                    {item.voucher}%
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className="xemtatca">
                        <a
                            href="https://ckdvietnam.com/san-pham/tot-nhat"
                            className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                        >
                            {title.xemthem}
                        </a>
                    </p>
                </Tabs.Item>
            </Tabs>
        </>
    );
}

function Banner3() {
    return (
        <div>
            <a href={banner[1].url} title={banner[1].title}>
                <img className="w-full h-full object-cover" src={banner[1].img} alt={banner[1].title} />
            </a>
        </div>
    );
}

function PromotionSlide() {
    return (
        <React.Fragment>
            <div className="title-main">
                <h1 className="h1_home">{title.sanphamkhuyenmai}</h1>
            </div>
            <Swiper
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >
                {product_list.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="container flex justify-center mb-5">
                            <div className="max-w-sm">
                                <div className="bg-white relative transition duration-500 rounded-lg">
                                    <div className="item">
                                        <div className="img_sp zoom_hinh">
                                            <div className="image-container">
                                                <a href={item.href} title={item.alt}>
                                                    <img
                                                        className="img-fluid img-lazy img-load"
                                                        src={item.image}
                                                        alt={item.alt}
                                                        title={item.alt}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg bg-white">
                                        {/* reposive */}
                                        <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                            <a
                                                href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                            >
                                                {item.name}
                                            </a>
                                        </h1>
                                        <p className="gia_sp">
                                            <span className="gia giamoi">{item.price}</span>
                                        </p>
                                        <div className="flex justify-center">
                                            <span className="border rounded p-1 border-green-500 text-green-500">
                                                New
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <div className="text-gray-500 text-xs">{title.daban}</div>
                                            <Progress
                                                progress={50}
                                                color="pink"
                                                textLabel="50/100"
                                                size="lg"
                                                //    labelProgress
                                                labelText
                                            />
                                        </div>
                                    </div>
                                    <span
                                        className="cart-buy addcart transition"
                                        data-id="157"
                                        data-action="buynow"
                                    ></span>
                                    {!!item.voucher && (
                                        <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                            {item.voucher}%
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper mb-5"
            >
                {product_list.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="container flex justify-center mb-5">
                            <div className="max-w-sm">
                                <div className="bg-white relative transition duration-500 rounded-lg">
                                    <div className="item">
                                        <div className="img_sp zoom_hinh">
                                            <div className="image-container">
                                                <a href={item.href} title={item.alt}>
                                                    <img
                                                        className="img-fluid img-lazy img-load"
                                                        src={item.image}
                                                        alt={item.alt}
                                                        title={item.alt}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg bg-white">
                                        <h1
                                            className=" mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs
                                        "
                                        >
                                            <a
                                                href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                            >
                                                {item.name}
                                            </a>
                                        </h1>
                                        <p className="gia_sp">
                                            <span className="gia giamoi">{item.price}</span>
                                        </p>
                                        <div className="flex justify-center">
                                            <span className="border rounded p-1 border-green-500 text-green-500">
                                                New
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <div className="text-gray-500 text-xs">{title.daban}</div>
                                            <Progress
                                                progress={50}
                                                color="pink"
                                                textLabel="50/100"
                                                size="lg"
                                                //    labelProgress
                                                labelText
                                            />
                                        </div>
                                    </div>
                                    <span
                                        className="cart-buy addcart transition"
                                        data-id="157"
                                        data-action="buynow"
                                    ></span>
                                    {!!item.voucher && (
                                        <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                            {item.voucher}%
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="xemtatca">
                <a
                    href="https://ckdvietnam.com/san-pham/tot-nhat"
                    className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                >
                    {title.xemthem}
                </a>
            </p>
        </React.Fragment>
    );
}

function Review() {  
    const [openModal, setOpenModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null); 
    const [reviewData, setReviewData] = useState(review);

     const handleItemClick = (id) => {
         setSelectedItemId(id); 
         setOpenModal(true); 
     };
    return (
        <>
            <div className="title-main">
                <h1 className="h1_home">{title.danhgia}</h1>
            </div>
            <div className="px-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 gap-7 xl:gap-10">
                    {reviewData.slice(0, 8).map((item, index) => (
                        <div className="card rounded overflow-hidden relative" key={index}>
                            <div
                                className="aspect-w-16 aspect-h-9 img_post cursor-pointer"
                                onClick={() => handleItemClick(item.id)}
                            >
                                <img
                                    className="object-cover brightness-100 group-hover:brightness-50 w-full fixed-photo"
                                    src={item.img}
                                    alt="CKD COS VIETNAM"
                                />
                            </div>
                            <div className="group relative">
                                <div className=" text-white glass absolute bottom-[30px] m-4 p-4 translate-y-[80%] group-hover:translate-y-[0%] transition-transform duration-300">
                                    {/* Rating */}
                                    <div className="absolute top-0 right-0 p-2">
                                        <Rating></Rating>
                                    </div>
                                    <div className="grid gap-1 ">
                                        <RatingComponent rating={item.rating} />
                                        <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                            {item.customer}
                                        </p>
                                        <div className="flex items-center mb-4">
                                            <div>
                                                <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                                    {item.feedback}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl" itemID={selectedItemId}>
                <Modal.Header>
                    <div className="grid grid-rows-2 grid-flow-col">
                        <div className="row-span-3 flex items-center justify-center">
                            <Avatar
                                img={reviewData.find((item) => item.id === selectedItemId)?.img}
                                alt="Avatar"
                                rounded
                            />
                        </div>
                        <div className="col-span-2">
                            <span>{reviewData.find((item) => item.id === selectedItemId)?.customer}</span>
                        </div>
                        <div className="">
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                            </Rating>
                        </div>
                    </div>
                    <div className="text-sm">{reviewData.find((item) => item.id === selectedItemId)?.feedback}</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                        <div className="row-span-1">
                            <div className="flex text-center justify-center items-center">
                                <img
                                    src={reviewData.find((item) => item.id === selectedItemId)?.img}
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="space-y-4">
                                <h1 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                                    {title.reviewkhachhang}
                                </h1>

                                <div className="grid grid-cols-4 gap-1">
                                    {reviewData.slice(0, 8).map((item, index) => (
                                        <div key={index}>
                                            <img src={item.img} alt="blog" width={100} height={100} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="text-sm">
                        <span>
                            {title.ngaydanhgia}:
                            {new Date().toLocaleDateString(
                                "vi-VN",
                                { year: "numeric", month: "2-digit", day: "2-digit" })}
                        </span>
                    </div>
                </Modal.Footer>
            </Modal>

            <p className="xemtatca mb-5">
                <a
                    href="/review"
                    className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                >
                    {title.xemthem}
                </a>
            </p>
        </>
    );
}
function Video() {
  return (
      <>
          <div className="title-main">
              <h1 className="h1_home">{title.video}</h1>
          </div>
          <a href="https://www.youtube.com/watch?v=VGugPGF1Ztk" title={title.video}>
              <video className="w-full mb-5" autoPlay loop muted>
                  <source src="https://ckdvietnam.com/assets/webm/welcome.webm?v=1706522344" type="video/webm" />
              </video>
          </a>
      </>
  );
}

function Brand() {
    
    return (
        <>
            <div className="title-main">
                <h1 className="h1_home">{title.brand}</h1>
            </div>
            <Swiper
            loop={true}
      spaceBetween={50}
        breakpoints={{
            300: {
            slidesPerView: 1,
            spaceBetween: 10
            },
            450: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            600: {
            slidesPerView: 3,
            spaceBetween: 30
            },
            900: {
            slidesPerView: 3,
            spaceBetween: 40
            }
        }}
    >
            {
                brand.map((item, index) => (
                    <SwiperSlide key={index}>
                    <div className="item">
              
              <div className="img_sp zoom_hinh">
              
                  <div className="image-container">
              
                      <a href={item.href}
                       title={item.alt}>
                          <img className="img-fluid img-lazy img-load"
                           src={item.img}
                           alt={item.alt}
                           title={item.alt}
                            />
                      </a>
              
                  </div>
              
              </div>
              
              </div>
                    </SwiperSlide>
                ))
            }
    </Swiper>
        </>
    );
  }
  
  






export default Home;
