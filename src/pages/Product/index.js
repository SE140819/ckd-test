import React, { useState, useEffect } from 'react';
import { Breadcrumb, Progress } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { product_list_text, review, title, categorty, type } from '../../data/home';
import EditorTextParser from '../../components/editor-parser/EditorTextParser';
import { exampleData } from '../../data/exampleData';
import { get } from '../../utils/httpRequest';
import { formatNumber, getDiscount, path_upload } from '../../utils/ckdUtils';
import { Link } from 'react-router-dom';

const Noimage =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';

const BAN = 'album-sneaker-shoes';
// ngayhethan  khác 0
function Product() {
    const options = {
        table: 'product',
        select: '*',
        where: 'hienthi >0',
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
            // const isPriceMatch = filterState.price === 0 || product.price <= filterState.price;
            const isBrandMatch =
                filterState.id_thuonghieu === '' || product.id_thuonghieu === filterState.id_thuonghieu;
            const isCategoryMatch = filterState.id_cat === '' || product.id_cat === filterState.id_cat;
            // const isBetterMatch = filterState.better === '' || product.better === filterState.better;
            // const isSoldMatch = filterState.sold === 0 || product.sold >= filterState.sold;
            const isTypeMatch = filterState.id_dong === '' || product.id_dong === filterState.id_dong;

            return isBrandMatch && isCategoryMatch && isTypeMatch /*  && isBetterMatch && isSoldMatch */;
        });
        console.log('newFilteredProducts', newFilteredProducts);
        setFilteredProducts(newFilteredProducts);
        setNoProductFound(newFilteredProducts.length === 0);
    };

    useEffect(() => {
        filterProducts();
    }, [product_list, filterState]);

    const _url = path_upload().product;

    console.log('product_list', product_list);
    console.log('filterProducts', filteredProducts);
    console.log('filterState', filterState);
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
                                    onChange={(e) => setFilterState({ ...filterState, id_thuonghieu: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    <option value="">Tất cả</option>
                                    <option value="65">CKD</option>
                                    <option value="66">Lactto</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Loại sản phẩm
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, id_cat: e.target.value })}
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
                                    onChange={(e) => setFilterState({ ...filterState, id_dong: e.target.value })}
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
                        {/* <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Giá
                                </label>
                                <select
                                    onChange={(e) =>
                                        setFilterState({ ...filterState, priceRange: { max: e.target.value } })
                                    }
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
                        </div> */}
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
                    {filteredProducts.map((i, index) => (
                        <div className="col-span-1" key={index}>
                            <div className="item container flex justify-center mb-5">
                                <div className="max-w-sm">
                                    <div className="bg-white relative transition duration-500 rounded-lg">
                                        <div className="item">
                                            <div className="img_sp zoom_hinh">
                                                <div className="image-container">
                                                    <Link to={`/product/${i.id}`} title={i.tenkhongdauvi}>
                                                        <img
                                                            className="img-fluid img-lazy img-load object-cover"
                                                            src={
                                                                i.photo ? path_upload().product + i.photo : Noimage
                                                                // nếu i.tenvi = BAN thì sẽ hiển thị Noimage
                                                            }
                                                            alt={i.tenkhongdauvi}
                                                            title={i.tenkhongdauvi}
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-lg bg-white">
                                            {/* reposive */}
                                            <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                <a href={i.link} title={i.tenkhongdauvi}>
                                                    {i.tenvi}
                                                </a>
                                            </h1>
                                            {/* nếu có giamoi>0 thì giá sẽ chuyển qua màu xanh có đường gạch ngang còn lại hiện giá gốc */}
                                            {i.giamoi > 0 ? (
                                                <p className="gia_sp">
                                                    <span className="gia giamoi">
                                                        {/* formatNumber */}
                                                        {formatNumber(i.giamoi)} đ
                                                    </span>
                                                    <span className=" giacu">
                                                        {/* formatNumber */}
                                                        {formatNumber(i.gia)} đ
                                                    </span>
                                                </p>
                                            ) : (
                                                <p className="gia_sp">
                                                    <span className="gia giamoi">
                                                        {/* formatNumber */}
                                                        {formatNumber(i.gia)} đ
                                                    </span>
                                                </p>
                                            )}
                                            <div className="flex justify-center">
                                                {i.moi > 0 && (
                                                    <span className="border rounded p-1 border-green-500 text-green-500">
                                                        New
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mt-2">
                                                <div className="text-gray-500 text-xs">
                                                    {title.daban} {i.nhaplieu_daban}
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

                                        <span
                                            className="cart-buy addcart transition"
                                            data-id="157"
                                            data-action="buynow"
                                        ></span>
                                        {!!i.khuyenmai && i.khuyenmai > 0 && (
                                            <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                {getDiscount(i.gia, i.giamoi) + '%'}
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
