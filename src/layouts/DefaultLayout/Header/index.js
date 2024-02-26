import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from 'flowbite-react';
import Noti from '../Noti';
import Upheader from '../Upheader';

import cx from 'classnames';
import HeadlessTippy from '@tippyjs/react/headless';

import { get } from '../../../utils/httpRequest';

import { path_upload } from '../../../utils/ckdUtils';
import Tippy from '@tippyjs/react/headless';

const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Giới thiệu', url: '/intro' },
    // { title: 'Giỏ hàng', url: '/shopping' },
    // { title: 'Đánh giá', url: '/review' },
    {
        title: 'Thương hiệu',
        subLinks: [
            { title: 'Brand', url: '/brand' },
            { title: 'Câu chuyện thương hiệu', url: '/story' },
            { title: 'Giới thiệu thương hiệu', url: '/introduction-brand' },
            { title: 'Lời hứa CKD', url: '/promise' },
        ],
    },
    { title: 'Khuyến mãi', url: '/promotion' },
    { title: 'Sản phẩm', url: '/product' },
    { title: 'Sự kiện', url: '/event' },
    { title: 'Tin tức', url: '/news' },
    { title: 'Liên hệ', url: '/contact' },
];

const Noimage =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/0_CDK%2FNOIMAGE.png?alt=media&token=908ed81a-2f59-4375-91e9-a3e746c87ac3';
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
    const _url = path_upload().product;

    const inputRef = useRef();

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

    useEffect(() => {
        const result = product_list.filter((item) => {
            return item.tenvi.toLowerCase().includes(searchValue.toLowerCase());
        });
        setSearchResult(result);
    }, [searchValue]);

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

            {/* <div className="bg-gray-100">
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
            </div> */}

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
                                                            <a href={`/product/${item.id}`}>
                                                                <img
                                                                    src={item.photo ? `${_url}${item.photo}` : Noimage}
                                                                    className="w-20 h-20"
                                                                    alt={item.tenkhongdauvi}
                                                                    title={item.tenkhongdauvi}
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-span-5">
                                                            <a href={item.url} title={item.title}>
                                                                <div className="font-semibold w-30 text-sm text-gray-900">
                                                                    {item.tenvi}
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
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div {...attrs}>
                                                {/* Đây là nơi bạn đặt submenu của mình */}
                                                {link.subLinks && link.subLinks.length > 0 && (
                                                    // <div className="bg-white border border-gray-200 rounded-md shadow-lg p-3">
                                                    //     {link.subLinks.map((subLink, index) => (
                                                    //         <a
                                                    //             key={index}
                                                    //             href={subLink.url}
                                                    //             className="block py-2 text-sm text-gray-900 hover:text-primary-500"
                                                    //         >
                                                    //             {subLink.title}
                                                    //         </a>
                                                    //     ))}
                                                    // </div>
                                                    <Navbar.Collapse>
                                                        <div className="bg-white border border-gray-200 rounded-md shadow-lg p-5">
                                                            {link.subLinks.map((subLink, subIndex) => (
                                                                <Navbar.Link
                                                                    key={subIndex}
                                                                    href={subLink.url}
                                                                    active={subLink.active}
                                                                >
                                                                    <div className="font-semibold px-3 py-2 ">
                                                                        {subLink.title}
                                                                    </div>
                                                                </Navbar.Link>
                                                            ))}
                                                        </div>
                                                    </Navbar.Collapse>
                                                )}
                                            </div>
                                        )}
                                    >
                                        <div className="font-semibold">{link.title}</div>
                                    </Tippy>
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
