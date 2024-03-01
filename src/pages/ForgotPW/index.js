import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Đã gửi yêu cầu đổi mật khẩu!');
            history('/sign-in');
        } catch (error) {
            alert('Email không tồn tại!');
        }
    };
    return (
        <div>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert('Đã gửi yêu cầu đổi mật khẩu!');
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <div className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8">
                        <Form className="w-full max-w-sm">
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center bg-green-900 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    onClick={handleSubmit}
                                >
                                    Gửi yêu cầu
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </div>
    );
}

export default ForgotPassword;
