 import { useEffect, useState } from "react";
 import { get } from "../../utils/httpRequest"
import { checkIsMobile, path_upload, formatNumber, getDiscount } from '../../utils/ckdUtils';

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
 import { Link } from 'react-router-dom';

 import { Rating } from 'flowbite-react';

 // data
 import { product_list, review } from '../../data/home';
 import { title } from '../../data/title';

 // SkeletonImg
 import {
     SkeletonBanner,
     SkeletonCate,
     SkeletonProduct,
     SkeletonPromotion,
     SkeletonVideo,
 } from '../../components/skeleton';
 import { useDispatch, useSelector } from 'react-redux';
 import { addToCart, loadCart } from '../../actions';
import ProductCard from '../../components/UI/product-card/ProductCard';
const Noimagebanner =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE-BANNER.png?alt=media&token=e121b01a-71dc-4f7f-bd51-6ad9243c3269';

const Noimage =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);
    return (
        <>
            {/* logic skeleton */}
            {loading ? (
                <>
                    <SkeletonBanner />
                    <SkeletonCate />
                    <SkeletonBanner />
                    <SkeletonProduct />
                    <SkeletonBanner />
                    <SkeletonPromotion />
                    <SkeletonVideo />
                </>
            ) : (
                <section className=" data-te-lazy-load-init " data-te-lazy-load="true">
                    <div id="banner" className="pt-5">
                        <Banner />
                    </div>

                    <div id="slick_cate" className="main_fix pt-5">
                        <Cate />
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
            )}
        </>
    );
}

