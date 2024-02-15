import React, { useState, useEffect } from 'react';
import { Breadcrumb, Progress } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { product_list, review, title } from '../../data/home'

function Product() {
   
    const initialFilterState = {
        priceRange: {
            min: 0,
            max: Infinity,
        },
        brand: "",
        category: "",
        color: "", // new filter for color
        // ... other filters as needed
    };
    
    const [filterState, setFilterState] = useState(initialFilterState)
    const [filteredProducts, setFilteredProducts] = useState([
        ...product_list
    ]);
    const filterProducts = () => {
        const newFilteredProducts = product_list.filter((product) => {
            const isPriceInRange =
                product.price >= filterState.priceRange.min &&
                product.price <= filterState.priceRange.max;
            const isBrandMatch =
                filterState.brand === "" || product.brand === filterState.brand;
            const isCategoryMatch =
                filterState.category === "" ||
                product.category === filterState.category;
            const isColorMatch =
                filterState.color === "" ||
                product.color === filterState.color; // new filter logic for color
            // ... other filters as needed
            return isPriceInRange && isBrandMatch && isCategoryMatch && isColorMatch; // include new filter in return
        });
        setFilteredProducts(newFilteredProducts);
    };
    
    useEffect(() => {
        filterProducts();
    }, [filterState]); // Recalculate filteredProducts whenever filterState changes
    

    console.log('filteredProducts', filteredProducts);
    

    console.log('filteredProducts', filteredProducts);
    return (
        <>
            {/* dùng grid  4 sản phẩm 1 hàng */}
        <div className="container mx-auto pt-5">
        <Breadcrumb aria-label="Breadcrumb"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Trang chủ
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Giới thiệu</Breadcrumb.Item>
    </Breadcrumb>   

    <div className="container mx-auto mt-5">
   {/* fitter giá */}
   <div>
            <h2>Product Filters</h2>
            <div>
                <label>Price Range:</label>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filterState.priceRange.min}
                    onChange={(e) =>
                        setFilterState({
                            ...filterState,
                            priceRange: { ...filterState.priceRange, min: e.target.value },
                        })
                    }
                />
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filterState.priceRange.max}
                    onChange={(e) =>
                        setFilterState({
                            ...filterState,
                            priceRange: { ...filterState.priceRange, max: e.target.value },
                        })
                    }
                />
            </div>
            <div>
                <label>Brand:</label>
                <input
                    type="checkbox"
                    checked={filterState.brand}
                    onChange={(e) =>
                        setFilterState({ ...filterState, brand: e.target.checked })
                    }
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                    type="checkbox"
                    checked={filterState.category}
                    onChange={(e) =>
                        setFilterState({ ...filterState, category: e.target.checked })
                    }
                />
            </div>
            <div>
                <label>Color:</label>
                <input
                    type="checkbox"
                    checked={filterState.color}
                    onChange={(e) =>
                        setFilterState({ ...filterState, color: e.target.checked })
                    }
                />
            </div>
            <button onClick={filterProducts}>Apply Filters</button>
            {/* Render filteredProducts here */}
        </div>
  </div>
        <div className="grid grid-cols-4 gap-4">
            {filteredProducts.map((item, index) => (
                <div className="col-span-1" key={index}>
                    
                <div className="container flex justify-center mb-5">
                                    <div className="max-w-sm">
                                        <div className="bg-white relative transition duration-500 rounded-lg">
                                            <img
                                                className="rounded-t-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                                src={item.image}
                                                alt=""
                                            />
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