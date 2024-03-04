import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Toast notification
import { Toast, Alert } from 'flowbite-react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config';

function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: Yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Mật khẩu phải có ít nhất 6 kí tự'),
        confirmPassword: Yup.string()
            .required('Vui lòng nhập xác nhận mật khẩu')
            .oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu phải trùng khớp với mật khẩu'),
    });

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        createUserWithEmailAndPassword(auth, values.email, values.password)
                            .then(() => {
                                alert('Đăng ký thành công!');
                                navigate('/sign-in');
                            })
                            .catch((error) => {
                                console.error('Đăng ký không thành công:', error);
                                alert('Đăng ký không thành công. Vui lòng thử lại sau!');
                            })
                            .finally(() => {
                                setSubmitting(false);
                            });
                    }, 400);
                }}
            >
                {(formik) => (
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
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
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
                                            <div
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                            >
                                                {showConfirmPassword ? (
                                                    <HiEyeOff className="h-5 w-5 text-gray-400" />
                                                ) : (
                                                    <HiEye className="h-5 w-5 text-gray-400" />
                                                )}
                                            </div>
                                            <ErrorMessage
                                                name="confirmPassword"
                                                component="div"
                                                className="text-red-500"
                                            />
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full flex justify-center bg-green-900 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                            >
                                                Đăng ký
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default SignUp;