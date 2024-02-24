import React, { useEffect, useState } from 'react';
import { Accordion, Breadcrumb, Button, Card, Rating } from 'flowbite-react';
import { HiShoppingCart, HiHome } from 'react-icons/hi';
function IntroBrand() {
    return (
        <>
            <div className="main_fix pt-5">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            <span className="line-clamp-1">Trang chủ</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/news">
                            <span className="line-clamp-1">Giới thiệu thương hiệu</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <h1 className="text-4xl font-bold text-center main-color">GIỚI THIỆU THƯƠNG HIỆU</h1>
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                        <div className="mr-auto place-self-center lg:col-span-7 p-5">
                            <h1 className="max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                                Chào mừng bạn đến với CKD VIỆT NAM
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Chúng tôi tự hào là một công ty hàng đầu trong ngành công nghiệp mỹ phẩm Hàn Quốc, chú
                                trọng vào việc mang đến những sản phẩm chất lượng cao cho khách hàng. Với mục tiêu làm
                                đẹp tự nhiên và bền vững, chúng tôi cam kết cung cấp những giải pháp làm đẹp tiên tiến
                                và đáng tin cậy.
                            </p>
                            <p>
                                Sự đa dạng và phong cách của sản phẩm là điểm mạnh của chúng tôi. Từ chăm sóc da hàng
                                ngày cho đến trang điểm cá nhân, chúng tôi cung cấp một loạt các sản phẩm đáp ứng mọi
                                nhu cầu làm đẹp. Chất lượng của sản phẩm được đảm bảo thông qua quá trình kiểm định
                                nghiêm ngặt và tuân thủ các tiêu chuẩn chất lượng quốc tế.
                            </p>
                            <p>
                                Không chỉ chú trọng vào việc tạo ra những sản phẩm tốt nhất, chúng tôi cũng chú trọng
                                đến việc thúc đẩy sự bình đẳng và bền vững trong ngành công nghiệp mỹ phẩm. Chúng tôi
                                cam kết tôn trọng môi trường và thực hiện các hoạt động sản xuất bền vững để giảm thiểu
                                tác động đến tự nhiên.
                            </p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img
                                src="https://ckdvietnam.com/upload/elfinder/GI%E1%BB%9AI%20THI%E1%BB%86U/web2.webp"
                                alt="Features"
                                className="object-cover w-full h-96 rounded-lg lg:h-auto"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                        <div className="mr-auto place-self-center lg:col-span-7 p-5">
                            <h1 className="max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                                Tầm nhìn và sứ mệnh của CKD Việt Nam
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Với sứ mệnh làm thay đổi cách thức con người nhìn về làn da và phong cách sống làm đẹp,
                                chúng tôi tập trung vào việc nghiên cứu và phát triển các công thức tiên tiến, kết hợp
                                cùng các thành phần tự nhiên và công nghệ hàng đầu. Đội ngũ chuyên gia giàu kinh nghiệm
                                của chúng tôi không ngừng đưa ra những sản phẩm đột phá, mang lại hiệu quả cao và an
                                toàn cho da.
                            </p>
                            <p>
                                Với tầm nhìn là trở thành một thương hiệu mỹ phẩm đẳng cấp toàn cầu, chúng tôi luôn nỗ
                                lực không ngừng để đáp ứng sự tin tưởng và mong đợi của khách hàng. Chúng tôi tin rằng
                                việc sử dụng sản phẩm mỹ phẩm của chúng tôi sẽ mang đến cho bạn một trải nghiệm làm đẹp
                                tuyệt vời và tự tin tỏa sáng.
                            </p>
                            <p>Hãy đồng hành cùng chúng tôi và khám phá thế giới mỹ phẩm Hàn Quốc đầy hấp dẫn!</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img
                                src="https://ckdvietnam.com/upload/elfinder/GI%E1%BB%9AI%20THI%E1%BB%86U/web2.webp"
                                alt="Features"
                                className="object-cover w-full h-96 rounded-lg lg:h-auto"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default IntroBrand;
