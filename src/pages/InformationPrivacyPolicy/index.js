import { Breadcrumb } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';

function InformationPrivacyPolicy() {
    return (
        <>
            <div className="container mx-auto my-12">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/salepolicy">Chính sách bảo mật thông tin cá nhân</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-4xl font-bold text-center main-color">Chính sách bảo mật thông tin cá nhân</h1>
                </div>
                <div className="main_fix">
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#000000' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Cảm ơn bạn đã truy cập vào trang website được vận hành bởi{' '}
                                                <strong>Công ty TNHH Bluepink</strong>. Chúng tôi tôn trọng và cam kết
                                                sẽ bảo mật những thông tin mang tính riêng tư của bạn. Xin vui lòng đọc
                                                bản Chính sách bảo vệ thông tin cá nhân của người tiêu dùng dưới đây để
                                                hiểu hơn những cam kết mà chúng tôi thực hiện nhằm tôn trọng và bảo vệ
                                                quyền lợi của người truy cập.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#000000' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Bảo vệ thông tin cá nhân của Người tiêu dùng và gây dựng được niềm tin
                                                cho bạn là vấn đề rất quan trọng với chúng tôi. Vì vậy, chúng tôi sẽ
                                                dùng tên và các thông tin khác liên quan đến bạn tuân thủ theo nội dung
                                                của chính sách này. Chúng tôi chỉ thu thập những thông tin cần thiết
                                                liên quan đến giao dịch mua bán.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <strong>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Chính sách bảo vệ thông tin cá nhận của người tiêu dùng
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </strong>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Người tiêu dùng (bao gồm khách hàng, đối tác kinh doanh và đại lí) sẽ
                                                được yêu cầu điền đầy đủ các thông tin theo các trường thông tin theo
                                                mẫu có sẵn trên <strong>Website ckdvietnam.com</strong> như: Họ và Tên,
                                                địa chỉ (nhà riêng hoặc văn phòng), địa chỉ email (công ty hoặc cá
                                                nhân), số điện thoại (di động, nhà riêng hoặc văn phòng), các chi tiết
                                                thẻ tín dụng (là loại và số thẻ tín dụng, mã CVC, ngày tháng hết hạn,
                                                tên chủ thẻ) và trong mức độ có thể, các tuỳ chọn… Thông tin này được
                                                yêu cầu để đặt và hoàn tất việc đặt hàng online của Người tiêu dùng (bao
                                                gồm gửi email xác nhận đặt hàng đến Người tiêu dùng).&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    <strong>Về cookie:</strong> Cookie là những thư mục dữ liệu được lưu
                                                    trữ tạm thời hoặc lâu dài trong ổ cứng máy tính của Người tiêu dùng.
                                                    Các cookie được sử dụng để xác minh, truy tìm lượt và duy trì thông
                                                    tin cụ thể về việc sử dụng và người sử dụng
                                                    <strong> Website ckdvietnam.com</strong>, như các tuỳ chọn cho trang
                                                    web hoặc thông tin về giỏ hàng điện tử của họ. Nếu không đồng ý,
                                                    Người tiêu dùng có thể xoá tất cả các cookie đã nằm trong ổ cứng máy
                                                    tính của mình bằng cách tìm kiếm các thư mục với “cookie” trong tên
                                                    của nó và xoá đi. Trong tương lai, Người tiêu dùng có thể chỉnh sửa
                                                    các lựa chọn trong trình duyệt của mình để các cookie (tương lai) bị
                                                    chặn.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                1. Mục Đích Thu Thập Thông Tin Cá Nhân của Người Tiêu Dùng
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Cung cấp dịch vụ cho Người tiêu dùng và quản lý, sử dụng thông tin cá
                                                nhân của Người tiêu dùng nhằm mục đích quản lý cơ sở dữ liệu về Người
                                                tiêu dùng và kịp thời xử lý các tình huống phát sinh (nếu có).
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                2. Phạm Vi Sử Dụng Thông Tin Cá Nhân
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                <strong>Website ckdvietnam.com</strong> sử dụng thông tin của Người tiêu
                                                dùng cung cấp để:
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Cung cấp các dịch vụ đến Người tiêu dùng.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Gửi các thông báo về các hoạt động trao đổi thông tin giữa Người
                                                    tiêu dùng và<strong> CKD VIET NAM</strong>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản người dùng của
                                                    Người tiêu dùng hoặc các hoạt động giả mạo Người tiêu dùng.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Liên lạc và giải quyết khiếu nại với Người tiêu dùng.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Xác nhận và trao đổi thông tin về giao dịch của Người tiêu dùng tại{' '}
                                                    <strong>CKD VIET NAM.</strong>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Trong trường hợp có yêu cầu của cơ quan quản lý nhà nước có thẩm
                                                    quyền.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                3. Thời Gian Lưu Trữ Thông Tin Cá Nhân
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Thời gian lưu trữ thông tin của bạn là vô thời hạn.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Người tiêu dùng hoàn toàn có thể từ chối và yêu cầu{' '}
                                                    <strong>CKD COS VIET NAM</strong> xóa thông tin cá nhân của Người
                                                    tiêu dùng đã cung cấp, từ chối tiếp nhận dịch vụ chăm sóc khách hàng
                                                    nếu thấy không phù hợp bất cứ lúc nào bằng cách gửi yêu cầu qua
                                                    email, hoặc gọi điện thoại. <strong>CKD COS VIET NAM</strong> hoàn
                                                    toàn tôn trọng thông tin cá nhân và quyết định của Người tiêu dùng,
                                                    cam kết thực hiện xóa dữ liệu thông tin cá nhân của Người tiêu dùng
                                                    khi nhận được yêu cầu của Người tiêu dùng. Tuy nhiên, lịch sử dữ
                                                    liệu thông tin cá nhân của Người tiêu dùng có liên quan đến đơn
                                                    hàng, hay dịch vụ chăm sóc khách hàng của chúng tôi thì vẫn được{' '}
                                                    <strong>CKD COS VIET NAM</strong> quản lý và lưu hành nội bộ
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                4. Những Người hoặc Tổ Chức Có Thể Được Tiếp Cận với Thông Tin Cá Nhân
                                                của Người Tiêu Dùng
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Người tiêu dùng đồng ý rằng, trong trường hợp cần thiết, các cơ quan/ tổ
                                                chức/ cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá
                                                nhân của mình, bao gồm:
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>Ban quản trị.</span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Bên thứ ba có dịch vụ tích hợp với{' '}
                                                    <strong>Website ckdvietnam.com</strong>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Công ty tổ chức sự kiện và nhà tài trợ.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu theo quy
                                                    định tại quy chế hoạt động.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Công ty nghiên cứu thị trường.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Cố vấn tài chính, pháp lý và Công ty kiểm toán.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Bên khiếu nại chứng minh được hành vi vi phạm của Người tiêu dùng.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Theo yêu cầu của cơ quan nhà nước có thẩm quyền.
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                5. Địa Chỉ của Đơn Vị Thu Thập và Quản Lý Thông Tin
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <strong>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>Công ty TNHH Blue Pink</span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </strong>
                    </p>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Địa chỉ: Lầu số 97/9 Đường Phạm Thái Bường, Phường Tân Phong, Quận
                                                    7, Thành phố Hồ Chí Minh
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>Điện thoại: 1900 7327</span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Email: contact@ckdvietnam.com
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                6. Phương Thức và Công Cụ để Người Tiêu Dùng Tiếp Cận và Chỉnh Sửa Dữ
                                                Liệu Thông Tin Cá Nhân của Mình
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Người tiêu dùng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ
                                                thông tin cá nhân của mình bằng cách đăng nhập vào{' '}
                                                <strong>Website ckdvietnam.com</strong> và chỉnh sửa thông tin cá nhân
                                                hoặc yêu cầu ban quản trị thực hiện việc này.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Người tiêu dùng có quyền gửi khiếu nại về việc lộ thông tin cá nhân của
                                                mình cho bên thứ 3 đến ban quản trị. Khi tiếp nhận những phản hồi này,{' '}
                                                <strong>CKD COS VIETNAM</strong> sẽ xác nhận lại thông tin, phải có
                                                trách nhiệm trả lời lý do và hướng dẫn Người tiêu dùng khôi phục và bảo
                                                mật lại thông tin.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Các hình thức tiếp nhận thông tin khiếu nại của Người tiêu dùng:
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <ul>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Qua email: contact@ckdvietnam.com
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                        <li style={{ listStyleType: 'disc' }} aria-level={1}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ color: '#000000' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    Qua điện thoại: 1900 7327
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff3366' }}>
                            <span style={{ fontSize: 16 }}>
                                <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                7. Cam Kết Bảo Mật Thông Tin Cá Nhân của Người Tiêu Dùng
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Thông tin cá nhân của Người tiêu dùng trên{' '}
                                                <strong>Website ckdvietnam.com</strong> được ban quản trị cam kết bảo
                                                mật tuyệt đối theo chính sách bảo mật thông tin cá nhân được đăng tải
                                                trên Website ckdvietnam.com. Việc thu thập và sử dụng thông tin của mỗi
                                                Người tiêu dùng chỉ được thực hiện khi có sự đồng ý của Người tiêu dùng
                                                trừ những trường hợp pháp luật có quy định khác và quy định này.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Không sử dụng, không chuyển giao, cung cấp hoặc tiết lộ cho bên thứ 3 về
                                                thông tin cá nhân của Người tiêu dùng khi không có sự đồng ý của Người
                                                tiêu dùng ngoại trừ các trường hợp được quy định tại quy định này hoặc
                                                quy định của pháp luật.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến
                                                mất mát dữ liệu cá nhân của Người Tiêu Dùng, ban quản trị có trách nhiệm
                                                thông báo và làm việc với cơ quan chức năng điều tra và xử lý kịp thời,
                                                đồng thời thông báo cho Người tiêu dùng được biết về vụ việc.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ color: '#ff0066' }}>
                            <strong>
                                <span style={{ fontSize: 16 }}>
                                    <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                        <span style={{ fontWeight: 400 }}>
                                            <span style={{ fontStyle: 'normal' }}>
                                                <span style={{ textDecoration: 'none' }}>
                                                    8. Cơ Chế Tiếp Nhận và Giải Quyết Khiếu Nại Liên Quan đến Việc Thông
                                                    Tin của Người Tiêu Dùng
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </strong>
                        </span>
                    </p>
                    <p style={{ lineHeight: '1.38' }}>
                        <span style={{ fontSize: 16 }}>
                            <span style={{ fontVariant: 'normal', whiteSpace: 'pre-wrap' }}>
                                <span style={{ color: '#000000' }}>
                                    <span style={{ fontWeight: 400 }}>
                                        <span style={{ fontStyle: 'normal' }}>
                                            <span style={{ textDecoration: 'none' }}>
                                                Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc
                                                phạm vi, Người tiêu dùng gửi email khiếu nại đến email{' '}
                                                <strong>contact@ckdvietnam.com </strong>hoặc gọi điện thoại tới số{' '}
                                                <strong>1900 7327</strong> để khiếu nại và cung cấp chứng cứ liên quan
                                                tới vụ việc cho ban quản trị. Ban quản trị cam kết sẽ phản hồi ngay lập
                                                tức hoặc muộn nhất là trong vòng 24 giờ làm việc kể từ thời điểm nhận
                                                được khiếu nại.
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p>&nbsp;</p>
                </div>
            </div>
        </>
    );
}

export default InformationPrivacyPolicy;
