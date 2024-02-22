import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

import { Label, Radio, Modal } from 'flowbite-react';
import { Button, Tooltip } from 'flowbite-react';
import { Autoplay } from 'swiper/modules';
import { products, promotions, vouchers, payment_method } from '../../data/shopping';
import { useSelector } from 'react-redux';
import { formatNumber, path_upload } from '../../utils/ckdUtils';
import { removeFromCart, decreaseQuantity, updateQuantity } from '../../actions';
import { useDispatch } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const DEFAULT_PAYMENT_METHOD = 'TIỀN MẶT';

const Noimage =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';

function countProducts(cart) {
    return cart.reduce((count, product) => {
        count[product.id] = (count[product.id] || 0) + 1;
        return count;
    }, {});
}

// const cart = JSON.parse(localStorage.getItem('cart'));

// console.log('cart :>> ', cart);
// handleRemove
function handleRemove(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.location.reload();
}

// handleDecrease

function TemporaryPayment(cart) {
    return cart.reduce((total, product) => {
        //  ép thành kiểu dữ liệu number
        return total + Number(product.giamoi);
    }, 0);
}

function Shopping({ product }) {
    const dispatch = useDispatch();
    const [voucher, setVoucher] = useState('');
    const [selectedVoucher, setSelectedVoucher] = useState('');
    const [discount, setDiscount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [cart, setCart] = useState([]);
    const productCounts = countProducts(cart);
    //  lưu productCounts vào localstorage

    const uniqueProducts = cart.reduce((unique, product) => {
        return unique.some((item) => item.id === product.id) ? unique : [...unique, product];
    }, []);

    const temporaryPayment = TemporaryPayment(cart);
    console.log('TemporaryPayment :>> ', temporaryPayment);
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        if (cartData) {
            setCart(cartData);
        }
    }, []);

    const handleVoucherSelect = (selectedVoucher) => {
        setOpenModal(true);
        setVoucher(selectedVoucher);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleVoucherChange = (e) => {
        setSelectedVoucher(e.target.value);
        setDiscount(vouchers.find((voucher) => voucher.name === e.target.value)?.value || 0);
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity(product.id));
    };

    const handleQuantityChange = (newQuantity) => {
        dispatch(updateQuantity(product.id, newQuantity));
    };
    const [openModal, setOpenModal] = useState(false);
    const [openModalPromotions, setOpenModalPromotions] = useState(false);
    const [openModalConfirm, setOpenModalConfirm] = useState(false);
    const _url = path_upload().product;
    console.log('cart :>> ', cart);
    console.log('productCounts :>> ', productCounts);
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

                                {uniqueProducts.length === 0 ? (
                                    <div className="flex justify-center items-center w-full h-96">
                                        <div className="flex flex-col justify-center items-center space-y-4">
                                            <div className="text-2xl dark:text-white">Giỏ hàng trống</div>
                                            <div className="text-sm dark:text-white">
                                                Hãy chọn sản phẩm để thêm vào giỏ hàng
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    uniqueProducts.map((product) => {
                                        return (
                                            <div
                                                key={product.id}
                                                className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                                            >
                                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                                    <img
                                                        className="w-full hidden md:block"
                                                        src={product.photo ? `${_url}${product.photo}` : Noimage}
                                                        alt={product.tenvi}
                                                    />
                                                    <img
                                                        className="w-50 md:hidden"
                                                        width={70}
                                                        src={product.photo ? `${_url}${product.photo}` : Noimage}
                                                        alt={product.tenvi}
                                                    />
                                                </div>
                                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                        <h3 className="text-sm dark:text-white xl:text-sm font-semibold leading-6 text-gray-800">
                                                            {product.tenvi}
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
                                                                        onClick={handleDecrease}
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
                                                                        type="number"
                                                                        value={productCounts[product.id] || 1}
                                                                        onChange={(e) => {
                                                                            if (e.target.value <= 0) {
                                                                                e.target.value = 1;
                                                                            }
                                                                            handleQuantityChange(e.target.value);
                                                                        }}
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                                        onClick={() => handleRemove(product)}
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
                                                            {formatNumber(
                                                                product.giamoi * productCounts[product.id] || 1,
                                                            )}
                                                            đ
                                                        </p>
                                                        <p className="text-red-300 xl:text-lg line-through">
                                                            {formatNumber(product.gia * productCounts[product.id] || 1)}
                                                            đ
                                                        </p>
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
                                        );
                                    })
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

                        <div className="md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <div className="col-span- mb-3">
                                <fieldset className="flex flex-col gap-4">
                                    <div className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-sm dark:text-white">
                                        Hình thức thanh toán
                                    </div>
                                    {payment_method.map((payment, index) => (
                                        <div key={index} className="flex items-center gap-2">
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
                    <div className="container bg-gray-50 border-gray-200 border-b">
                        <div>
                            <div className="flex items-center gap-2 justify-end">
                                <div className="text-[0.6rem] font-bold leading-tight tracking-tight text-red-500 md:text-sm dark:text-white">
                                    Voucher giảm giá:
                                </div>
                                <input
                                    type="text"
                                    className="w-4/4 border border-r-4 border-gray-300 rounded-lg text-sm "
                                    placeholder="Nhập mã giảm giá"
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
                            <div className="flex flex-col px-2 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b">
                                    <div className="flex justify-between w-full">
                                        <p className="text-sm dark:text-white leading-4 text-gray-800">Tạm tính:</p>
                                        <p className="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                            {formatNumber(temporaryPayment)}đ
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-sm dark:text-white leading-4 text-gray-800">Giảm giá:</p>
                                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                            - {formatNumber((temporaryPayment * discount) / 100)}đ
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
                                                {voucher.money ? formatNumber(voucher.money) : formatNumber(30000)}đ
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
                                            temporaryPayment -
                                                (temporaryPayment * discount) / 100 +
                                                (selectedVoucher === 'FreeShip' ? 0 : voucher.money || 30000),
                                        )}
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
                                    onClick={() => {
                                        handleRemove(cart.find((product) => product.id === product.id));
                                        setOpenModalConfirm(false);
                                    }}
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
export default Shopping;