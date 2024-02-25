import React, { useState } from 'react';
import { Label, Radio, Modal } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button, Tooltip } from 'flowbite-react';

import {formatNumber, path_upload } from '../../utils/ckdUtils';


const Noimage =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';




export const CartItem = (props) => {
    const { id, tenkhongdauvi,tenvi, photo,link, gia, giamoi, moi,khuyenmai,quantity, nhaplieu_daban } = props.i || props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _url = path_upload().product;

    const [openModalConfirm, setOpenModalConfirm] = useState(false);
    
    const incrementItem = (event) => {
        event.preventDefault();
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
    }

    const decreaseItem = (event) => {
        event.preventDefault();
        dispatch(cartActions.removeItem(id));
    }


    const deleteItem = (event) => {
        event.preventDefault();
        dispatch(cartActions.deleteItem(id));
    }

    return (
        <>
           <div
        key={id}
        className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
    >
        <div className="pb-4 md:pb-8 w-full md:w-40">
            <img
                className="w-full hidden md:block"
                src={photo ? `${_url}${  photo}` : Noimage}
                alt={tenvi}
            />
            <img
                className="w-50 md:hidden"
                width={70}
                src={photo ? `${_url}${  photo}` : Noimage}
                alt={tenvi}
            />
        </div>
        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
                <h3 className="text-sm dark:text-white xl:text-sm font-semibold leading-6 text-gray-800">
                    {tenvi}
                </h3>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
                <div className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                    <div
                        className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                        data-hs-input-number=""
                    >
                        <div className="flex items-center gap-x-1.5">
                            <button
                                type="button"
                                onClick={decreaseItem}
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                </svg>
                            </button>
                            <input
                                className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                                type="string"
                                disabled
                                value={quantity}
                               
                            />
                            <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={incrementItem}
                                data-hs-input-number-increment=""
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* máy tính sẽ giá tiền mới và giá tiền cũ trên 1 dòng và trên điện thoại sẽ xuống hàng mới */}
                <div className="flex flex-col justify-start items-start space-y-2">
                    <div className="text-sm dark:text-white xl:text-sm font-semibold leading-6 text-gray-800">
                        {formatNumber(
                              giamoi * quantity || 1,
                        )}
                      
                        đ
                    </div>
                    <div className="text-sm dark:text-white xl:text-sm font-semibold leading-6 text-gray-800 line-through">
                        {formatNumber(
                              gia * quantity || 1,
                        )}
                        đ
                    </div>
                </div>
                {/* button xoa */}

                <button
                    className="hover:text-red-500"
                    onClick={() => {
                        setOpenModalConfirm(true);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <Modal show={openModalConfirm} size="md" onClose={() => setOpenModalConfirm(false)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?
                        </h3>
                        <div className="flex justify-center gap-4">
                            {
                                <Button
                                    color="red"
                                    onClick={deleteItem}
                                >
                                    Xóa
                                </Button>
                            }
                            <Button color="gray" onClick={() => setOpenModalConfirm(false)}>
                                Hủy
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
     
    );

}

export default CartItem;