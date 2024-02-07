
import React, { useState } from 'react';    

import { Modal } from 'flowbite-react';
import { FaRegUser } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import HeadlessTippy from '@tippyjs/react/headless';

import {flags} from '../../../data/flag';

function Upheader() {
   

    const [showResult, setShowResult] = useState(false);

     const content = (
         <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
             <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                 <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
             </div>
             <div className="px-3 py-2">
                 <p>And here's some amazing content. It's very engaging. Right?</p>
             </div>
         </div>
     );
    

     const [selectedLanguage, setSelectedLanguage] = useState(flags[0]);

     const handleLanguageSelect = (language) => {
         setSelectedLanguage(language);
     };
	const mystyle = {
		opacity: 0.5, filter: "alpha(opacity=50)", "pointer-events": "none", cursor: "default"
	}
	
	 const [openModal, setOpenModal] = useState(false);
	return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-end">
                    <div className="col-span-2"></div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 ">
                            <div className="p-[0.25rem] text-center">
                                <HeadlessTippy
                                    interactive
                                    render={(attrs) => (
                                        <div
                                            {...attrs}
                                            className="py-2 px-3 h-50 w-30 border border-gray-300 rounded-md shadow-lg bg-white overflow-y-auto"
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            <div className="py-2 px-3">
                                                {flags.map((flag, index) => (
                                                    <div
                                                        key={index}
                                                        className="grid grid-cols-4 pt-2 pb-2 mb-2 hover:bg-slate-100 flex justify-center items-center"
                                                        onClick={() => handleLanguageSelect(flag)}
                                                    >
                                                        <div className="col-span-1 flex justify-center items-center">
                                                            <a href="/" title={flag.name}>
                                                                <img
                                                                    src={flag.image}
                                                                    className="w-10"
                                                                    alt={flag.name}
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-span-3 flex justify-center items-center">
                                                            <a href="/" title={flag.name}>
                                                                <div className="font-semibold w-30 text-sm text-gray-900 text-center">
                                                                    {flag.name}
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                >
                                    <button className="flex items-center">
                                        <img src={selectedLanguage.image} className="w-6" alt={selectedLanguage.name} />
                                        <p className="text-sm main-color ml-2 font-semibold">{selectedLanguage.name}</p>
                                        {showResult ? (
                                            <svg
                                                width="20px"
                                                height="20px"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill="#5C5F62"
                                                    d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                width="20px"
                                                height="20px"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill="#5C5F62"
                                                    d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </HeadlessTippy>
                            </div>
                            <div className="p-[0.25rem] text-center">
                                <button className="flex items-center" onClick={() => setOpenModal(true)}>
                                    <>
                                        <FaRegUser
                                            width={40}
                                            className="main-color text-2xl border border-green-500 rounded-full p-1"
                                        />
                                        <p className="text-sm main-color ml-2 font-semibold">Tài khoản</p>
                                    </>
                                </button>
                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header></Modal.Header>

                                    <Modal.Body>
                                        <div className="flex items-center justify-center ">
                                            <div className="bg-white p-8 rounded">
                                                <h2 className="text-2xl font-semibold mb-6 flex justify-center items-center">
                                                    Tài khoản
                                                </h2>

                                                {/* Nút Login bằng Facebook */}
                                                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 w-full">
                                                    Đăng nhập bằng Facebook
                                                </button>

                                                {/* Nút Login bằng Google */}
                                                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full">
                                                    Đăng nhập bằng Google
                                                </button>

                                                <h5 className="mb-6 flex justify-center items-center mt-6 text-gray-500">
                                                    Hoặc đăng nhập với ckdvietnam.com
                                                </h5>
                                                <button className="bg-green-500 hover:bg-green-500 text-white py-2 px-4 rounded-3xl mb-4 w-full">
                                                    Đăng nhập
                                                </button>
                                                {/* Bạn chưa có tài khoản? */}
                                                <p className="text-center mt-4">
                                                    Bạn chưa có tài khoản?{' '}
                                                    <a href="/" className="text-green-500 hover:text-green-600">
                                                        Đăng ký ngay
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className="p-[0.25rem] text-center ">
                                <div className="flex items-center ">
                                    <AiOutlineShoppingCart className="main-color text-2xl border border-green-500 rounded-full p-1" />
                                    <p className="text-sm main-color font-semibold ml-2">Giỏ hàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upheader;


