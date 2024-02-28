import React, { useState, useEffect } from 'react';
import { Breadcrumb, Progress } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { product_list_text, review, title, categorty, type } from '../../data/home';
import EditorTextParser from '../../components/editor-parser/EditorTextParser';
import { exampleData } from '../../data/exampleData';
import { get } from '../../utils/httpRequest';
import { formatNumber, getDiscount, path_upload } from '../../utils/ckdUtils';
import { Link } from 'react-router-dom';
import { SkeletonProducts } from '../../components/skeleton';
 import { useDispatch, useSelector } from 'react-redux';
 import { addToCart, loadCart } from '../../actions';
import ProductCard from '../../components/UI/product-card/ProductCard';
const Noimage =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';

const NotFound =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2Fnotfound%2Fkh%C3%B4ng%20t%C3%ACm%20th%E1%BA%A5y%20s%E1%BA%A3n%20ph%E1%BA%A9m.png?alt=media&token=190b2a8f-1c1d-4dc7-a013-2ad61a3837ed';
const BAN = 'album-sneaker-shoes';
// ngayhethan  khác 0
function Product() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch(loadCart(JSON.parse(savedCart)));
        }
    }, [dispatch]);
    const cart = useSelector((state) => state.cart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const options = {
        table: 'product',
        select: '*',
        where: 'hienthi >0',
    };

    const options2 = {
        table: 'product_list',
        select: 'id,tenvi as ten,tenkhongdauvi as link,photo',
        where: 'type="san-pham" and hienthi >0',
        order_by: 'stt,id desc',
    };
    const [product_list, setProductList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);
    useEffect(() => {
        const fetch = async () => {
            const _product = await get('tab', { params: options });
            setProductList(_product || []);
        };

        fetch();
    }, []);

    const [categorty, setCategorty] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _category = await get('tab', { params: options2 });
            setCategorty(_category || []);
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

        setFilteredProducts(newFilteredProducts);
        setNoProductFound(newFilteredProducts.length === 0);
    };

    useEffect(() => {
        filterProducts();
    }, [product_list, filterState]);

    const _url = path_upload().product;
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
                {loading ? (
                    <SkeletonProducts />
                ) : (
                    <>
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
                                            onChange={(e) =>
                                                setFilterState({ ...filterState, id_thuonghieu: e.target.value })
                                            }
                                            className="w-full px-4 py-2 border rounded-lg"
                                        >
                                            <option value="">Tất cả</option>
                                            <option value="65">CKD</option>
                                            <option value="66">Lacto</option>
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
                                                    {item.ten}
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
                                            onChange={(e) =>
                                                setFilterState({ ...filterState, id_dong: e.target.value })
                                            }
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
                            </form>
                        </div>
                        {/* Hiển thị thông báo nếu không có sản phẩm */}
                        {noProductFound && (
                            <div className="flex justify-center items-center h-96">
                                <h1 className="text-2xl font-bold">
                                    <img src={NotFound} width="250" height="250" alt="No Data Icon" />
                                    <span>Không có sản phẩm</span>
                                </h1>
                            </div>
                        )}
                        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                            {filteredProducts.map((i, index) => (
                                <>
                                    <ProductCard
                                        key={index}
                                        id={i.id}
                                        daban={i.daban}
                                        tenkhongdauvi={i.tenkhongdauvi}
                                        photo={i.photo}
                                        link={`/product/${i.id}`}
                                        tenvi={i.tenvi}
                                        giamoi={i.giamoi}
                                        gia={i.gia}
                                        id_thuonghieu={i.id_thuonghieu}
                                        id_cat={i.id_cat}
                                        id_dong={i.id_dong}
                                        khuyenmai={i.khuyenmai}
                                    />
                                </>
                            ))}
                        </div>

                        <div></div>
                    </>
                )}
            </div>
        </>
    );
}



export default Product;
