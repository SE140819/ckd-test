import React, { useState } from "react";
import { title } from "../../../data/title";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { formatNumber, getDiscount, path_upload } from '../../../utils/ckdUtils';
import { Toast } from "flowbite-react";

const Noimage = 'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';

const ProductCard = (props) => {
  const [show, setShow] = useState(false);
  const { id, daban, tenkhongdauvi, photo, link, tenvi, moi, khuyenmai, nhaplieu_daban } = props.i || props;
  const gia = +props.gia;
  const giamoi = +props.giamoi;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: id,
      tenkhongdauvi: tenkhongdauvi,
      tenvi: tenvi,
      photo: photo,
      link: link,
      gia: gia,
      giamoi: giamoi,
      moi: moi,
      khuyenmai: khuyenmai,
      nhaplieu_daban: nhaplieu_daban,
    }));

    setShow(true);
    setTimeout(() => setShow(false), 3000); // hide the toast after 3 seconds
  };

  
  return (
    <>
   
    <div className="col-span-1">
      
                                    <div className="item container flex justify-center mb-5">
                                        <div className="max-w-sm">
                                            <div className="bg-white relative transition duration-500 rounded-lg">
                                                <div className="item">
                                                    <div className="img_sp zoom_hinh">
                                                        <div className="image-container">
                                                            <a href={`/product/${id}`} title={ tenkhongdauvi}>
                                                                <img
                                                                    className="img-fluid img-lazy img-load object-cover"
                                                                    src={
                                                                         photo
                                                                            ? path_upload().product +  photo
                                                                            : Noimage
                                                                    }
                                                                    alt={ tenkhongdauvi}
                                                                    title={ tenkhongdauvi}
                                                                />

                                                              
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rounded-lg bg-white">
                                                    <button
                                                        className="bg-green-600 hover:bg-pink-400 p-4 text-white hover:text-white font-bold py-2 px-4 rounded-full"
                                                        onClick = {() => {
                                                            addToCart();
                                                            setShow(true);
                                                        }
                                                        }
                                                    >
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                    <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs line-clamp-2">
                                                        <a href={ link} title={ tenkhongdauvi}>
                                                            <span className="line-clamp-2">{ tenvi}</span>
                                                        </a>
                                                    </h1>

                                                    {/* nếu có giamoi>0 thì giá sẽ chuyển qua màu xanh có đường gạch ngang còn lại hiện giá gốc */}
                                                    { giamoi > 0 ? (
                                                        <p className="gia_sp">
                                                            <span className="gia giamoi">
                                                                {formatNumber( giamoi)} đ
                                                            </span>
                                                            <span className=" giacu">
                                                                
                                                                {formatNumber( gia)} đ
                                                            </span>
                                                        </p>
                                                    ) : (
                                                        <p className="gia_sp">
                                                            <span className="gia giamoi">
                                                                {formatNumber( gia)} đ
                                                            </span>
                                                        </p>
                                                    )}
                                                    <div className="flex justify-center">
                                                        { moi > 0 && (
                                                            <span className="border rounded p-1 border-green-500 text-green-500">
                                                                New
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="text-gray-500 text-xs">
                                                            {title.daban} { nhaplieu_daban}
                                                        </div>

                                                        {/* <Progress
                                                        progress={50}
                                                        color="pink"
                                                        textLabel="50/100"
                                                        size="lg"
                                                        //    labelProgress
                                                        labelText
                                                    /> */}
                                                    </div>
                                                </div>

                                                {!! khuyenmai &&  khuyenmai > 0 && (
                                                    <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                        {getDiscount( gia,  giamoi) + '%'}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                              
   </>
   
  );
};

export default ProductCard;
