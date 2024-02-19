import { Breadcrumb } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';

function WarrantyPolicy() {
    return (
        <>
            <div className="container mx-auto my-12">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/warranty-policy">Chính sách bảo hành</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-4xl font-bold text-center main-color">Chính sách bảo hành</h1>
                    <div className="main_fix">
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                    <strong>1. Điều kiện bảo hành&nbsp;</strong>
                                    <br />
                                    Sản phẩm được bảo hành miễn phí nếu đảm bảo tất cả các điều kiện sau:
                                </span>
                            </span>
                        </p>
                        <ul style={{ marginLeft: 40 }}>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Sản phẩm thuộc danh mục được bảo hành từ Nhà sản xuất.
                                    </span>
                                </span>
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Sản phẩm bị lỗi kỹ thuật do Nhà sản xuất.
                                    </span>
                                </span>
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Thời hạn bảo hành trên phiếu bảo hành vẫn còn hiệu lực.
                                    </span>
                                </span>
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Phiếu bảo hành còn nguyên vẹn, không chắp vá, không bị gạch xóa hay sửa chữa,
                                        bôi bẩn.
                                    </span>
                                </span>
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Tem bảo hành và tem niêm phong (nếu có) của Nhà sản xuất trên sản phẩm còn
                                        nguyên vẹn.
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                    &nbsp;
                                    <br />
                                    Sản phẩm không được bảo hành hoặc sẽ phát sinh phí bảo hành nếu rơi vào một trong
                                    các trường hợp sau:
                                </span>
                            </span>
                        </p>
                        <ul style={{ marginLeft: 40 }}>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Sản phẩm không thuộc danh mục được bảo hành từ Nhà sản xuất
                                    </span>
                                </span>
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Sản phẩm không thỏa mãn một trong những điều kiện bảo hành ở mục 1.
                                    </span>
                                </span>
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Sản phẩm bị hư hỏng do lỗi người sử dụng và lỗi hư hỏng không nằm trong phạm vi
                                        bảo hành của Nhà sản xuất.
                                    </span>
                                </span>
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        Với trường hợp phát sinh phí bảo hành, nhân viên chăm sóc khách hàng của CKD
                                        VIETNAM sẽ tư vấn đầy đủ thông tin cho khách hàng trước khi tiến hành các thủ
                                        tục bảo hành.
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                    &nbsp;
                                    <br />
                                    <strong>2. Thời hạn bảo hành</strong>&nbsp;
                                    <br />
                                    Thời gian bảo hành trong vòng 1 tuần
                                    <br />
                                    &nbsp;
                                    <br />
                                    <strong>3. Phương thức áp dụng bảo hành</strong>
                                    <br />
                                    Thông tin hỗ trợ bảo hành
                                    <br />
                                    Quý khách vui lòng liên hệ qua hotline chăm sóc khách hàng của CKD VIETNAM: 0365 993
                                    646
                                </span>
                                <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                    {' '}
                                    để được hỗ trợ tư vấn về điều khoản chính sách bảo hành sản phẩm.
                                </span>
                            </span>
                        </p>
                        <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WarrantyPolicy;
