import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Toast notification
import { Toast, Alert } from 'flowbite-react';
import { HiCheck, HiExclamation, HiEye, HiEyeOff } from 'react-icons/hi';
import { accounts } from '../../data/account';

import { useNavigate } from 'react-router-dom';

import { auth } from '../../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handeSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            // luu thong tin user vao local storage
            alert('Đăng ký thành công!');
            navigate('/');
        } catch (error) {
            alert('Email đã tồn tại!');
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Email không hợp lệ').required('Bắt buộc nhập email'),
                    password: Yup.string()
                        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
                        .required('Bắt buộc nhập mật khẩu'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không khớp')
                        .required('Bắt buộc nhập lại mật khẩu'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        //    dang ki tai khoan thanh cong chuyen ve trang login
                        const user = accounts.find((account) => account.email === values.email);
                        if (user) {
                            console.error('Email đã tồn tại!');
                        } else {
                            alert('Đăng ký thành công!');
                            navigate('/sign-up');
                            // chuyển hướng đến trang home
                        }
                    }, 400);
                }}
            >
                <div className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    ĐĂNG KÝ TÀI KHOẢN
                                </h1>
                                <Form className="space-y-4 md:space-y-6" action="#">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Nhập email:
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
                                        />

                                        <ErrorMessage name="email" component="div" className="text-red-500" />
                                    </div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mật khẩu:
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        >
                                            {showPassword ? (
                                                <HiEyeOff className="h-5 w-5" />
                                            ) : (
                                                <HiEye className="h-5 w-5" />
                                            )}
                                        </button>
                                        <ErrorMessage name="password" component="div" className="text-red-500" />
                                    </div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Nhập lại mật khẩu:
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        >
                                            {showConfirmPassword ? (
                                                <HiEyeOff className="h-5 w-5" />
                                            ) : (
                                                <HiEye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>

                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />

                                    <div>
                                        <button
                                            onClick={handeSubmit}
                                            type="submit"
                                            className="w-full flex justify-center bg-green-900 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                        >
                                            Đăng nhập
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    );
}

export default SignIn;
