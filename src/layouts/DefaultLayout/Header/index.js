import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from 'flowbite-react';
import Noti from '../Noti';
import Upheader from '../Upheader';

import cx from 'classnames';
import HeadlessTippy from '@tippyjs/react/headless';



const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Giới thiệu', url: '/intro' },
    // { title: 'Giỏ hàng', url: '/shopping' },
    // { title: 'Đánh giá', url: '/review' },
    { title: 'Thương hiệu', url: '/' },
    { title: 'Khuyến mãi', url: '/' },
    { title: 'Sản phẩm', url: '/product' },
    { title: 'Sự kiện', url: '/event' },
    { title: 'Tin tức', url: '/event' },
    { title: 'Liện hệ', url: '/contact' },
];
function Header() {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsHeaderFixed(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // search
      const [searchValue, setSearchValue] = useState('');
      const [searchResult, setSearchResult] = useState([]);
      const [showResult, setShowResult] = useState(false);
 

      const inputRef = useRef();

    
    useEffect(() => {
            const data = [
                {
                    id: 1,
                    title: 'Dầu Gội Trị Gàu, Ngăn Ngừa Rụng Tóc CKD Amino Biotin 750ML ',
                    description: 'Trị mụn',
                    img: 'https://ckdvietnam.com/upload/product/ads-fb-set-9853.jpg',
                    url: 'https://ckdvietnam.com/san-pham/bo-cham-soc-da-toan-dien-limited-tet-doan-vien-full-qua-tang-gioi-han-100-hop-duy-nhat',
                },
                {
                    id: 2,
                    title: 'Tinh Chất Dưỡng Trắng Da CKD Amino Whitening Essence 30ml',
                    description: 'Trị mụn',
                    img: 'https://ckdvietnam.com/upload/product/ads-fb-set-9853.jpg',
                    url: 'https://ckdvietnam.com/san-pham/bo-cham-soc-da-toan-dien-limited-tet-doan-vien-full-qua-tang-gioi-han-100-hop-duy-nhat',
                },
                {
                    id: 3,
                    title: 'Tinh Chất Dưỡng Trắng Da CKD Amino Whitening Essence 30ml',
                    description: 'Trị mụn',
                    img: 'https://ckdvietnam.com/upload/product/ads-fb-set-9853.jpg',
                    url: 'https://ckdvietnam.com/san-pham/bo-cham-soc-da-toan-dien-limited-tet-doan-vien-full-qua-tang-gioi-han-100-hop-duy-nhat',
                },
                {
                    id: 4,
                    title: 'Tinh Chất Dưỡng Trắng Da CKD Amino Whitening Essence 30ml',
                    description: 'Trị mụn',
                    img: 'https://ckdvietnam.com/upload/product/ads-fb-set-9853.jpg',
                    url: 'https://ckdvietnam.com/san-pham/bo-cham-soc-da-toan-dien-limited-tet-doan-vien-full-qua-tang-gioi-han-100-hop-duy-nhat',
                },
                {
                    id: 5,
                    title: '3',
                    description: '5',
                    img: '',
                    url: '3',
                },
            ];
    
            const result = data.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchResult(result);   
    }
    , [searchValue]);

      const handleHideResult = () => {
          setShowResult(false);
      };

      const handleChange = (e) => {
          const searchValue = e.target.value;
          console.log('New search value:', searchValue);

          if (!searchValue.startsWith(' ')) {
              setSearchValue(searchValue);
              setShowResult(true); 
          }
      };
    

    return (
        <React.Fragment>
            <Noti />

            <Upheader />

            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="w-1/2">
                            <div className="h-[0.1rem] rounded-full"></div>
                        </div>
                        <div className="w-1/2">
                            <div className="h-[0.1rem] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="main_menu"
                className={`${isHeaderFixed ? 'sticky top-[-1.5rem] z-10 bg-white pt-5 shadow-lg' : 'shadow-lg'}`}
            >
                <div className="container mx-auto ">
                    <Navbar fluid rounded>
                        <Navbar.Brand href="/">
                            <img
                                src="https://ckdvietnam.com/upload/logo/logo-14.png"
                                className="mr-3 h-6 sm:h-9"
                                alt="CKD COS VIETNAM"
                            />
                        </Navbar.Brand>
                        <div className="flex md:order-2">
                            <HeadlessTippy
                                interactive
                                visible={showResult && searchResult.length > 0}
                                render={(attrs) => (
                                    <div
                                        {...attrs}
                                        className="py-2 px-3 h-96 w-30 border border-gray-300 rounded-md shadow-lg bg-white overflow-y-auto"
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {searchResult.length > 0 ? (
                                            searchResult.map((item, index) => (
                                                <div key={index} className="py-2 px-3 hover:bg-slate-100">
                                                    <div className="grid grid-cols-6">
                                                        <div className="col-span-1">
                                                            <a href={item.url} title={item.title}>
                                                                <img
                                                                    src={item.img}
                                                                    className="w-20 h-20"
                                                                    alt="CKD COS VIETNAM"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-span-5">
                                                            <a href={item.url} title={item.title}>
                                                                <div className="font-semibold w-30 text-sm text-gray-900">
                                                                    {item.title}
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="py-2 px-3 text-center text-gray-500">
                                                Không có kết quả tìm kiếm
                                            </div>
                                        )}
                                    </div>
                                )}
                                onClickOutside={handleHideResult}
                            >
                                <div className={cx('search')}>
                                    <input
                                        ref={inputRef}
                                        value={searchValue}
                                        placeholder="Tìm kiếm sản phẩm"
                                        spellCheck={false}
                                        //
                                        className="peer h-full w-full rounded-[7px] !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 md:disabled:bg-transparent md:disabled:text-gray-500  block md:hidden lg:block"
                                        onChange={handleChange}
                                        onFocus={() => setShowResult(searchValue !== '')}
                                    />
                                </div>
                            </HeadlessTippy>

                            <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse>
                            {navLinks.map((link, index) => (
                                <Navbar.Link key={index} href={link.url} active={link.active}>
                                    <div className="font-semibold">{link.title}</div>
                                </Navbar.Link>
                            ))}
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;
