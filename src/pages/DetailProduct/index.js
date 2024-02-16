import React, { useState, useEffect } from 'react';
import './index.css';

import { Breadcrumb, Button, Rating } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi';
import { HiHome } from 'react-icons/hi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { act } from 'react-dom/test-utils';

import { title } from '../../data/title';

import { exampleData } from '../../data/exampleData';
import EditorTextParser from '../../components/editor-parser/EditorTextParser';

function DetailProduct() {
    const [images, setImages] = useState({
        img1: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
        img2: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-gau-bong-1-4800.webp',
        img3: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
        img4: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
        img5: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
        img6: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
    });

    const imageKeys = Object.keys(images);
    const [activeImageKey, setActiveImageKey] = useState(imageKeys[0]);
    const voucherdata = [
        {
            id: 1,
            voucher: 'CKD15',
            discount: '15%',
            value: '999.000đ',
        },
        {
            id: 2,
            voucher: 'CKD18',
            discount: '18%',
            value: '1.399.000đ',
        },
        {
            id: 3,
            voucher: 'CKD20',
            discount: '20%',
            value: '1.799.000đ',
        },
    ];

    const freeShip = [
        {
            id: 1,
            discount: '16.000 đ',
            value: '299.000đ',
        },
        {
            id: 2,
            discount: '30.000 đ',
            value: '399.000đ',
        },
    ];

    const codeVoucher = [
        {
            id: 1,
            code: 'FREESHIP',
            discount: 'Miễn phí ship',
            value: '299.000đ',
        },
        {
            id: 2,
            code: 'CKD15',
            discount: '15%',
            value: '999.000đ',
        },
        {
            id: 3,
            code: 'CKD18',
            discount: '18%',
            value: '1.399.000đ',
        },
        {
            id: 4,
            code: 'CKD20',
            discount: '20%',
            value: '1.799.000đ',
        },
    ];

    const [data, setData] = useState(exampleData);

    const activeImage = images[activeImageKey];

    const [amount, setAmount] = useState(1);

    const [isSticky, setSticky] = useState(false);

    const [indexDetail, setIndexDetail] = useState('Sữa rửa mặt dưỡng trắng da chuyên sâu CKD Việt Nam 100ml');

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageKey((prevKey) => {
                const currentIndex = imageKeys.indexOf(prevKey);
                const nextIndex = (currentIndex + 1) % imageKeys.length;
                return imageKeys[nextIndex];
            });
        }, 5000); // Thay đổi hình ảnh sau mỗi 5 giây

        return () => clearInterval(interval); // Hủy bỏ interval khi component unmount
    }, [imageKeys]);

    return (
        <>
            <div className="container mx-auto my-12">
                <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Trang chủ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/product">
                        <span>Sản phẩm</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/">
                        <span>{indexDetail}</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="text-4xl font-bold text-center main-color">{title.detail}</h1>
            </div>
            <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <img
                        key={activeImageKey}
                        // nhận 2 giá trị slide và cả onclick
                        src={activeImage}
                        alt=""
                        className="fade-in w-full h-full aspect-square object-cover rounded-xl"
                    />
                    <div className="flex flex-row justify-between h-40">
                        {/* cuộn ngang loopp ảnh */}
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={4}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {Object.entries(images).map(([key, value]) => (
                                <SwiperSlide key={key}>
                                    <img
                                        src={value}
                                        alt=""
                                        className="w-24 h-24 rounded-md cursor-pointer md:w-40 md:h-40"
                                        onClick={() => setActiveImageKey(key)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <div>
                        <span className=" text-green-700 font-semibold border border-green-700">CKD</span>
                        <h1 className="text-3xl font-bold">Sữa rửa mặt dưỡng trắng da chuyên sâu</h1>
                    </div>
                    <div className="text-gray-700">
                        <table>
                            <thead>
                                <tr>
                                    <td className="font-semibold">Thương hiệu:</td>
                                    <td>CKD</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Xuất xứ:</td>
                                    <td>Việt Nam</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Dung tích:</td>
                                    <td>100ml</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Giá:</td>
                                    <td>199.000đ</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="flex flex-row items-center gap-12">
                        <div className="flex flex-row items-center">
                            <button
                                className="bg-gray-200 py-2 px-5 rounded-lg text-gray-800 text-3xl"
                                onClick={() => setAmount((prev) => prev - 1)}
                            >
                                -
                            </button>
                            <span className="py-4 px-6 rounded-lg">{amount}</span>
                            <button
                                className="bg-gray-200 py-2 px-4 rounded-lg text-gray-800 text-3xl"
                                onClick={() => setAmount((prev) => prev + 1)}
                            >
                                +
                            </button>
                        </div>
                        {/* radio thêm túi giấy */}
                        <div className="flex flex-row items-center gap-4">
                            <input type="radio" name="bag" id="bag" />
                            <label htmlFor="bag">Thêm túi giấy</label>
                        </div>
                    </div>

                    <div className="  fixed-vouchers-box">
                        <div className="  fixed-vouchers-heading">
                            <h3 className="  fixed-vouchers-title">Ưu Đãi Voucher Tháng 02</h3>
                        </div>
                        <ul className="  fixed-vouchers-list">
                            {voucherdata.map((voucher) => (
                                <li className="  fixed-voucher" key={voucher.id}>
                                    <p>
                                        Nhận ngay <strong className="  color-main">{voucher.discount}</strong> khi mua
                                        hàng từ
                                        <span className="text-red-500 font-semibold"> {voucher.value}</span>
                                    </p>
                                </li>
                            ))}

                            {freeShip.map((ship) => (
                                <li className="  fixed-voucher" key={ship.id}>
                                    <p>
                                        Hỗ trợ phí ship <strong className="  color-main">{ship.discount}</strong> cho
                                        đơn hàng dưới từ
                                        <span className="text-red-500 font-semibold"> {ship.value}</span>
                                    </p>
                                </li>
                            ))}
                            <li className="  fixed-voucher">
                                <p>
                                    Nhận ngay <strong className="  color-main">mã giảm giá 10%</strong> khi bạn đăng ký
                                    là thành viên
                                </p>
                            </li>
                        </ul>
                        <p></p>
                        <p className="  fixed-vouchers-box__footer">- Voucher áp dụng khi mua hàng tại website</p>
                    </div>

                    <div className="fixed-vouchers-footer">
                        <div className="fixed-vouchers-footer-heading">
                            <h3 className="fixed-vouchers-footer-title">Các mã giảm giá có thể sử dụng:</h3>
                        </div>
                        <div className="voucher-container">
                            <ul className="fixed-vouchers-footer-list">
                                {codeVoucher.map((code, index) => (
                                    <li className="fixed-voucher" key={code.id}>
                                        <a href="/" className="p-2 text-white rounded-md">
                                            {code.code}
                                        </a>

                                        <div className="fixed-voucher-infobox">
                                            <p className="m-0 p-0">
                                                Nhập mã <strong className="color-main">{code.code}</strong>
                                            </p>{' '}
                                            <span
                                                className="px-2 "
                                                style={{
                                                    fontSize: '1rem',
                                                    color: 'var(--color-main)',
                                                    fontWeight: 700,
                                                    display: 'inline',
                                                }}
                                            >
                                                Miễn phí ship cho đơn hàng từ 299.000đ
                                                <br />
                                            </span>{' '}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="quick_ship">
                        <div className="d-flex flex-wrap center align-items-center">
                            <img
                                className="w-20 "
                                src="https://ckdvietnam.com/assets/images/now-free.png"
                                alt="CKD VIỆT NAM"
                            />
                            <b>Giao Nhanh Miễn Phí Trong 2H TP HCM</b>{' '}
                        </div>
                        <p>
                            <span style={{ fontSize: 16 }}>
                                <strong>
                                    Áp dụng<span style={{ color: '#c0392b' }}>&nbsp;free</span> cho&nbsp;đơn trên
                                    1.000.000đ, dưới 1.000.000&nbsp;hỗ trợ phí ship 16.000đ&nbsp;
                                </strong>
                            </span>
                        </p>
                    </div>
                    <div className=" container grid grid-cols-6 gap-4">
                        <div className="col-start-1"></div>
                        <div className="col-end-5 md:col-end-6">
                            <div className="flex space-x-4">
                                <Button className="flex items-center justify-center gap-2 border-2 bg-white border-green-500 hover:bg-green-10">
                                    <HiShoppingCart className="mr-2 h-8 w-8 text-green-500" />
                                </Button>
                                <Button>
                                    <span className="text-white font-bold">Zalo</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 shadow-md dark:bg-gray-800 p-4 mt-5 rounded-lg">
                {/* Left Column */}
                <div
                    // căn giữa
                    className="flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-lg "
                >
                    <h1>
                        <span className="text-3xl font-semibold text-red-500 dark:text-red-500">5.0/5</span>
                    </h1>
                    <Rating className="mb-2">
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                    </Rating>
                    <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 lượt đánh giá</p>
                </div>

                {/* Right Column */}
                {/* căn giữa */}
                <div className=" flex flex-col justify-center  gap-4 p-4 bg-white rounded-lg">
                    {/* Other content goes here */}
                    <Rating.Advanced percentFilled={100} className="mb-2">
                        5 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={17} className="mb-2">
                        4 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={8} className="mb-2">
                        3 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={4} className="mb-2">
                        2 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={1}>1 sao</Rating.Advanced>
                </div>
            </div>

            {/* EditorTextParser căn giữa */}
            {/* <div className="container mx-auto">
                        <EditorTextParser data={data} />
                    </div> */}
        </>
    );
}


export default DetailProduct;
