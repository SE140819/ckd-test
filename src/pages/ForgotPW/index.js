// import { ErrorMessage, Field, Formik } from 'formik';
// import React, { useEffect, useState } from 'react';
// import { Form, useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
// function ForgotPassword() {
//     return (
//         <>
//             <Formik
//                 initialValues={{ email: '' }}
//                 validationSchema={Yup.object({
//                     email: Yup.string().email('Email không hợp lệ').required('Bắt buộc nhập email'),
//                 })}
//             >
//                 <div className="bg-gray-50 dark:bg-gray-900">
//                     <div className="flex flex-col items-center justify-center px-6 py-8">
//                         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                                     QUÊN MẬT KHẨU
//                                 </h1>
//                                 <Form className="space-y-4 md:space-y-6" action="#">
//                                     <div>
//                                         <label htmlFor="email" className="text-gray-700 dark:text-gray-300">
//                                             Email
//                                         </label>
//                                         <Field
//                                             name="email"
//                                             type="email"
//                                             className="w-full form-input dark:border-gray-600 dark:bg-gray-700"
//                                         />
//                                         <ErrorMessage name="email" component="div" className="text-red-500" />
//                                     </div>
//                                     <div>
//                                         <button type="submit" className="w-full btn btn-primary">
//                                             Gửi yêu cầu
//                                         </button>
//                                     </div>
//                                 </Form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Formik>
//         </>
//     );
// }

// export default ForgotPassword;
