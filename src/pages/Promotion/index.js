import React, { useState, useEffect } from 'react';
import { Breadcrumb, Progress } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { product_list_text, review, title, categorty, type } from '../../data/home';
import EditorTextParser from '../../components/editor-parser/EditorTextParser';
import { exampleData } from '../../data/exampleData';
import { get } from '../../utils/httpRequest';

import { Link } from 'react-router-dom';
import { SkeletonProducts } from '../../components/skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, loadCart } from '../../actions';


import { formatNumber, getDiscount, path_upload } from '../../utils/ckdUtils';

import ProductCard from '../../components/UI/product-card/ProductCard';


const NotFound =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2Fnotfound%2Fkh%C3%B4ng%20t%C3%ACm%20th%E1%BA%A5y%20s%E1%BA%A3n%20ph%E1%BA%A9m.png?alt=media&token=190b2a8f-1c1d-4dc7-a013-2ad61a3837ed';

function Promotion() {
    const options = {
        table: 'product',
        select: '*',
        where: 'hienthi >0 AND khuyenmai >0',
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
            const isBrandMatch =
                filterState.id_thuonghieu === '' || product.id_thuonghieu === filterState.id_thuonghieu;
            const isCategoryMatch = filterState.id_cat === '' || product.id_cat === filterState.id_cat;
            const isTypeMatch = filterState.id_dong === '' || product.id_dong === filterState.id_dong;

            return isBrandMatch && isCategoryMatch && isTypeMatch;
        });

        setFilteredProducts(newFilteredProducts);
        setNoProductFound(newFilteredProducts.length === 0);
    };

    useEffect(() => {
        filterProducts();
    }, [product_list, filterState]);
    return (
        <>
            <div className="container mx-auto pt-5 p-5 main_fix">
                <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Trang chủ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        <span>Sản phẩm</span>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <>
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
                            <ProductCard
                                key={index}
                                id={i.id}
                                daban={i.daban}
                                tenkhongdauvi={i.tenkhongdauvi}
                                photo={i.photo}
                                link={`/san-pham/${i.tenkhongdauvi}`}
                                tenvi={i.tenvi}
                                giamoi={i.giamoi}
                                gia={i.gia}
                                id_thuonghieu={i.id_thuonghieu}
                                id_cat={i.id_cat}
                                id_dong={i.id_dong}
                                khuyenmai={i.khuyenmai}
                            />
                        ))}
                    </div>
                </>
            </div>
        </>
    );
}

export default Promotion;
