import React, { useEffect, useState } from 'react';
import { Accordion, Breadcrumb, Button, Card, Rating } from 'flowbite-react';
import { HiShoppingCart, HiHome } from 'react-icons/hi';
function Promise() {
    return (
        <>
            <div className="main_fix pt-5">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            <span className="line-clamp-1">Trang chủ</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/news">
                            <span className="line-clamp-1">Lời hứa C-K-D</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <h1 className="text-4xl font-bold text-center main-color">LỜI HỨA C-K-D</h1>
                <div className="flex flex-row justify-center ">
                    <ul style={{ marginLeft: 40 }}>
                        <li>
                            <p>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Chất lượng và An toàn: </strong>Chúng tôi luôn đặt chất lượng lên hàng đầu.
                                    Tất cả sản phẩm của chúng tôi được chế tác từ nguyên liệu tự nhiên và trải qua các
                                    quy trình kiểm tra nghiêm ngặt để đảm bảo an toàn cho da và sức khỏe của khách hàng.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Đổi mới và nghiên cứu liên tục</strong>: Chúng tôi luôn tìm kiếm các công
                                    thức đổi mới và công nghệ mới nhất để cung cấp các sản phẩm sáng tạo và hiệu quả.
                                    Đội ngũ nghiên cứu của chúng tôi liên tục khám phá và phát triển ý tưởng mới để đáp
                                    ứng nhu cầu đa dạng về làn da&nbsp;của khách hàng.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Đa dạng phù hợp:</strong> Chúng tôi hiểu rằng mỗi người có nhu cầu về vẻ đẹp
                                    riêng biệt và đặc biệt hiểu về làn da bạn muốn gì. Vì vậy, chúng tôi cung cấp một
                                    loạt các sản phẩm đa dạng, chăm sóc da hàng ngày đến khắc phục các khuyết điểm hiện
                                    có trên da mặt và cổ của bạn, giúp mọi người tìm thấy giải pháp phù hợp cho làn da.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Bền vững và tôn bảo vệ&nbsp;môi trường</strong>: Chúng tôi cam kết thực hiện
                                    các phương pháp sản xuất bền vững và giảm thiểu tác động của mình đối với môi
                                    trường. Chúng tôi tôn trọng và bảo vệ thiên nhiên, xây dựng cùng nhau tương lai bền
                                    vững cho con người.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span style={{ fontSize: 16 }}>
                                    <strong>Dịch vụ chăm sóc khách hàng tận tâm</strong>: Chúng tôi đánh giá cao sự hài
                                    lòng của khách hàng và luôn đặt khách hàng lên hàng đầu. Đội ngũ chăm sóc khách hàng
                                    của chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ tận tâm, đảm bảo mọi trải nghiệm với
                                    sản phẩm của chúng tôi là một trải nghiệm suôn sẻ và thú vị.
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Promise;
