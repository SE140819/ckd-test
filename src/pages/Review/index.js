import { Avatar, Button, Modal, Progress, Rating } from 'flowbite-react';
import { review, title } from '../../data/home';
import { useEffect, useState } from 'react';
import RatingComponent from '../../components/intro/ratingComponent';
import { get } from '../../utils/httpRequest';
import { path_upload } from '../../utils/ckdUtils';
import { SkeletonReview } from '../../components/skeleton';
function Review() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
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
    const [openModal, setOpenModal] = useState(false);
    const [visibleImages, setVisibleImages] = useState(8);
    const totalImages = reviewData.length;
    const Noimage =
        'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';
    const showMore = () => {
        //
        setVisibleImages((prevVisible) => prevVisible + 4);
    };
    return (
        <>
            <div className="title-main">
                <h1 className="h1_home">{title.danhgia}</h1>
            </div>
            <div className="container mx-auto p-5">
                
                {loading ? (
                    <SkeletonReview />
                ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 gap-7 xl:gap-10">
                    {reviewData.slice(0, visibleImages).map((item, index) => (
                        <div className="card rounded overflow-hidden relative" key={index}>
                            <div
                                className="aspect-w-16 aspect-h-9 img_post cursor-pointer"
                                onClick={() => handleItemClick(item.id)}
                            >
                                <img
                                    className="object-cover brightness-100 group-hover:brightness-50 w-full fixed-photo aspect-[3/4]"
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
                )}
                {visibleImages < totalImages && (
                    <div className="relative flex justify-center">
                        <button className="xemtatca flex justify-center" onClick={showMore}>
                            <p
                                className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                            >
                                {title.xemthem} 4 đánh giá
                            </p>
                        </button>
                    </div>
                )}
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
                                            <div className="card rounded overflow-hidden relative" key={index}>
                                            <div
                                                className="aspect-w-16 aspect-h-9 img_post cursor-pointer"
                                                onClick={() => handleItemClick(item.id)}
                                            >
                                                <img
                                                    className="object-cover brightness-100 group-hover:brightness-50 w-full fixed-photo aspect-[3/4]"
                                                    src={item.photo ? _url + item.photo : Noimage}
                                                    alt={item.tenvi}
                                                />
                                            </div>
                                            <div className="group relative">
                                                <div className=" text-white glass absolute bottom-[30px] m-4 p-1 translate-y-[80%] group-hover:translate-y-[0%] transition-transform duration-300">
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

        </>
    );
}
export default Review;
