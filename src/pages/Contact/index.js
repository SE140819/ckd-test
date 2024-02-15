
import React from "react";
import { contact } from "../../data/contact";
function Contact() {
    
    return (
        <>
 
            <div className="container my-24 mx-auto md:px-6">
            <div className="container my-24 mx-auto md:px-6 ">
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Họ tên</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Số điện thoại</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Địa chỉ</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Chủ đề</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Nội dung</label>
          <div className="mt-2">
            <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        {/* nút gửi bên phải */}
        <div className="flex justify-end">
        <div className="mt-6">
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Gửi
          </button>
        </div>
          </div>
       
        </div>
        </div>
                <section className="mb-32">
                    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-wrap items-center">
                            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                <div className="h-[500px] w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0921090948923!2d106.70554877586837!3d10.727378860094792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2fae581f6f%3A0xf11caf2860a8cf7c!2sBluepink%20CKD%20Guaranteed!5e0!3m2!1svi!2s!4v1707119606336!5m2!1svi!2s"
                                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="p-5 w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                <h2 className="div">{contact.company}</h2>
                                <h3>
                                    <span>{contact.address}</span>
                                </h3>
                                <h3>
                                    <span>{contact.hotline}</span>
                                </h3>
                                <h3>
                                    <span>Zalo: {contact.zalo}</span>
                                </h3>
                                <h3>
                                    <span>Email: {contact.mail}</span>
                                </h3>
                                <h3>
                                    <span>MST: {contact.mst}</span>
                                </h3>
                                <h3>
                                    <span>Nơi cấp:
          {contact.issued}</span>
                                </h3>
                                <table className="w-full mt-5">
                                    <thead>
                                        
                                     </thead>
                                    <tbody>
                                        <tr>
                                            <td className="w-1/2">Họ và tên:</td>
                                            <td className="w-1/2">Phan Thị Phương Tiền</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/2">Địa chỉ</td>
                                            <td className="w-1/2">97/9 đường Phạm Thái Bường, phường Tân Phong, Q7, TP.HCM</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/2">Chức vụ</td>
                                            <td className="w-1/2">Giám đốc</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/2">Số điện thoại</td>
                                            <td className="w-1/2">0975155503</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/2">Email</td>
                                            <td className="w-1/2">bluepink@ckdcosvietnam.com</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        
        </>
    );
}

export default Contact;