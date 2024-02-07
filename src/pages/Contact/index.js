
import React from "react";
import { contact } from "../../data/contact";
function Contact() {
    
    return (
        <>
            <div className="container my-24 mx-auto md:px-6">
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
                                    <span>Issued: {contact.issued}</span>
                                </h3>
                                <table className="w-full mt-5">
                                    <thead>
                                        
                                     </thead>
                                    <tbody>
                                        <tr>
                                            <td className="w-1/2">Thời gian làm việc:</td>
                                            <td className="w-1/2">8:00 - 17:00</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/2">Thứ 2 - Thứ 7</td>
                                            <td className="w-1/2">Chủ nhật nghỉ</td>
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