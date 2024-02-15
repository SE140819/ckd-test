import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

import { Label, Radio, Modal } from 'flowbite-react';
import { Button, Tooltip } from 'flowbite-react';
import { Autoplay } from 'swiper/modules';
import { products, promotions, vouchers, payment_method } from '../../data/shopping';

const DEFAULT_PAYMENT_METHOD = 'TIỀN MẶT'



function Shopping() {

    const [openModal, setOpenModal] = useState(false);
    const [openModalPromotions, setOpenModalPromotions] = useState(false);
    const [quantity, setQuantity] = useState(1);

     const increaseQuantity = () => {
         setQuantity((prevQuantity) => prevQuantity + 1);
     };

     const decreaseQuantity = () => {
         if (quantity > 0) {
             setQuantity((prevQuantity) => prevQuantity - 1);
         }
     };

    return (
        <>
            <div className="container mx-auto p-5 mt-5 shadow-lg bg-white">
                <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <div className="flex items-center">
                                    <div className="pr-1 text-sm font-bold leading-tight tracking-tight text-red-500 md: dark:text-white">
                                        Giỏ hàng của bạn
                                    </div>
                                    <Tooltip
                                        content="Sản phẩm trong giỏ hàng sẽ được lưu lại trong 30 ngày"
                                        placement="bottom"
                                    >
                                        <span>
                                            <svg
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="shopee-svg-icon icon-help-center"
                                            >
                                                <g fill="none" fillRule="evenodd" transform="translate(1)">
                                                    <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
                                                    <path
                                                        fill="currentColor"
                                                        d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </Tooltip>
                                </div>
                                {products.map((product) => {
                                    return (
                                        <div
                                            key={product.id}
                                            className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                                        >
                                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                                <img className="w-full hidden md:block" src={product.img} alt="dress" />
                                                <img
                                                    className="w-50 md:hidden"
                                                    width={70}
                                                    src={product.img}
                                                    alt="dress"
                                                />
                                            </div>
                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                    <h3 className="text-sm dark:text-white xl:text-sm font-semibold leading-6 text-gray-800">
                                                        {product.name}
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
                                                                    onClick={increaseQuantity}
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
                                                                    type="text"
                                                                    defaultValue={product.quantity}
                                                                    data-hs-input-number-input=""
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                                    onClick={decreaseQuantity}
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
                                                    <p className="text-base dark:text-white xl:text-lg leading-6">
                                                        {product.price.toLocaleString('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        })}{' '}
                                                        <span className="text-red-300 line-through"> $45.00</span>
                                                    </p>
                                                    {/* button xoa */}

                                                    <button className="hover:text-red-500">
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
                                    );
                                })}
                            </div>
                            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <div className="mt-5">
                                    <div className="flex items-center">
                                        <button
                                            className=" text-sm pr-1 font-bold leading-tight tracking-tight text-blue-500 md: dark:text-white"
                                            onClick={() => setOpenModalPromotions(true)}
                                        >
                                            Quà tặng kèm theo hiện có (
                                            <span className="text-red-500">
                                                {promotions.filter((promotion) => promotion.price === 0).length}
                                            </span>
                                            )
                                        </button>

                                        <Tooltip content="Quà tặng kèm theo khi mua sản phẩm" placement="bottom">
                                            <span>
                                                <svg
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    width="16"
                                                    className="shopee-svg-icon icon-help-center"
                                                >
                                                    <g fill="none" fillRule="evenodd" transform="translate(1)">
                                                        <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
                                                        <path
                                                            fill="currentColor"
                                                            d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <div className="col-span- mb-3">
                                <fieldset className="flex flex-col gap-4">
                                    <div className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-sm dark:text-white">
                                        Hình thức thanh toán
                                    </div>
                                    {payment_method.map((payment, index) => (
                                        <div key={index}
                                         className="flex items-center gap-2">
                                            <Radio
                                                id={payment.id}
                                                name="countries"
                                                value={payment.name}
                                                defaultChecked={payment.name === DEFAULT_PAYMENT_METHOD}
                                            />
                                            <img src={payment.img} alt={payment.name} width="30px" height="30px" />
                                            <div className="text-sm font-bold leading-tight tracking-tight text-black-500 md:text-sm dark:text-white">
                                                Phương thức thanh toán {payment.name}
                                            </div>
                                        </div>
                                    ))}
                                </fieldset>
                            </div>
                            <div className="col-span-1 ">
                                <div className="overflow-x-auto">
                                    <div className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-sm dark:text-white">
                                        Thông tin người nhận:
                                    </div>
                                    <div className="grid p-3 border rounded-md">
                                        <form>
                                            <div className="mb-6">
                                                <label
                                                    htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Họ và tên
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first_name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Nguyễn Văn A"
                                                    required=""
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label
                                                    htmlFor="phone"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Số điện thoại
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="0123-456-789"
                                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                    required=""
                                                />
                                            </div>

                                            <div className="mb-6">
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="nguyenvana@gmail.com"
                                                    required=""
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label
                                                    htmlFor="address"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Địa chỉ:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                />
                                            </div>
                                            {/* yêu cầu khác */}
                                            <div className="mb-6">
                                                <label
                                                    htmlFor="request"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Yêu cầu khác
                                                </label>
                                                <textarea
                                                    type="text"
                                                    id="request"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* nút thanh toán */}
                        </div>
                    </div>
                </div>
            </div>
            {/* zindex = 5 */}
            <div className="sticky bottom-0 z-50">
                {/* shadow top */}
                <div className="container mx-auto shadow-lg">
                    <div className="container bg-gray-50 border-gray-200 border-b pb-4">
                        <div className="text-sm font-bold leading-tight tracking-tight text-red-500 md:text-sm dark:text-white">
                            Voucher giảm giá:
                        </div>
                        <div>
                            <div className="flex items-center gap-2 justify-end">
                                <input
                                    type="text"
                                    className="w-4/4 border border-r-4 border-gray-300 rounded-lg text-sm "
                                    placeholder="Nhập mã giảm giá"
                                />
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => setOpenModal(true)}
                                >
                                    Chọn Voucher
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container flex justify-center items-center w-full">
                        <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between w-full">
                                        <p className="text-sm dark:text-white leading-4 text-gray-800">
                                            Tạm tính:
                                        </p>
                                        <p className="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                            45.000.000đ
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-sm dark:text-white leading-4 text-gray-800">
                                            Phí vận chuyển:
                                        </p>
                                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">0đ</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-sm  dark:text-white font-semibold leading-4 text-gray-800">
                                        Tổng cộng:
                                    </p>
                                    <p className="text-sm dark:text-gray-300 font-semibold leading-4 text-gray-600">
                                        45.000.000đ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="hover:bg-bluepink dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-full bg-bluepink text-base font-medium leading-4 text-white">
                        Thanh toán
                    </button>
                </div>
            </div>
            <Modal show={openModalPromotions} onClose={() => setOpenModalPromotions(false)}>
                <Modal.Header></Modal.Header>

                <Modal.Body>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Hình ảnh</Table.HeadCell>
                            <Table.HeadCell>Tên sản phẩm</Table.HeadCell>
                            <Table.HeadCell>Số lượng</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y overflow-y-auto h-40">
                            {promotions.map((promotion, index) => (
                                <Table.Row
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    key={index}
                                >
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <img src={promotion.img} alt="ảnh sản phẩm" width="100px" height="100px" />
                                    </Table.Cell>
                                    <Table.Cell>{promotion.name}</Table.Cell>
                                    <Table.Cell>{promotion.quantity}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Modal.Body>

                <Modal.Footer></Modal.Footer>
            </Modal>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    <div className="flex items-center">
                        <span className="text-sm">Chọn Voucher</span>
                        <Tooltip content="Chọn voucher để được giảm giá sản phẩm" placement="bottom">
                            <span>
                                <svg
                                    height="16"
                                    viewBox="0 0 16 16"
                                    width="16"
                                    className="shopee-svg-icon icon-help-center"
                                >
                                    <g fill="none" fillRule="evenodd" transform="translate(1)">
                                        <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
                                        <path
                                            fill="currentColor"
                                            d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                        </Tooltip>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <fieldset className="flex flex-col gap-4">
                        <div className="grid grid-cols-12 items-center p-4 bg-gray-100 dark:bg-gray-900 rounded-md justify-end">
                            {vouchers.map((voucher, index) => (
                                <div
                                key={index}
                                >
                                     <Label
                                    
                                     htmlFor={voucher.id} className="p-5 col-span-11 bg-gray-100 ">
                                        <div className="flex items-center gap-2">
                                            <svg
                                                fill="#000000"
                                                width="40px"
                                                height="40px"
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g data-name="33 discount ticket" id="_33_discount_ticket">
                                                    <path d="M57.46,27.91H59.5a1,1,0,0,0,1-1V18.76a2.027,2.027,0,0,0-2.02-2.02H5.52A2.027,2.027,0,0,0,3.5,18.76v8.15a1,1,0,0,0,1,1H6.54a4.09,4.09,0,1,1,0,8.18H4.5a1,1,0,0,0-1,1v8.15a2.027,2.027,0,0,0,2.02,2.02H58.48a2.027,2.027,0,0,0,2.02-2.02V37.09a1,1,0,0,0-1-1H57.46a4.09,4.09,0,1,1,0-8.18Zm0,10.18H58.5l-.02,7.17L5.5,45.24V38.09H6.54a6.09,6.09,0,0,0,0-12.18H5.5l.02-7.17,52.98.02v7.15H57.46a6.09,6.09,0,0,0,0,12.18Z" />

                                                    <path d="M32,20.814a1,1,0,0,0-1,1v2.038a1,1,0,1,0,2,0V21.814A1,1,0,0,0,32,20.814Z" />

                                                    <path d="M32,39.148a1,1,0,0,0-1,1v2.038a1,1,0,1,0,2,0V40.148A1,1,0,0,0,32,39.148Z" />

                                                    <path d="M32,33.037a1,1,0,0,0-1,1v2.037a1,1,0,0,0,2,0V34.037A1,1,0,0,0,32,33.037Z" />

                                                    <path d="M32,26.926a1,1,0,0,0-1,1v2.037a1,1,0,0,0,2,0V27.926A1,1,0,0,0,32,26.926Z" />

                                                    <path d="M16.722,26.889H20.8a1,1,0,0,0,0-2H16.722a1,1,0,0,0,0,2Z" />

                                                    <path d="M16.722,33h6.111a1,1,0,0,0,0-2H16.722a1,1,0,0,0,0,2Z" />

                                                    <path d="M24.871,37.111H16.722a1,1,0,0,0,0,2h8.149a1,1,0,1,0,0-2Z" />

                                                    <path d="M39.13,24.89a3.035,3.035,0,1,0,3.04,3.04A3.045,3.045,0,0,0,39.13,24.89Zm0,4.07a1.035,1.035,0,1,1,1.04-1.03A1.037,1.037,0,0,1,39.13,28.96Z" />

                                                    <path d="M47.28,33.04a3.035,3.035,0,1,0,3.03,3.03A3.037,3.037,0,0,0,47.28,33.04Zm0,4.07a1.035,1.035,0,1,1,0-2.07,1.035,1.035,0,0,1,0,2.07Z" />

                                                    <path d="M49,26.2a1,1,0,0,0-1.414,0L37.4,36.386A1,1,0,1,0,38.818,37.8L49,27.614A1,1,0,0,0,49,26.2Z" />
                                                </g>
                                            </svg>
                                            <div className="text-xl font-bold leading-tight tracking-tight text-black-500 md:text-sm dark:text-white">
                                                {voucher.name}
                                            </div>
                                        </div>
                                    </Label>
                                    <Radio
                                        className="flex justify-end"
                                        id={voucher.id}
                                        name="voucher"
                                        value={voucher.type}
                                        defaultChecked
                                    />
                                
                                </div>
                                   
                            ))}
                        </div>
                    </fieldset>
                </Modal.Body>

                <Modal.Footer>
                    {/* nút xác nhận nằm bên tay phải */}
                    <Button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setOpenModal(false)}
                    >
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Shopping;