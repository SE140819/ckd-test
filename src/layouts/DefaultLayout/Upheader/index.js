import React, { useEffect, useState } from 'react';
import { Modal } from 'flowbite-react';
import { FaRegUser, FaRegFileLines } from 'react-icons/fa6';
// icon logout
import { FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import HeadlessTippy from '@tippyjs/react/headless';

import { flags } from '../../../data/flag';

import { auth, provider, provider2 } from '../../../config';
import { signInWithPopup } from 'firebase/auth';

function Upheader() {
    const [value, setValue] = useState('');
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem('email', data.user.email);
                // Chuyển hướng người dùng về trang chủ sau khi đăng nhập thành công
                window.location.href = '/'; // Thay đổi đường dẫn trang chủ tùy thuộc vào ứng dụng của bạn
            })
            .catch((error) => {
                // Xử lý lỗi đăng nhập nếu cần
                console.error('Đã xảy ra lỗi khi đăng nhập:', error);
            });
    };
    const handleFacebookLogin = () => {
        signInWithPopup(auth, provider2)
            .then((data) => {
                setValue(data.user);
                localStorage.setItem('facebook', data.user);

                window.location.href = '/';
            })
            .catch((error) => {
                // Xử lý lỗi đăng nhập nếu cần
                console.error('Đã xảy ra lỗi khi đăng nhập:', error);
            });
    };

    const [showResult, setShowResult] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState(flags[0]);

    const nameGG = localStorage.getItem('email');
    const nameFB = localStorage.getItem('facebook');
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };
    const mystyle = {
        opacity: 0.5,
        filter: 'alpha(opacity=50)',
        'pointer-events': 'none',
        cursor: 'default',
    };

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
                                {nameGG || value ? (
                                    <HeadlessTippy
                                        // dùng HeadlessTippy để khi click vào tên người dùng thì hiện ra thông tin người dùng và nút đăng nhập
                                        interactive
                                        render={(attrs) => (
                                            <div
                                                {...attrs}
                                                className="py-2 px-3 h-50 w-30 border border-gray-300 rounded-md shadow-lg bg-white overflow-y-auto"
                                                onMouseDown={(e) => e.preventDefault()}
                                            >
                                                <div className="py-2 px-3">
                                                    <div className="grid grid-cols-4 pt-2 pb-2 mb-2 hover:bg-slate-100 flex justify-center items-center">
                                                        <div className="col-span-1 flex justify-center items-center">
                                                            <a href="/" title="Tài khoản">
                                                                <FaRegUser
                                                                    width={40}
                                                                    className="main-color text-2xl border border-green-500 rounded-full p-1"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-span-3 flex justify-center items-center">
                                                            <a href="/account" title="Tài khoản">
                                                                <div className="font-semibold w-30 text-sm text-gray-900 text-center">
                                                                    Thông tin tài khoản
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="py-2 px-3">
                                                    <div className="grid grid-cols-4 pt-2 pb-2 mb-2 hover:bg-slate-100 flex justify-center items-center">
                                                        <div className="col-span-1 flex justify-center items-center">
                                                            <a href="/" title="Tài khoản">
                                                                <FaRegFileLines
                                                                    width={40}
                                                                    className="main-color text-2xl border border-green-500 rounded-full p-1"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-span-3 flex justify-center items-center">
                                                            {/* đăng xuất */}
                                                            <a href="/history" title="Tài khoản">
                                                                <div className="font-semibold w-30 text-sm text-gray-900 text-center">
                                                                    Lịch sử đơn hàng
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* đăng xuất */}
                                                <div className="py-2 px-3">
                                                    <div className="grid grid-cols-4 pt-2 pb-2 mb-2 hover:bg-slate-100 flex justify-center items-center">
                                                        <div className="col-span-1 flex justify-center items-center">
                                                            <a href="/" title="Tài khoản">
                                                                <FaSignOutAlt
                                                                    width={40}
                                                                    className="main-color text-2xl border border-green-500 rounded-full p-1"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-span-3 flex justify-center items-center">
                                                            {/* đăng xuất */}
                                                            <a
                                                                href="/"
                                                                title="Tài khoản"
                                                                onClick={() => {
                                                                    localStorage.removeItem('email');
                                                                    window.location.href = '/';
                                                                }}
                                                            >
                                                                <div className="font-semibold w-30 text-sm text-gray-900 text-center">
                                                                    Đăng xuất
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    >
                                        <button className="flex items-center">
                                            <FaRegUser
                                                width={40}
                                                className="main-color text-2xl border border-green-500 rounded-full p-1"
                                            />
                                            <p className="text-sm main-color ml-2 font-semibold">
                                                {nameGG.slice(0, nameGG.indexOf('@')) || value.displayName}
                                            </p>
                                        </button>
                                    </HeadlessTippy>
                                ) : (
                                    <button className="flex items-center" onClick={() => setOpenModal(true)}>
                                        <>
                                            <FaRegUser
                                                width={40}
                                                className="main-color text-2xl border border-green-500 rounded-full p-1"
                                            />
                                            <p className="text-sm main-color ml-2 font-semibold">Tài khoản</p>
                                        </>
                                    </button>
                                )}
                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header></Modal.Header>

                                    <Modal.Body>
                                        <div className="flex items-center justify-center ">
                                            <div className="bg-white p-8 rounded">
                                                <h2 className="text-2xl font-semibold mb-6 flex justify-center items-center">
                                                    Tài khoản
                                                </h2>

                                                {/* Nút Login bằng Facebook */}
                                                {value ? (
                                                    <></>
                                                ) : (
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 w-full"
                                                        onClick={handleFacebookLogin}
                                                    >
                                                        Đăng nhập bằng Facebook
                                                    </button>
                                                )}

                                                {/* Nút Login bằng Google */}
                                                {/* đăng nhập bằng google và sau khi đăng nhập thành công thì nhảy về trang home và thông báo đăng nhập thành công */}
                                                {value ? (
                                                    <></>
                                                ) : (
                                                    <button
                                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mb-4 w-full"
                                                        onClick={handleGoogleLogin}
                                                    >
                                                        Đăng nhập bằng Google
                                                    </button>
                                                )}

                                                <h5 className="mb-6 flex justify-center items-center mt-6 text-gray-500">
                                                    Hoặc đăng nhập với ckdvietnam.com
                                                </h5>
                                                <a href="/sign-up">
                                                    <button className="bg-green-500 hover:bg-green-500 text-white py-2 px-4 rounded-3xl mb-4 w-full">
                                                        Đăng nhập
                                                    </button>
                                                </a>

                                                {/* Bạn chưa có tài khoản? */}
                                                <p className="text-center mt-4">
                                                    Bạn chưa có tài khoản?{' '}
                                                    <a href="/sign-in" className="text-green-500 hover:text-green-600">
                                                        Đăng ký ngay
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className="p-[0.25rem] text-center ">
                                <a href="/shopping" className="flex items-center">
                                    <div className="flex items-center ">
                                        <AiOutlineShoppingCart className="main-color text-2xl border border-green-500 rounded-full p-1" />
                                        <p className="text-sm main-color font-semibold ml-2">Giỏ hàng</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upheader;
