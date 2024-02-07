

// ---------
import { Avatar, Button, Modal, Progress, Rating } from 'flowbite-react';
import { review, title } from '../../data/home';
import { useState } from 'react';
import RatingComponent from '../../components/intro/ratingComponent';

function Review() {
    const [openModal, setOpenModal] = useState(false);
    const [visibleImages, setVisibleImages] = useState(8);
    const totalImages = review.length;

    const showMore = () => {
        //
        setVisibleImages((prevVisible) => prevVisible + 3);
    };
    return (
        <>
            <div className="title-main">
                <h1 className="h1_home">{title.danhgia}</h1>
            </div>
            <div className="container mx-auto p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 gap-7 xl:gap-10">
                    {review.slice(0, visibleImages).map((item, index) => (
                        <div
                            className="card rounded overflow-hidden relative"
                            key={index}
                            onClick={() => setOpenModal(true)}
                        >
                            <div className="aspect-w-16 aspect-h-9 img_post cursor-pointer">
                                <img
                                    className="object-cover brightness-100 group-hover:brightness-50 w-full fixed-photo"
                                    src={item.img}
                                    alt="CKD COS VIETNAM"
                                />
                            </div>
                            <div className="group relative">
                                <div className=" text-white glass absolute bottom-[8px] m-4 p-4 translate-y-[80%] group-hover:translate-y-[0%] transition-transform duration-300">
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
                {visibleImages < totalImages && (
                    <div className="relative flex justify-center">
                        <button className="xemtatca flex justify-center" onClick={showMore}>
                            <p
                                className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                            >
                                {title.xemthem} 3 đánh giá
                            </p>
                        </button>
                    </div>
                )}
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
                <Modal.Header>
                    <div className="grid grid-rows-2 grid-flow-col">
                        <div className="row-span-3 flex items-center justify-center">
                            <Avatar
                                img="https://nhacchuonghinhnen.com/wp-content/uploads/2020/03/hinh-nen-gai-xinh-full-hd-cho-dien-thoai-2-scaled.jpg"
                                alt="Avatar"
                                rounded
                            />
                        </div>
                        <div className="col-span-2">
                            <span>Dương Thị Thanh Thảo</span>
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
                    <div className="text-sm">
                        Serum này mình dùng hơn 2 năm rồi, lúc trước toàn phải xách tay từ Hàn về. Nay có ở VN quá tiện
                        luôn. Điều mà tui ưng nhất là em này cải thiện nếp nhăn siêu đỉnh luôn á. Dịp giáng sinh mới đặt
                        thêm mà còn được tặng gấu bông hình chai serum nữa nà. Cưng quá luôn hihi
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {/* dùng  grid chia làm 2 phần có responsive */}
                    {/*  tablet và mobile xuống cột */}
                    <div className="grid grid-cols-2 grid-flow-col md:grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-4 2xl:grid-cols-1 2xl:gap-4">
                        <div className="row-span-3">
                            <div className="flex text-center justify-center items-center">
                                <img
                                    src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="space-y-4">
                                <h1 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                                    CÁC ĐÁNH GIÁ KHÁC VỀ SẢN PHẨM NÀY
                                </h1>
                                {/* dùng grib chia 4x4 hình ảnh */}
                                <div className="grid grid-cols-4 gap-1">
                                    <img
                                        src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                        alt="blog"
                                        width={100}
                                        height={100}
                                    />

                                    <img
                                        src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                        alt="blog"
                                        width={100}
                                        height={100}
                                    />

                                    <img
                                        src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                        alt="blog"
                                        width={100}
                                        height={100}
                                    />

                                    <img
                                        src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                        alt="blog"
                                        width={100}
                                        height={100}
                                    />
                                    <img
                                        src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                        alt="blog"
                                        width={100}
                                        height={100}
                                    />
                                    <img
                                        src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                        alt="blog"
                                        width={100}
                                        height={100}
                                    />
                                    <img
                                        src="https://ckdvietnam.com/upload/news/anyconvcomz504261741495247e485b5ca050551f51fb343c7f2eb1a-2976.webp"
                                        alt="blog"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* ngày tháng năm */}
                    <div className="text-sm">
                        <span>Ngày đánh giá: 20/12/2021</span>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Review;
