import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Toast notification
import { Toast, Alert } from 'flowbite-react';
import { HiCheck, HiExclamation, HiEye, HiEyeOff } from 'react-icons/hi';
import { accounts } from '../../data/account';

import { useNavigate } from 'react-router-dom';
import firebase from '../../config';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            // luu thong tin user vao local storage
            localStorage.setItem('user', JSON.stringify(email));
            alert('Đăng nhập thành công!');
            navigate('/');
        } catch (error) {
            alert('Email hoặc mật khẩu không đúng!');
        }
    };

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Formik initialValues={{ email: '', password: '' }}>
                <div className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    ĐĂNG NHẬP
                                </h1>
                                <Form className="space-y-4 md:space-y-6" action="#">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Tên email:
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
                                            required=""
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <HiEyeOff className="w-5 h-5 text-gray-400" />
                                            ) : (
                                                <HiEye className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                    </div>
                                    <ErrorMessage name="password" component="div" className="text-red-500" />
                                    {/* quên mật khẩu */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                            />
                                            <label
                                                htmlFor="remember-me"
                                                className="ml-2 block text-sm text-gray-900 dark:text-white"
                                            >
                                                Nhớ mật khẩu
                                            </label>
                                        </div>
                                        <div className="text-sm">
                                            <a
                                                href="/forgot-password"
                                                className="font-medium text-primary-600 hover:text-primary-500"
                                            >
                                                Quên mật khẩu?
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center bg-green-900 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                            onClick={submit}
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

export default SignUp;
