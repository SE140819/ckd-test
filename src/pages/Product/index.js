import React, { useState, useEffect } from 'react';
import { Breadcrumb, Progress } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { product_list, review, title, categorty, type } from '../../data/home';
import EditorTextParser from '../../components/editor-parser/EditorTextParser';
import { exampleData } from '../../data/exampleData';
function Product() {
    const initialFilterState = {
        price: 0,
        brand: '',
        category: '',
        better: '',
        sold: 0,
        type: '',
        date: { type: Date, default: Date.now },
    };

    const [filterState, setFilterState] = useState(initialFilterState);
    const [filteredProducts, setFilteredProducts] = useState([...product_list]);
    const [noProductFound, setNoProductFound] = useState(false);
    const [data, setData] = useState(exampleData);;

    const filterProducts = () => {
        const newFilteredProducts = product_list.filter((product) => {
            const isPriceMatch = filterState.price === 0 || product.price <= filterState.price;

            const isBrandMatch = filterState.brand === '' || product.brand === filterState.brand;
            const isCategoryMatch = filterState.category === '' || product.category === filterState.category;
            const isBetterMatch = filterState.better === '' || product.better === filterState.better;
            const isSoldMatch = filterState.sold === 0 || product.sold >= filterState.sold;
            const isTypeMatch = filterState.type === '' || product.type === filterState.type;

            return isBrandMatch && isCategoryMatch && isBetterMatch && isSoldMatch && isTypeMatch && isPriceMatch;
        });

        setFilteredProducts(newFilteredProducts);
        setNoProductFound(newFilteredProducts.length === 0);
    };

    useEffect(() => {
        filterProducts();
    }, [filterState]); // Recalculate filteredProducts whenever filterState changes

    const handlePriceChange = (e) => {
        const { value } = e.target;
        setFilterState((prevState) => ({
            ...prevState,
            priceRange: { ...prevState.priceRange, max: parseInt(value) },
        }));
    };

    return (
        <>
            {/* dùng grid  4 sản phẩm 1 hàng */}
            <div className="container mx-auto pt-5 p-5 main_fix">
                <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Trang chủ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        <span>Sản phẩm</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="container mx-auto mt-5">
                    <form
                        className="max-w-3xl
                    mx-auto flex"
                    >
                        {/* select theo tên brand */}
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Thương hiệu
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, brand: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    <option value="">Tất cả</option>
                                    <option value="CKD">CKD</option>
                                    <option value="Lactto">Lactto</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Loại sản phẩm
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    {/* mặc định sẽ là tất cả */}
                                    <option value="">Tất cả</option>
                                    {categorty.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Theo dòng
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, type: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    <option value="">Tất cả</option>
                                    {type.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* Tìm kiếm giá */}
                        {/* <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Giá
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000000"
                                    value={filterState.priceRange.max}
                                    onChange={handlePriceChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>
                        </div> */}
                        {/*  chọn giá theo khoảng */}
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Giá
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, priceRange: { max: e.target.value } })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    <option value="0">Tất cả</option>
                                    <option value="100000">Dưới 100.000</option>
                                    <option value="200000">Dưới 200.000</option>
                                    <option value="300000">Dưới 300.000</option>
                                    <option value="400000">Dưới 400.000</option>
                                    <option value="500000">Dưới 500.000</option>
                                    <option value="600000">Dưới 600.000</option>
                                    <option value="700000">Dưới 700.000</option>
                                    <option value="800000">Dưới 800.000</option>
                                    <option value="900000">Dưới 900.000</option>
                                    <option value="1000000">Dưới 1.000.000</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Hiển thị thông báo nếu không có sản phẩm */}
                {noProductFound && (
                    <div className="flex justify-center items-center h-96">
                        {/* <img src="./assets/images/not-found/no-product.jpg" alt="Không có sản phẩm" /> */}
                        <h1 className="text-2xl font-bold">Không có sản phẩm nào phù hợp</h1>
                    </div>
                )}
                <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                    {filteredProducts.map((item, index) => (
                        <div className="col-span-1" key={index}>
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
                        </div>
                    ))}
                </div>
            
            </div>
        </>
    );
}

export default Product;
