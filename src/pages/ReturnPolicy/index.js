import { Breadcrumb } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';

function ReturnPolicy() {
    return (
        <>
            <div className="container mx-auto my-12">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/salepolicy">Chính sách đổi trả sản phẩm</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-4xl font-bold text-center main-color">Chính sách đổi trả sản phẩm</h1>
                </div>
                <div className="main_fix">
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                <strong>1. Thời gian tiếp nhận yêu cầu đổi/ trả</strong>
                                <br />
                                Sau khi nhận được hàng, Khách hàng có quyền cân nhắc và yêu cầu đổi/ trả sản phẩm trong
                                vòng 14 ngày. <strong>ckdvietnam.com</strong>&nbsp;có quyền từ chối tiếp nhận mọi yêu
                                cầu đổi/ trả từ quý khách được phát sinh sau thời gian trên. Việc xác định thời hạn đổi/
                                trả căn cứ theo ghi chú của nhân viên trên phiếu giao hàng hoặc dấu bưu điện nếu gửi đi
                                Tỉnh.
                                <br />
                                &nbsp;
                                <br />
                                &nbsp;
                                <br />
                                <strong>2. Thời gian xử lý yêu cầu đổi/ trả</strong>
                                <br />
                                Sau khi Khách hàng thông báo với ckdvietnam.com về yêu cầu đổi/ trả, trong vòng 5-7ngày
                                tiếp theo, Khách hàng vui lòng gửi lại sản phẩm đổi và tiền chênh lệch (nếu có – khi đổi
                                sản phẩm) về ckdvietnam.com. Sau thời gian này, nếu chúng tôi vẫn chưa nhận được sản
                                phẩm đổi và tiền chênh lệch (nếu có), yêu cầu đổi/ trả của Khách hàng sẽ bị hủy.
                                <br />
                                &nbsp;
                                <br />
                                ckdvietnam.com sẽ gửi lại cho Khách hàng sản phẩm mới hoặc hoàn tiền do trả sản phẩm
                                trong vòng 7 ngày làm việc kể từ khi nhận được sản phẩm đổi của Khách hàng.
                                <br />
                                &nbsp;
                                <br />
                                &nbsp;
                                <br />
                                <strong>3. Điều kiện đổi/ trả sản phẩm</strong>
                            </span>
                        </span>
                    </p>
                    <table border={1} cellSpacing={0} cellPadding={0}>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'center' }}>&nbsp;</td>
                                <td style={{ textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>Sản Phẩm Lỗi&nbsp;(Từ phía nhà cung cấp)</span>
                                    </span>
                                </td>
                                <td>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>Sản Phẩm Lỗi&nbsp;(Từ phía người sử dụng)</span>
                                    </span>
                                </td>
                                <td>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>Sản Phẩm Không Lỗi</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>1 – 14 ngày</span>
                                    </span>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>Đổi mới Trả không thu phí</span>
                                    </span>
                                </td>
                                <td>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>Không hỗ trợ đổi trả</span>
                                    </span>
                                </td>
                                <td>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>Đổi mới</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>15 ngày trở đi</span>
                                    </span>
                                </td>
                                <td style={{ textAlign: 'center' }} colSpan={3}>
                                    <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                        <span style={{ fontSize: 16 }}>Không hỗ trợ đổi trả</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>&nbsp;</span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Sản phẩm mắc lỗi từ phía nhà sản xuất (hỏng hóc, đổ vỡ sản phẩm, bị lỗi kỹ thuật…).
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Sản phẩm bị hư hỏng, trầy xước do quá trình vận chuyển của nhân viên giao hàng.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>- Sản phẩm đã hết hoặc gần hết thời hạn sử dụng.</span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Sản phẩm không đúng như yêu cầu của khách hàng dockdcosvietnam soạn sai sản phẩm hoặc
                                lấy nhầm tông màu, loại sản phẩm.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Sản phẩm còn nguyên vỏ hộp, tem nhãn và chưa qua sử dụng.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                <strong>Các trường hợp không áp dụng đổi trả</strong>
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Sản phẩm quà tặng, các sản phẩm trong chương trình giảm giá đặc biệt.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>- Sản phẩm đã quá hạn đổi trả (14 ngày).</span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>- Sản phẩm đã bị bóc tem nhãn, seal nếu có.</span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Sản phẩm khách đã thử hoặc qua sử dụng từ 1 lần trở lên.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Bao bì, vỏ hộp sản phẩm bị hư hỏng, trầy xước do lỗi từ phía khách hàng.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>- Sản phẩm không phải mua từ bên ckdcosvietnam.</span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                <strong>cách thức đổi trả</strong>
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - ckdcosvietnam&nbsp;nhận đổi trả sản phẩm cho khách hàng trong vòng 14 ngày, tính kể từ
                                ngày khách hàng mua hoặc nhận được sản phẩm từ bên giao hàng.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Khách hàng cần phải thông báo cho nhân viên ckdcosvietnam&nbsp;lý do đổi trả và địa
                                chỉ, số điện thoại liên lạc chính xác để ckdcosvietnam&nbsp;có thể thực hiện quy trình
                                đổi trả sản phẩm một cách nhanh chóng nhất theo yêu cầu của quý khách.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - ckdcosvietnam&nbsp;quan tâm đến sự hài lòng của khách hàng và mong muốn nâng cao chất
                                lượng dịch vụ, ckdvietnam.com nhận đổi trả sản phẩm miễn phí&nbsp;cho khách hàng theo
                                đúng quy định nêu trên. Quý khách có thể chuyển hàng qua bưu điện gần nhất&nbsp;&amp;
                                Liên hệ với ckdcosvietnam&nbsp;về sản phẩm đổi, mã bưu điện,… để ckdcosvietnam&nbsp;có
                                thể xử lý và gửi hàng lại sớm nhất khi nhận được sản phẩm.
                            </span>
                        </span>
                    </p>
                    <p>
                        <strong>
                            Thời gian trả hàng:&nbsp;Nội thành (TP.HCM) từ 5&nbsp;ngày, ngoại thành từ 10&nbsp;ngày
                        </strong>
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                <strong>4. Hình thức hoàn tiền</strong>
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>&nbsp;a. Trả hàng tại chi nhánh ckdcosvietnam</span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Đơn hàng đã thanh toán bằng tiền mặt ( nếu khách hàng đến tại địa chỉ 97/9 Phạm Thái
                                Bường, Phường Tân Phong, Quận 7)
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Đơn hàng đã thanh toán bằng thẻ ngân hàng: Chuyển khoản sau 3-5 từ ngày (không tính
                                ngày lễ, cuối tuần) khách trả hàng.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Đơn hàng đã thanh toán bằng momo, zalopay: Hoàn tiền bằng hệ thống sau 3-8 ngày (với
                                thể nội địa) và từ 15-90 ngày (với thẻ visa) làm việc (không tính ngày lễ, cuối tuần)
                                hoặc chuyển thanh toán cho đơn hàng tiếp theo.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>b. Trả hàng tại nhà</span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Với các đơn hàng đã nhận hàng và thanh toán, ckdcosvietnamsẽ chuyển khoản cho khách
                                hàng sau khi đã nhận được hàng khách trả.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                - Các đơn hàng khách hàng đã thanh toán online,ckdcosvietnamchuyển lại tiền vào tài
                                khoản mà khách đã sử dụng khi thanh toán cho khách hàng.
                            </span>
                        </span>
                    </p>
                    <p>
                        <strong>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                <span style={{ fontSize: 16 }}>5. Hình thức vận chuyển</span>
                            </span>
                        </strong>
                    </p>
                    <p>
                        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                Đặt hàng online giao tận nơi khu vực nội thành (TP.HCM)
                            </span>
                        </span>
                    </p>
                    <p>
                        <strong>NỘI THÀNH:(TP HCM)</strong>
                    </p>
                    <p>Trọng lượng: 0-250Gram | 250 - 500Gram&nbsp;</p>
                    <p>Giao tiết kiệm: 16.500 ( 3kg )</p>
                    <p>Giao Hỏa tốc: 22.000 ( 3kg )</p>
                    <p>Thời gian giao hàng: Từ 2 đến&nbsp;3 ngày</p>
                    <p>
                        <strong>NGOẠI THÀNH&nbsp;VÀ TOÀN QUỐC</strong>
                    </p>
                    <p>Trọng lượng: 0-250Gram | 250 - 500Gram&nbsp;</p>
                    <p>Giao tiết kiệm: 31.000</p>
                    <p>Giao nhanh: 38.0000</p>
                    <p>Thời gian giao hàng: Từ 4 đến&nbsp;5 ngày</p>
                    <p>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                <strong>Lưu ý:</strong>&nbsp;Tất cả các đơn hàng đã thanh toán có sử dụng gift
                                card,ckdcosvietnam hỗ trợ chuyển mã sử dụng cho đơn hàng tiếp theo.
                            </span>
                        </span>
                    </p>
                    <ul style={{ marginLeft: 40 }}>
                        <li style={{ textAlign: 'justify' }}>
                            <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                                <span style={{ fontSize: 16 }}>
                                    Trường hợp đổi/trả hàng theo yêu cầu của Khách hàng (không phải lỗi từ
                                    ckdvietnam.com)
                                </span>
                            </span>
                        </li>
                    </ul>
                    <p style={{ textAlign: 'justify' }}>
                        <span style={{ fontFamily: 'Arial,Helvetica,sans-serif' }}>
                            <span style={{ fontSize: 16 }}>
                                Khách hàng chỉ được đổi 1 lần cho sản phẩm đã mua và chỉ khi ckdvietnam.com còn sản phẩm
                                thay thế. Sản phẩm thay thế phải có giá trị ngang hoặc cao hơn sản phẩm đã mua trước đó.
                                Với các yêu cầu đổi size hoặc màu sắc sản phẩm, ckdvietnam.com sẽ hỗ trợ đổi sang sản
                                phẩm cùng kiểu dáng hoặc cùng nhãn hàng.
                            </span>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                </div>
            </div>
        </>
    );
}

export default ReturnPolicy;
