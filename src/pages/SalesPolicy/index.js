import { Breadcrumb } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';

function SalePolicy() {
    return (
        <>
            <div className="container mx-auto my-12">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/salepolicy">Chính sách bán hàng</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-4xl font-bold text-center main-color">Chính sách bán hàng</h1>
                </div>
                <h2>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            1. Đào tạo về kiến thức mỹ phẩm và kỹ năng bán hàng
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </h2>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Trong ngành công nghiệp mỹ phẩm đa dạng như hiện nay, việc lựa chọn sản phẩm
                                            phù hợp có thể gây khó khăn cho các đại lý và nhà phân phối, việc chọn lựa
                                            một thương hiệu mỹ phẩm đáng tin cậy rất quan trọng. Với mục tiêu phát triển
                                            bền vững và mong muốn mang sản phẩm mỹ phẩm CKD GUARANTEED - một thương hiệu
                                            mỹ phẩm hàng đầu tại Hàn Quốc - đến gần hơn với người dùng tại Việt Nam, CKD
                                            đã tạo ra chính sách dành riêng cho các đại lý và nhà phân phối vô cùng hấp
                                            dẫn và minh bạch rõ ràng.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Blue Pink mong muốn hợp tác và cam kết đem đến giá trị thực sự cho thương
                                            hiệu CKD GUARANTEED. Đừng ngần ngại liên hệ với chúng tôi để biết thêm chi
                                            tiết và bắt đầu hành trình kinh doanh nhé.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <h3 style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Đào tạo kiến thức về Mỹ Phẩm CKD:
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </h3>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Tất cả đại lý và nhà phân phối sẽ được đào tạo chuyên sâu về kỹ năng liên
                                            quan đến mỹ phẩm của chúng tôi, đặc biệt là kỹ năng Mỹ Phẩm CKD trị nếp
                                            nhăn, chống lão hóa và dưỡng ẩm chuyên sâu
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <h3 style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Nâng Cao Kỹ Năng Tư Vấn Bán Hàng Cho Khách:
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </h3>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Chúng tôi cam kết hỗ trợ đại lý và nhà phân phối trong việc phát triển và
                                            nâng cao kỹ năng tư vấn bán hàng, giúp đại lý và nhà phân phối có khả năng
                                            cung cấp thông tin chuyên sâu và tận tâm đối với khách hàng.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <h3 style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>Thử Nghiệm Sản Phẩm:</span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </h3>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            đại lý và nhà phân phối có cơ hội thử nghiệm và trải nghiệm các dòng sản
                                            phẩm mỹ phẩm CKD, hiểu rõ về chất lượng và tính năng của sản phẩm.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <h3 style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Sử Dụng Hình Ảnh và Nội Dung Thương Hiệu:
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </h3>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Chúng tôi cung cấp quyền sử dụng tất cả hình ảnh liên quan đến thương hiệu,
                                            sản phẩm, và bài đăng để đại lý/nhà phân phối có thể hiệu quả hóa các hoạt
                                            động bán hàng và quảng cáo của mình.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <h3 style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>Hoa Hồng và Chiết Khấu Hấp Dẫn:</span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </h3>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Chính sách hoa hồng cực kỳ hấp dẫn với tỷ lệ chiết khấu tối đa trên giá niêm
                                            yết trên trang website chính thức của công ty. Điều này nhằm tạo động lực
                                            cao nhất cho đại lý và nhà phân phối trong quá trình thúc đẩy doanh số bán
                                            hàng.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            CKD COS Việt Nam hy vọng rằng chính sách này sẽ giúp đại lý và nhà phân phối
                                            phát triển và đạt được những thành công lớn trong hành trình hợp tác của
                                            chúng ta.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <h2 style={{ listStyleType: 'decimal' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            2. Chính sách bán hàng dành cho khách lẻ
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </h2>
                <p style={{ lineHeight: '1.38' }}>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                            <span style={{ color: '#000000' }}>
                                <span style={{ fontWeight: 400 }}>
                                    <span style={{ fontStyle: 'normal' }}>
                                        <span style={{ textDecoration: 'none' }}>
                                            Dưới đây là bảng giá bán lẻ toàn bộ sản phẩm của CKD được áp dụng trên toàn
                                            quốc.
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </p>
                <table style={{ width: 785 }} border={1} cellSpacing={1} cellPadding={1}>
                    <tbody>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Kem Lăn Cổ Ngăn Ngừa Nếp Nhăn Retino Collagen
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215 }}>
                                <p style={{ textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>819.000</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Serum nâng cơ Guasha Retino Collagen phân tử nhỏ 300
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>819.00</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Mặt nạ kem dưỡng ẩm CKD Retino 300 Collagen tiểu phân tử 50ml
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>512.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Serum CKD Collagen tiểu phân tử 300 Collagen Pumping Ampoule
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>599.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Kem chống nhăn cổ retino collagen
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>695.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Mặt nạ se khít lỗ chân lông CKD Retinol Collagen Small Molecule 300
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>99.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Kem dưỡng Retinol Collagen tiểu phân tử 300&nbsp;
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>669.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Sữa rửa mặt làm sạch lỗ chân lông CKD Retino Collagen phân tử thấp 300
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>329.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Tinh chất nước thần CKD Retinol Collagen tiểu phân tử 300 First Essence
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>699.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Kem Chống Nắng Nhẹ CKD Chứa Tinh Chất Keo Ong Xanh
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>475.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        CKD Retinol collagen Nước hoa hồng kết cấu Collagen tiểu phân tử 300
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>499.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Kem chống nắng CKD Green Propolis All - Covery Sun PF 50+ 40ml
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>475.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        CKD Retino Collagen Phân tử thấp 300 Thỏi dạng nước 10g
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>530.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Mặt Nạ Băng Kéo Dài Bellasu V
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>95.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Mặt nạ giấy Lactoderm giúp da đàn hồi, mềm mại và ẩm mượt
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>75.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Set Tinh Chất Trị Mụn CKD Vita C Teca 7 Days
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>
                                                                    1.629.000
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Tinh Chất Trị Mụn CKD Vita C Teca 7 Days
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>490.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Kem dưỡng ẩm Lactoderm có lợi cho da
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>439.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Nước hoa hồng dưỡng ẩm Lactoderm có lợi cho da
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>450.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 559 }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Sữa rửa mặt dưỡng ẩm da
                                    </span>
                                </p>
                            </td>
                            <td style={{ width: 215, textAlign: 'center' }}>
                                <p>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ overflow: 'hidden' }}>
                                            <span style={{ overflowWrap: 'break-word' }}>
                                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                                    <span style={{ color: '#000000' }}>
                                                        <span style={{ fontWeight: 400 }}>
                                                            <span style={{ fontStyle: 'normal' }}>
                                                                <span style={{ textDecoration: 'none' }}>259.000</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <strong>*Lưu ý:</strong>
                        <br />- Khách hàng mua hàng đúng giá niêm yết để được bảo hành theo chính sách bán hàng và chính
                        sách đổi trả nếu có bất kì trục trặc gì về sản phẩm
                        <br />- Khách hàng nên mua hàng tại các chi nhánh, kênh phân phối trực thuộc CKD Việt Nam
                    </span>
                </p>
                <h2>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <strong>3. Chính sách bán hàng dành cho đại lý</strong>
                    </span>
                </h2>
                <p>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        -&nbsp; Khách hàng trở thành đại lý nếu thỏa mãn điều kiện: Cam kết đơn hàng đầu tiên tối thiểu
                        10 triệu đồng (tính theo giá bán lẻ)
                    </span>
                </p>
                <h2>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <strong>4. Chính sách bán hàng dành cho nhà phân phối sỉ</strong>
                    </span>
                </h2>
                <p>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        - Hợp tác trên cơ sở vì lợi ích của cả 2 bên.
                        <br />- Tạo dựng mối quan hệ đối tác dài hạn trên cơ sở những cam kết hợp tác và chia sẻ mục
                        tiêu kinh doanh và phát triển ngành hàng trà, cà phê và nông sản chế biến.
                        <br />- Thường xuyên chia sẻ thông tin kinh doanh, sản phẩm và hỗ trợ kịp thời về kinh doanh và
                        phát triển.
                        <br />
                        -&nbsp; Chính sách hỗ trợ công bằng và hợp lý trên toàn bộ kênh phân phối.&nbsp;
                    </span>
                </p>
                <h3>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <strong>Chiết khấu mua hàng định kỳ:</strong>
                    </span>
                </h3>
                <p>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        - Dựa theo doanh số cam kết hàng quý, Nhà phân phối sẽ được tham gia chương trình chiết khấu
                        trên doanh số mua hàng dành riêng cho nhà phân phối của thương hiệu CKD
                        <br />- Khi đạt đủ doanh số mua hàng cam kết, Nhà Phân Phối sẽ được hưởng khoản chiết khấu theo
                        tỷ lệ đã thỏa thuận từ đầu trong hợp đồng Phân Phối.
                        <br />- Ngoài ra Nhà Phân Phối sẽ được nhận thêm % hoa hồng ½ năm nếu đạt chỉ tiêu doanh số 2
                        quý liên tục.
                        <br />- Chính sách chiết khấu này độc lập và được tiến hành song song với các chương trình hỗ
                        trợ khác từ thương hiệu CKD VIỆT NAM cho Nhà Phân Phối&nbsp;
                        <br />- Thương hiệu CKD VIỆT NAM cam kết thanh toán các khoản hoa hồng cho nhà Phân Phối đúng
                        hạn.
                    </span>
                </p>
                <h3>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <strong>Chính sách giá</strong>
                    </span>
                </h3>
                <p>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        - Căn cứ vào kết quả mua hàng và các cam kết hợp tác khác, Nhà phân phối sẽ được hưởng chính
                        sách giá dành cho cấp Phân phối tương ứng.
                        <br />- Chính sách giá được xây dựng để đảm bảo tính cạnh tranh và lợi nhuận tối đa cho Nhà phân
                        phối trên thị trường.
                        <br />- Thanh toán theo thể thức đặt cọc trước giá trị đơn hàng.
                        <br />- Hỗ trợ phí vận chuyển cho Nhà phân phối.
                    </span>
                </p>
                <h2>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <strong>5. Chính sách bán hàng dành cho cá nhân đăng ký trở thành cộng tác viên</strong>
                    </span>
                </h2>
                <p>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        Khách cũng có thể trở thành cộng tác viên bán hàng cùng CKD với nhiều quyền lợi hấp dẫn. Xem
                        thêm chi tiết thông tin{' '}
                        <a href="https://ckdvietnam.com/">
                            <strong>Tại đây</strong>
                        </a>
                        !
                    </span>
                </p>
                <h3>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        <strong>6. Chính sách bán hàng dành cho KOC/KOL và Affiliate</strong>
                    </span>
                </h3>
                <p>
                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                        - Với mong muốn phát triển toàn diện và đa dạng kênh phân phối, CKD đã có mặt trên các nền tải
                        thương mại điện tử online như Shopee, Lazada, TikTokshop. Cùng với đó là chính sách hoa hồng và
                        chiết khấu hấp dẫn
                        <br />- Đối với người bán hàng là KOC/KOL, CKD đề xuất mức hoa hồng lên đến 15% cho mỗi sản phẩm
                        được giao hàng thành công. Tặng sản phẩm review kèm nhiều phần quà hấp dẫn
                        <br />- Đối với người bán hàng đăng ký hình thức Affiliate qua Shopee, Lazada, TikTokshop thì
                        mức hoa hồng là 5%
                    </span>
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </>
    );
}

export default SalePolicy;
