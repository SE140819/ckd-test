import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

import { Label, Radio, Modal } from 'flowbite-react';
import { Button, Tooltip } from 'flowbite-react';
import { Autoplay } from 'swiper/modules';
import { products, promotions, vouchers, payment_method } from '../../data/shopping';
import { useSelector } from 'react-redux';
import { formatNumber, path_upload } from '../../utils/ckdUtils';
import { useDispatch } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';


import { Link } from 'react-router-dom';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';
import { cartActions } from '../../store/shopping-cart/cartSlice';
import {
    CartItem,
} from './CartItem';

const DEFAULT_PAYMENT_METHOD = 'Phương thức thanh toán Tiền mặt';

const Noimage =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';

const NofoundInCart =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2Fnotfound%2Fkh%C3%B4ng%20t%C3%ACm%20th%E1%BA%A5y%20s%E1%BA%A3n%20ph%E1%BA%A9m%20trong%20gi%E1%BB%8F%20h%C3%A0ng.png?alt=media&token=60a133f4-e278-4bb6-a282-72d246617a9a';


    
    const Shopping= () => {
        const dispatch = useDispatch();
        const [voucher, setVoucher] = useState('');
        const [selectedVoucher, setSelectedVoucher] = useState('');
        const [discount, setDiscount] = useState(0);
        const [inputValue, setInputValue] = useState('');

        const [openModal, setOpenModal] = useState(false);
        const [openModalPromotions, setOpenModalPromotions] = useState(false);
        const [openModalConfirm, setOpenModalConfirm] = useState(false);
        const cartProducts = useSelector((state) => state.cart.cartItems);
        const totalAmount = useSelector((state) => state.cart.totalAmount);


        const handleVoucherSelect = (selectedVoucher) => {
            setOpenModal(true);
            setVoucher(selectedVoucher);
        };

        const handleVoucherChange = (e) => {
            setSelectedVoucher(e.target.value);
            setDiscount(vouchers.find((voucher) => voucher.name === e.target.value)?.value || 0);
        };

        const handleInputChange = (event) => {
            setInputValue(event.target.value);
        };

         console.log('cartProducts', cartProducts);

        const toggleCart = () => {
          dispatch(cartUiActions.toggle());
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
                                    {cartProducts.length === 0 ? (
                                        <div className="flex justify-center items-center w-full h-80">
                                            <div className="flex flex-col justify-center items-center space-y-4">
                                                <img src={NofoundInCart} width="200" height="200" alt="No Data Icon" />
                                                <div className="text-2xl dark:text-white">Giỏ hàng trống</div>
                                                <div className="text-sm dark:text-white">
                                                    Hãy chọn sản phẩm để thêm vào giỏ hàng
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        cartProducts.map((item) => <CartItem key={item.id} i={item} />)
                                    )}
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
                            <div className="">
                                <div className="col-span- mb-3">
                                    <fieldset className="flex flex-col gap-1">
                                        <div className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-sm dark:text-white">
                                            Hình thức thanh toán
                                        </div>
                                        {payment_method.map((payment, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <Radio
                                                    id={payment.id}
                                                    name="payment"
                                                    value={payment.name}
                                                    // nếu không có giá trị thì mặc định là thanh toán tiền mặt
                                                    defaultChecked={
                                                        DEFAULT_PAYMENT_METHOD === payment.name ? true : false
                                                    }
                                                />
                                                <img src={payment.img} alt={payment.name} width="30px" height="30px" />
                                                <div className="text-sm font-bold leading-tight tracking-tight text-black-500 md:text-sm dark:text-white">
                                                    {payment.name}
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
                {/* nếu không có sản phẩm trong giỏ hàng thì không hiện thị tổng tiền */}
                {cartProducts.length > 0 && (
                    <div className="sticky bottom-0">
                        {/* shadow top */}
                        <div className="container mx-auto shadow-lg">
                            <div className="container bg-gray-50 border-gray-200 border-b">
                                <div>
                                    <div className="flex items-center gap-2 justify-end">
                                        <div className="text-[0.6rem] font-bold leading-tight tracking-tight text-red-500 md:text-sm dark:text-white">
                                            Voucher giảm giá:
                                        </div>
                                        <input
                                            // khoong cho nhập
                                            disabled
                                            type="text"
                                            className="w-4/4 border border-r-4 border-gray-300 rounded-lg text-sm "
                                            placeholder=""
                                            value={selectedVoucher}
                                            onChange={handleInputChange}
                                        />
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleVoucherSelect(voucher)}
                                        >
                                            Chọn Voucher
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="container flex justify-center items-center w-full">
                                <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                    <div className="flex flex-col px-2 md:p-1 xl: w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b">
                                            <div className="flex justify-between w-full">
                                                <p className="text-sm dark:text-white leading-4 text-gray-800">
                                                    Tạm tính:
                                                </p>
                                                <p className="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                    {formatNumber(totalAmount)}đ
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-sm dark:text-white leading-4 text-gray-800">
                                                    Giảm giá:
                                                </p>
                                                <p className="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                    - {formatNumber((totalAmount * discount) / 100)}đ
                                                </p>
                                            </div>

                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-sm dark:text-white leading-4 text-gray-800">
                                                    Phí vận chuyển:
                                                </p>
                                                {selectedVoucher === 'FreeShip' ? (
                                                    <p className="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                        {formatNumber(0)}đ
                                                    </p>
                                                ) : (
                                                    <p className="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                        {voucher.money
                                                            ? formatNumber(voucher.money)
                                                            : formatNumber(30000)}
                                                        đ
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-sm  dark:text-white font-semibold leading-4 text-gray-800">
                                                Tổng cộng:
                                            </p>
                                            <p className="text-sm dark:text-gray-300 font-semibold leading-4 text-gray-600">
                                                {formatNumber(
                                                    totalAmount -
                                                        (totalAmount * discount) / 100 +
                                                        (selectedVoucher === 'FreeShip'
                                                            ? 0
                                                            : voucher.money
                                                            ? voucher.money
                                                            : 30000),
                                                )}
                                                đ
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
                )}
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
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
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
                            {vouchers.map((voucher, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Radio
                                        id={voucher.id}
                                        name="voucher"
                                        value={voucher.name}
                                        checked={selectedVoucher === voucher.name}
                                        onChange={handleVoucherChange}
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-sm font-bold leading-tight tracking-tight text-black-500 md:text-sm dark:text-white">
                                            {voucher.name}
                                        </div>
                                        <div className="text-sm font-bold leading-tight tracking-tight text-black-500 md:text-sm dark:text-white">
                                            {voucher.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
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
      };
      
      export default Shopping;