function Banner() {
    const tag_mb = checkIsMobile();

    const options = {
        table: 'photo',
        select: 'id,tenvi as ten,photo,link',
        where: 'type="slidevi' + tag_mb + '" and hienthi >0',
        order_by: 'stt,id desc',
    };

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _banner = await get('tab', { params: options });
            setBanner(_banner);
        };

        fetch();
    }, []);

    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 2000,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {!!banner &&
                banner.map((i) => {
                    const _url = path_upload().photo;

                    return (
                        <SwiperSlide key={i.id}>
                            <a className="bg-cover " href={i.link}>
                                <img
                                    className="w-full object-cover h-auto"
                                    src={i.photo ? _url + i.photo : Noimagebanner}
                                    alt={i.ten}
                                />
                            </a>
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
}
function Cate() {
    const options = {
        table: 'product_list',
        select: 'id,tenvi as ten,tenkhongdauvi as link,photo',
        where: 'type="san-pham" and hienthi >0',
        order_by: 'stt,id desc',
    };

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _banner = await get('tab', { params: options });
            setBanner(_banner);
        };

        fetch();
    }, []);

    return (
        <Swiper
            autoplay={{
                delay: 2000,
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
                300: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                450: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                900: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
        >
            {!!banner &&
                banner.map((i) => {
                    const _url = path_upload().product;

                    return (
                        <SwiperSlide key={i.id}>
                            <div className="item_dm">
                                <p className="img_sp_home zoom_hinh border overflow-hidden">
                                    <a href="/product" title={i.ten}>
                                        <img
                                            className="img-fluid border rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                            src={i.photo ? _url + i.photo : Noimage}
                                            alt="CKD COS VIETNAM"
                                        />
                                    </a>
                                </p>
                                <h2 className="name_sp catchuoi2">
                                    <a href="/product" title={i.ten}>
                                        {i.ten}
                                    </a>
                                </h2>
                            </div>
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
}

function Banner2() {
    const tag_mb = checkIsMobile();
    const options = {
        table: 'photo',
        select: 'id,tenvi as ten,photo,link',
        where: 'type="bannervi' + tag_mb + '" and hienthi >0',
        order_by: 'stt,id desc',
    };

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _banner = await get('tab', { params: options });
            setBanner(_banner);
        };

        fetch();
    }, []);

    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 2000,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {!!banner &&
                banner.map((i) => {
                    const _url = path_upload().photo;

                    return (
                        <SwiperSlide key={i.id}>
                            <a className="bg-cover " href={i.link}>
                                <img
                                    className="w-full object-cover h-auto"
                                    src={i.photo ? _url + i.photo : Noimagebanner}
                                    alt={i.ten}
                                />
                            </a>
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
}

function ProductSlide() {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch(loadCart(JSON.parse(savedCart)));
        }
    }, [dispatch]);
    const options = {
        table: 'product',
        select: '*',
        where: 'hienthi >0' + ' and type="san-pham" and noibat >0',
    };
    const option2s = {
        table: 'product',
        select: '*',
        where: 'hienthi >0' + ' and type="san-pham" and moi >0',
    };

    const [product_list, setProductList] = useState([]);
    const [product_list2, setProductList2] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const _product = await get('tab', { params: options });
            setProductList(_product || []);
        };

        fetch();
    }, []);
    useEffect(() => {
        const fetch = async () => {
            const _product2 = await get('tab', { params: option2s });
            setProductList2(_product2 || []);
        };

        fetch();
    }, []);

    const initialFilterState = {
        id_thuonghieu: '', //done
        id_cat: '', //done
        id_dong: '', //done
    };

    const [filterState, setFilterState] = useState(initialFilterState);
    const [filterState2, setFilterState2] = useState(initialFilterState);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredProduct2s, setFilteredProduct2s] = useState([]);
    const [noProductFound, setNoProductFound] = useState(false);

    const filterProducts = () => {
        const newFilteredProducts = product_list.filter((product) => {
            const isBrandMatch =
                filterState.id_thuonghieu === '' || product.id_thuonghieu === filterState.id_thuonghieu;
            const isCategoryMatch = filterState.id_cat === '' || product.id_cat === filterState.id_cat;
            const isTypeMatch = filterState.id_dong === '' || product.id_dong === filterState.id_dong;

            return isBrandMatch && isCategoryMatch && isTypeMatch;
        });

        setFilteredProducts(newFilteredProducts);
        setNoProductFound(newFilteredProducts.length === 0);
    };
    const filterProduct2s = () => {
        const newFilteredProduct2s = product_list2.filter((product) => {
            const isBrandMatch =
                filterState.id_thuonghieu === '' || product.id_thuonghieu === filterState.id_thuonghieu;
            const isCategoryMatch = filterState.id_cat === '' || product.id_cat === filterState.id_cat;
            const isTypeMatch = filterState.id_dong === '' || product.id_dong === filterState.id_dong;

            return isBrandMatch && isCategoryMatch && isTypeMatch;
        });

        setFilteredProduct2s(newFilteredProduct2s);
        setNoProductFound(newFilteredProduct2s.length === 0);
    };

    useEffect(() => {
        filterProducts();
    }, [product_list, filterState]);

    useEffect(() => {
        filterProduct2s();
    }, [product_list, filterState]);

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
                        {filteredProducts.map((i, index) => (
                            <SwiperSlide key={i.id}>
                                <ProductCard
                                    key={index}
                                    id={i.id}
                                    daban={i.daban}
                                    tenkhongdauvi={i.tenkhongdauvi}
                                    photo={i.photo}
                                    link={`/product/${i.id}`}
                                    tenvi={i.tenvi}
                                    giamoi={i.giamoi}
                                    gia={i.gia}
                                    id_thuonghieu={i.id_thuonghieu}
                                    id_cat={i.id_cat}
                                    id_dong={i.id_dong}
                                    khuyenmai={i.khuyenmai}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="xemtatca">
                        <a
                            href="/product"
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
                        {filteredProduct2s.map((i, index) => (
                            <SwiperSlide key={i.id}>
                                <ProductCard
                                    key={index}
                                    id={i.id}
                                    daban={i.daban}
                                    tenkhongdauvi={i.tenkhongdauvi}
                                    photo={i.photo}
                                    link={`/product/${i.id}`}
                                    tenvi={i.tenvi}
                                    giamoi={i.giamoi}
                                    gia={i.gia}
                                    id_thuonghieu={i.id_thuonghieu}
                                    id_cat={i.id_cat}
                                    id_dong={i.id_dong}
                                    khuyenmai={i.khuyenmai}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="xemtatca">
                        <a
                            href="/product"
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
    const tag_mb = checkIsMobile();
    const options = {
        table: 'photo',
        select: 'id,tenvi as ten,photo,link',
        where: 'type="banner2vi' + tag_mb + '" and hienthi >0',
    };

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _banner = await get('tab', { params: options });
            setBanner(_banner);
        };

        fetch();
    }, []);

    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 2000,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {!!banner &&
                banner.map((i) => {
                    const _url = path_upload().photo;

                    return (
                        <SwiperSlide key={i.id}>
                            <a className="bg-cover " href={i.link}>
                                <img
                                    className="w-full object-cover h-auto"
                                    src={i.photo ? _url + i.photo : Noimagebanner}
                                    alt={i.ten}
                                />
                            </a>
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
}

function PromotionSlide() {
    const options = {
        table: 'product',
        select: '*',
        where: 'hienthi >0 AND khuyenmai >0',
    };
    const [product_list, setProductList] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _product = await get('tab', { params: options });
            setProductList(_product || []);
        };

        fetch();
    }, []);

    const initialFilterState = {
        id_thuonghieu: '', //done
        id_cat: '', //done
        id_dong: '', //done
    };

    const [filterState, setFilterState] = useState(initialFilterState);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [noProductFound, setNoProductFound] = useState(false);

    const filterProducts = () => {
        const newFilteredProducts = product_list.filter((product) => {
            const isBrandMatch =
                filterState.id_thuonghieu === '' || product.id_thuonghieu === filterState.id_thuonghieu;
            const isCategoryMatch = filterState.id_cat === '' || product.id_cat === filterState.id_cat;
            const isTypeMatch = filterState.id_dong === '' || product.id_dong === filterState.id_dong;

            return isBrandMatch && isCategoryMatch && isTypeMatch;
        });

        setFilteredProducts(newFilteredProducts);
        setNoProductFound(newFilteredProducts.length === 0);
    };

    useEffect(() => {
        filterProducts();
    }, [product_list, filterState]);


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
                {filteredProducts.map((i, index) => (
                    <SwiperSlide key={i.id}>
                        <ProductCard
                            key={index}
                            id={i.id}
                            daban={i.daban}
                            tenkhongdauvi={i.tenkhongdauvi}
                            photo={i.photo}
                            link={`/product/${i.id}`}
                            tenvi={i.tenvi}
                            giamoi={i.giamoi}
                            gia={i.gia}
                            id_thuonghieu={i.id_thuonghieu}
                            id_cat={i.id_cat}
                            id_dong={i.id_dong}
                            khuyenmai={i.khuyenmai}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="xemtatca">
                <a
                    href="/promotion"
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
     const [selectedItemId, setSelectedItemId] = useState(review[0].id);

     const handleItemClick = (id) => {
         setSelectedItemId(id);
         setOpenModal(true);
     };

     const options = {
         table: 'news',
         select: '*',
         where: 'hienthi >0' + ' and type="review"',
     };

     const [reviewData, setReviewData] = useState([]);
     useEffect(() => {
         const fetch = async () => {
             const _review = await get('tab', { params: options });
             setReviewData(_review);
         };

         fetch();
     }, []);

     const _url = path_upload().review;
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
                                     src={item.photo ? _url + item.photo : Noimage}
                                     alt={item.tenvi}
                                 />
                             </div>
                             <div className="group relative">
                                 <div className=" text-white glass absolute bottom-[30px] m-4 p-4 translate-y-[80%] group-hover:translate-y-[0%] transition-transform duration-300">
                                     {/* Rating */}
                                     <div className="absolute top-0 right-0 p-2">
                                         <Rating></Rating>
                                     </div>
                                     <div className="grid gap-1 ">
                                         <RatingComponent rating={JSON.parse(item.options2).sosao} />
                                         <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                             {item.customer}
                                         </p>
                                         <div className="flex items-center mb-4">
                                             <div>
                                                 <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                                     {item.motavi}
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
                                 img={
                                     reviewData.find((item) => item.id === selectedItemId)?.icon
                                         ? _url + reviewData.find((item) => item.id === selectedItemId)?.icon
                                         : Noimage
                                 }
                                 alt="Avatar"
                                 rounded
                             />
                         </div>
                         <div className="col-span-2">
                             <span>{reviewData.find((item) => item.id === selectedItemId)?.tenvi}</span>
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
                     <div className="text-sm">{reviewData.find((item) => item.id === selectedItemId)?.motavi}</div>
                 </Modal.Header>
                 <Modal.Body>
                     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                         <div className="row-span-1">
                             <div className="flex text-center justify-center items-center">
                                 <img
                                     src={
                                         reviewData.find((item) => item.id === selectedItemId)?.photo
                                             ? _url + reviewData.find((item) => item.id === selectedItemId)?.photo
                                             : Noimage
                                     }
                                     width={500}
                                     height={500}
                                     alt={reviewData.find((item) => item.id === selectedItemId)?.tenvi}
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
                                             <img
                                                 src={item.photo ? _url + item.photo : Noimage}
                                                 alt={item.tenvi}
                                                 width={100}
                                                 height={100}
                                             />
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
                             {reviewData.find((item) => item.id === selectedItemId)?.options2 &&
                                 JSON.parse(reviewData.find((item) => item.id === selectedItemId)?.options2).thoigian}
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
      const tag_mb = checkIsMobile();

      const options = {
          table: 'photo',
          select: 'id,tenvi as ten,photo,link',
          where: 'type="quang-cao" and hienthi >0',
          order_by: 'stt,id desc',
      };

      const [banner, setBanner] = useState([]);
      const _url = path_upload().photo;
      useEffect(() => {
          const fetch = async () => {
              const _banner = await get('tab', { params: options });
              setBanner(_banner);
          };

          fetch();
      }, []);

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
                          spaceBetween: 10,
                      },
                      450: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                      },
                      600: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                      },
                      900: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                      },
                  }}
              >
                  {banner.map((item, index) => (
                      <SwiperSlide key={index}>
                          {/* border góc dưới bên trái và góc trên bên phải */}
                          <div className="item rounded-lg overflow-hidden">
                              <div className="img_sp zoom_hinh">
                                  <div className="image-container">
                                      <a href={item.href} title={item.alt}>
                                          <img
                                              className="img-fluid img-lazy img-load"
                                              //    src={item.img}
                                              src={item.photo ? _url + item.photo : Noimage}
                                              alt={item.alt}
                                              title={item.alt}
                                          />
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </>
      );
}

export default Home;
