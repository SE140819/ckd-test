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



const BAN = 'album-sneaker-shoes';
// ngayhethan  khác 0
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


    // logic card start
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = product_list || [];
  
    const productPerPage = 4;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
      visitedPage,
      visitedPage + productPerPage
    );
  
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    console.log("Products", searchedProduct);

    // logic card end
   

    // console.log('product_list', product_list);
    // console.log('filterProducts', filteredProducts);
    // console.log('filterState', filterState);
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
                
                    <>
                        {/* Hiển thị thông báo nếu không có sản phẩm */}
                        {noProductFound && (
                            <div className="flex justify-center items-center h-96">
                                {/* <img src="./assets/images/not-found/no-product.jpg" alt="Không có sản phẩm" /> */}
                                <h1 className="text-2xl font-bold">Không có sản phẩm nào phù hợp</h1>
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
                                    link={`/product/${i.id}`}
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
