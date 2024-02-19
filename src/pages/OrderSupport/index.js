import { Breadcrumb } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';

function OrderSupport() {
    return (
        <>
            <div className="container mx-auto my-12">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/salepolicy">Hỗ trợ đặt hàng</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-4xl font-bold text-center main-color">Hỗ trợ đặt hàng</h1>
                </div>
                <div className="main_fix">
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                <u>Bước 1</u>: Truy cập website và lựa chọn sản phẩm cần mua để mua hàng
                                <br />
                                <u>Bước 2</u>: Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn
                                sau
                                <br />
                                Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm
                                vào giỏ hàng
                                <br />
                                Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng
                                <br />
                                Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh
                                toán
                                <br />
                                <u>Bước 3</u>: Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh
                                toán và vận chuyển cho đơn hàng của mình
                                <br />
                                <u>Bước 4</u>: Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
                                <br />
                                Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác
                                nhận lại đơn hàng và địa chỉ của bạn.
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                Cước phí vận chuyển qua các tỉnh thành:
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <strong>NỘI THÀNH:</strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                Trọng lượng: 0-250Gram | 250 - 500Gram&nbsp;
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                Giao tiết kiệm: 16.500 ( 3kg )
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                Giao Hỏa tốc: 22.000 ( 3kg )
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                <strong>NGOẠI THÀNH:</strong>
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                Trọng lượng: 0-250Gram | 250 - 500Gram&nbsp;
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>Giao tiết kiệm: 31.000</span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>Giao nhanh: 38.0000</span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <br />
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                <strong>Trân trọng cảm ơn.</strong>
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default OrderSupport;
