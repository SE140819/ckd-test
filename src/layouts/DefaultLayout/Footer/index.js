
function Footer() {
    const footer = [
        {
            id: 1,
            title: 'THÔNG TIN LIÊN HỆ',
            content: [
                {
                    id: 1,
                    name: '<p><strong>THỜI GIAN LÀM VIỆC&nbsp;</strong><br>✿&nbsp;Từ Thứ 2 đến Thứ 6&nbsp;( 9:00 AM ~ 5:30 PM )<br>✿&nbsp;Thứ 7 ( 9:00 AM&nbsp;~ 12:00 PM )<br>✿ Nghỉ Chủ Nhật&nbsp;và các Ngày Lễ<br>✿&nbsp;Email:&nbsp;bluepink@ckdcosvietnam.com<br><span style="color: #ff00ff;">✿ Hotline: 1900 7327</span></p>',
                    img: 'https://ckdvietnam.com/upload/elfinder/BRAND/FOOTER%20WEB-01.png',
                },
            ],
        },
        {
            id: 2,
            title: 'LIÊN HỆ HỢP TÁC',
            content: [
                {
                    id: 1,
                    name: '<p><strong>MAIL:&nbsp;</strong>contact@ckdvietnam.com<br>✿ MST: 0317392099<br>✿ Ngày cấp: 21/07/2022<br>✿ Nơi cấp: Sở kế hoạch và đầu tư TP.Hồ Chí Minh<br>&nbsp;</p>',
                    img: 'https://ckdvietnam.com/upload/elfinder/test/logoSaleNoti.png',
                },
            ],
        },
        {
            id: 3,
            title: 'Công ty TNHH BluePink',
            content: [
                {
                    id: 1,
                    name: '<p><p>contact@ckdvietnam.com</p><p>Người đại diện:Phan Thị Phương Tiền</p><p>Mã số thuế: 0317392099</p>',
                },
            ],
        },
    ];

    const search_product = [
        {
            id: 1,
            name: 'San pham 1',
            img: 'https://ckdvietnam.com/upload/elfinder/test/logoSaleNoti.png',
        },
        {
            id: 2,
            name: 'San pham 2',
            img: 'https://ckdvietnam.com/upload/elfinder/test/logoSaleNoti.png',
        },
        {
            id: 3,
            name: 'San pham 3',
            img: 'https://ckdvietnam.com/upload/elfinder/test/logoSaleNoti.png',
        },
        {
            id: 4,
            name: 'San pham 4',
            img: 'https://ckdvietnam.com/upload/elfinder/test/logoSaleNoti.png',
        },
        {
            id: 5,
            name: 'San pham 5',
            img: 'https://ckdvietnam.com/upload/elfinder/test/logoSaleNoti.png',
        },
        {
            id: 6,
            name: 'San pham 6',
            img: 'https://ckdvietnam.com/upload/elfinder/test/logoSaleNoti.png',
        },
    ]
    return (
        <>
            <footer className="mt-5 bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
                <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <ul className="flex space-x-4">
                            <li>
                                <a title="" href="chinh-sach-ban-hang" target="_self">
                                    Chính sách bán hàng
                                </a>
                            </li>
                            <li>
                                <a title="" href="chinh-sach-tra-hang" target="_self">
                                    Chính sách trả hàng
                                </a>
                            </li>
                            <li>
                                <a title="" href="chinh-sach-bao-hanh" target="_self">
                                    Chính sách bảo hành
                                </a>
                            </li>
                            <li>
                                <a title="" href="chinh-sach-bao-mat-thong-tin" target="_self">
                                    Chính sách bảo mật thông tin
                                </a>
                            </li>
                            <li>
                                <a title="" href="ho-tro-dat-hang" target="_self">
                                    Hỗ trợ đặt hàng
                                </a>
                            </li>
                            <li>
                                <a title="" href="cau-hoi-thuong-gap" target="_self">
                                    Câu hỏi thường gặp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                {footer[0].title}
                            </h6>
                            <div className="">
                                <div className="mb-4" dangerouslySetInnerHTML={{ __html: footer[0].content[0].name }} />
                                {/* <img className="w-40" src={footer[0].content[0].img} alt="logo" /> */}
                            </div>
                        </div>
                        {/* <!-- Products section --> */}
                        <div className="">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                {footer[1].title}
                            </h6>
                            <div className="mb-4" dangerouslySetInnerHTML={{ __html: footer[1].content[0].name }} />
                            {/* <img className="w-40 pt-5" src={footer[1].content[0].img} alt="logo" /> */}
                        </div>
                        {/* <!-- Useful links section --> */}
                        <div className="">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                {footer[2].title}
                            </h6>
                            <div className="mb-4" dangerouslySetInnerHTML={{ __html: footer[2].content[0].name }} />
                        </div>
                        {/* <!-- Contact section --> */}
                        <div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-4 
                            md:grid-cols-2 md:grid-rows-2 md:gap-4
                           
                            ">
                                <div className="p-4 border-2 border-gray-200">
                                    <p className="p-1 text-center">0번-키를-누르세요</p>
                                    <p className="p-5 text-center">한국 컨설턴트를 만나보세요~</p>
                                </div>
                                <div className="p-4 border-2 border-gray-200">
                                    <p className="p-1 text-center">Bấm phím 1</p>
                                    <p className="p-5 text-center">Hỗ trợ tư vấn mua hàng</p>
                                </div>
                                <div className="p-4 border-2 border-gray-200">
                                    <p className="p-1 text-center">Bấm phím 2</p>
                                    <p className="p-5 text-center">Liên hệ bộ phận CSKH</p>
                                </div>
                                <div className="p-4 border-2 border-gray-200">
                                    <p className="p-1 text-center">Bấm phím 3</p>
                                    <p className="p-5 text-center">Hỗ trợ về các vấn đề </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}

                <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                    {/* div căn chính giữa */}
                    <div className="flex justify-center">
                        <div className="mx-6">
                            <img className="w-40" src={footer[0].content[0].img} alt="logo" />
                        </div>
                        <div className="mx-6">
                            <img className="w-40" src={footer[1].content[0].img} alt="logo" />
                        </div>
                    </div>
                    <div className="text-center text-neutral-600 dark:text-neutral-400 font-bold">
                        Chấp nhận thanh toán
                    </div>
                    {/* theo chiều dọc */}
                    <div className="flex justify-center">
                        <span>
                            <img
                                width="46px"
                                className="mx-auto p-1"
                                src="https://tse3.mm.bing.net/th?id=OIP.ftxXobVdiOrwkCGDs7lG1QAAAA&pid=Api&P=0&h=220s"
                                alt="payment"
                            />
                        </span>
                        <span>
                            <img
                                width="46px"
                                className="mx-auto p-1"
                                src="https://tse3.mm.bing.net/th?id=OIP.ftxXobVdiOrwkCGDs7lG1QAAAA&pid=Api&P=0&h=220s"
                                alt="payment"
                            />
                        </span>
                        <span>
                            <img
                                width="46px"
                                className="mx-auto p-1"
                                src="https://tse3.mm.bing.net/th?id=OIP.ftxXobVdiOrwkCGDs7lG1QAAAA&pid=Api&P=0&h=220s"
                                alt="payment"
                            />
                        </span>
                        <span>
                            <img
                                width="46px"
                                className="mx-auto p-1"
                                src="https://tse3.mm.bing.net/th?id=OIP.ftxXobVdiOrwkCGDs7lG1QAAAA&pid=Api&P=0&h=220s"
                                alt="payment"
                            />
                        </span>
                    </div>

                    <span>© 2023 Copyright:</span>
                    <a className="font-semibold text-neutral-600 dark:text-neutral-400" href="https://tw-elements.com/">
                        CKDVIETNAM, Inc.
                    </a>
                    <span> Đã đăng ký Bản quyền</span>
                </div>
            </footer>
        </>
    );
}

export default Footer;
