import React, { useState, useEffect } from 'react';
import { Breadcrumb, Progress } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { product_list, review, title, categorty, type } from '../../data/home';
import EditorTextParser from '../../components/editor-parser/EditorTextParser';
import { exampleData } from '../../data/exampleData';
function Product() {
    const initialFilterState = {
        priceRange: { min: 0, max: 1000000 },
        brand: '',
        category: '',
        better: '',
        sold: 0,
        type: '',
        date: { type: Date, default: Date.now },
    };

    const [filterState, setFilterState] = useState(initialFilterState);
    const [filteredProducts, setFilteredProducts] = useState([...product_list]);
    const [noProductFound, setNoProductFound] = useState(false); // State để kiểm tra xem có sản phẩm nào được tìm thấy hay không

    const [data, setData] = useState(exampleData);

    const filterProducts = () => {
        const newFilteredProducts = product_list.filter((product) => {
            // giá trong khoảng từ min đến max
            const isPriceMatch =
                filterState.priceRange.min <= product.price && product.price <= filterState.priceRange.max;

            const isBrandMatch = filterState.brand === '' || product.brand === filterState.brand;
            const isCategoryMatch = filterState.category === '' || product.category === filterState.category;
            const isBetterMatch = filterState.better === '' || product.better === filterState.better;
            const isSoldMatch = filterState.sold === 0 || product.sold >= filterState.sold;
            // khuyến mãi
            const isVoucherMatch = filterState.voucher === 0 || product.voucher >= filterState.voucher;

            const isTypeMatch = filterState.type === '' || product.type === filterState.type;

            return isBrandMatch && isCategoryMatch && isBetterMatch && isSoldMatch && isTypeMatch;
        });

        setFilteredProducts(newFilteredProducts);

        // Kiểm tra nếu không có sản phẩm được tìm thấy và cập nhật state
        setNoProductFound(newFilteredProducts.length === 0);
    };

    useEffect(() => {
        filterProducts();
    }, [filterState]); // Recalculate filteredProducts whenever filterState changes

    return (
        <>
            {/* dùng grid  4 sản phẩm 1 hàng */}
            <div className="container mx-auto pt-5 p-5 main_fix">
                <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Trang chủ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        <span>Sản phẩm</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="container mx-auto mt-5">
                    <form
                        className="max-w-3xl
                    mx-auto flex"
                    >
                        {/* select theo tên brand */}
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Thương hiệu
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, brand: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    <option value="">Tất cả</option>
                                    <option value="CKD">CKD</option>
                                    <option value="Lactto">Lactto</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Loại sản phẩm
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    {/* mặc định sẽ là tất cả */}
                                    <option value="">Tất cả</option>
                                    {categorty.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex-1 mr-2">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Theo dòng
                                </label>
                                <select
                                    onChange={(e) => setFilterState({ ...filterState, type: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg"
                                >
                                    <option value="">Tất cả</option>
                                    {type.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* Tìm kiếm giá */}
                    </form>
                </div>
                {/* Hiển thị thông báo nếu không có sản phẩm */}
                {noProductFound && (
                    <div className="flex justify-center items-center h-96">
                        {/* <img src="./assets/images/not-found/no-product.jpg" alt="Không có sản phẩm" /> */}
                        <h1 className="text-2xl font-bold">Không có sản phẩm nào phù hợp</h1>
                    </div>
                )}
                <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                    {filteredProducts.map((item, index) => (
                        <div className="col-span-1" key={index}>
                            <div className="container flex justify-center mb-5">
                                <div className="max-w-sm">
                                    <div className="bg-white relative transition duration-500 rounded-lg">
                                        <div className="item">
                                            <div className="img_sp zoom_hinh">
                                                <div className="image-container">
                                                    <a href={item.href} title={item.alt}>
                                                        <img
                                                            className="img-fluid img-lazy img-load"
                                                            src={item.image}
                                                            alt={item.alt}
                                                            title={item.alt}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-lg bg-white">
                                            {/* reposive */}
                                            <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                <a
                                                    href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                    title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                >
                                                    {item.name}
                                                </a>
                                            </h1>
                                            <p className="gia_sp">
                                                <span className="gia giamoi">{item.price}</span>
                                            </p>
                                            <div className="flex justify-center">
                                                <span className="border rounded p-1 border-green-500 text-green-500">
                                                    New
                                                </span>
                                            </div>
                                            <div className="mt-2">
                                                <div className="text-gray-500 text-xs">{title.daban}</div>
                                                <Progress
                                                    progress={50}
                                                    color="pink"
                                                    textLabel="50/100"
                                                    size="lg"
                                                    //    labelProgress
                                                    labelText
                                                />
                                            </div>
                                        </div>

                                        <span
                                            className="cart-buy addcart transition"
                                            data-id="157"
                                            data-action="buynow"
                                        ></span>
                                        {!!item.voucher && (
                                            <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                {item.voucher}%
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* nếu filterProducts có cùng type thì hiện thị categorty.content tương ứng */}
            </div>
            {/* <div className="container mx-auto">
                <EditorTextParser data={data} />
            </div> */}

            {/* <div>
                <div className="container mx-auto ">
                    <div className="row">
                        <div className="col-12 desc-sanpham flex justify-center">
                            <div
                                className="text content mCustomScrollbar page-product-description"
                                data-mcs-theme="dark"
                            >
                                <h2>
                                    <strong>Giới thiệu về mặt nạ se khít lỗ chân lông</strong>
                                </h2>

                                <h3>
                                    <strong>1. Định nghĩa và công dụng chính của mặt nạ này.</strong>
                                </h3>

                                <p>
                                    Mặt nạ se khít lỗ chân lông là sản phẩm chăm sóc da phổ biến, thiết kế để giúp làm
                                    sạch sâu và se khít các lỗ chân lông trên khuôn mặt. Công dụng chính của mặt nạ này
                                    tập trung vào việc loại bỏ bụi bẩn, bã nhờn và tạp chất tích tụ trong lỗ chân lông,
                                    từ đó giúp làm sáng da và giảm thiểu tình trạng lỗ chân lông to, mở rộng.
                                </p>

                                <p>
                                    Mặt nạ này thường chứa các thành phần làm sạch như than hoạt tính, khoáng chất và
                                    các chất hoạt động hấp thụ dầu nhẹ nhàng. Khi được áp dụng lên da, các thành phần
                                    này tác động sâu vào lỗ chân lông, hấp thụ bụi bẩn và dầu thừa, giúp da trở nên sạch
                                    sẽ và mịn màng hơn. Ngoài ra, mặt nạ se khít lỗ chân lông cũng thường chứa các chất
                                    làm dịu da như tảo biển, hoa cúc La Mã hay chiết xuất từ hoa hồng, giúp làm dịu da
                                    sau khi loại bỏ tạp chất, từ đó tạo cảm giác thoải mái và mềm mại cho làn da.
                                </p>

                                <p>
                                    Qua việc sử dụng đều đặn, mặt nạ se khít lỗ chân lông không chỉ giúp cải thiện vấn
                                    đề về lỗ chân lông mà còn đem lại làn da sáng, mịn màng và tươi trẻ hơn.
                                </p>

                                <h3>
                                    <strong>2. Lợi ích mà sản phẩm mang lại cho làn da.</strong>
                                </h3>

                                <p>
                                    Mặt nạ se khít lỗ chân lông là một trong những sản phẩm chăm sóc da phổ biến, thiết
                                    kế để giúp cải thiện vấn đề lỗ chân lông to và không đều trên da. Sản phẩm này
                                    thường chứa các thành phần làm sạch sâu, giúp loại bỏ bã nhờn, bụi bẩn và tạp chất
                                    từ lỗ chân lông, từ đó làm sáng da và làm se khít các lỗ chân lông mở rộng.
                                </p>

                                <p>
                                    Lợi ích chính của mặt nạ se khít lỗ chân lông là cải thiện tình trạng da mụn và giảm
                                    việc tiết dầu. Nhờ vào khả năng làm sạch sâu, mặt nạ này loại bỏ bụi bẩn tích tụ
                                    trong lỗ chân lông, giúp ngăn chặn vi khuẩn và làm dịu da, từ đó giảm thiểu nguy cơ
                                    mụn đầu đen và mụn viêm. Đồng thời, việc se khít lỗ chân lông cũng giúp kiểm soát sự
                                    tiết dầu của da, làm giảm bóng nhờn và tạo cảm giác mát lạnh, tươi mới cho làn da.
                                    Sử dụng đều đặn mặt nạ se khít lỗ chân lông có thể cải thiện đáng kể vấn đề lỗ chân
                                    lông to, mang lại làn da mịn màng, đồng đều và sáng hơn.
                                </p>

                                <p
                                    style={{
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        alt="mặt nạ se khít lỗ chân lông"
                                        src="https://ckdvietnam.com/upload/elfinder/m%E1%BA%B7t%20n%E1%BA%A1%20se%20kh%C3%ADt%20l%E1%BB%97%20ch%C3%A2n%20l%C3%B4ng.jpg"
                                        style={{
                                            width: '828px',
                                            height: '689px',
                                        }}
                                    />
                                </p>

                                <h2>
                                    <strong>Các thành phần chính thường có trong mặt nạ se khít lỗ chân lông</strong>
                                </h2>

                                <p>
                                    Tất cả các thành phần trong mặt nạ se khít lỗ chân lông đều đóng vai trò quan trọng
                                    trong việc cải thiện và chăm sóc làn da một cách toàn diện:
                                </p>

                                <p>
                                    <strong>Than hoạt tính</strong>: Đây là một chất hút bụi bẩn, dầu và các tạp chất từ
                                    lỗ chân lông và bề mặt da. Công dụng chính của than hoạt tính là làm sạch sâu, giúp
                                    loại bỏ chất cặn mà không làm khô da, làm se khít lỗ chân lông và giảm bóng nhờn.
                                </p>

                                <p>
                                    <strong>Đất sét Bentonite</strong>: Loại đất sét này có khả năng hấp thụ dầu và chất
                                    cặn từ da. Khi tiếp xúc với nước, bentonite tạo ra một chất gel nhẹ, giúp làm sạch
                                    sâu và se khít lỗ chân lông một cách nhẹ nhàng mà không gây kích ứng cho da.
                                </p>

                                <p>
                                    <strong>Đất sét Kaolin</strong>: Kaolin làm sạch da một cách nhẹ nhàng và không gây
                                    khô da. Nó giúp hấp thụ dầu và bã nhờn, làm se khít lỗ chân lông một cách nhẹ nhàng,
                                    thích hợp cho da nhạy cảm và da dầu.
                                </p>

                                <p>
                                    <strong>Acid salicylic</strong>: Đây là một loại acid beta hydroxy (BHA) có khả năng
                                    thâm nhập sâu vào lỗ chân lông, loại bỏ tế bào chết và tạp chất, giúp se khít lỗ
                                    chân lông, làm sáng da và ngăn ngừa mụn.
                                </p>

                                <p>
                                    <strong>Tinh chất từ thực vật hoặc trái cây</strong>: Cung cấp dưỡng chất và vitamin
                                    cần thiết cho da. Đồng thời, chúng có tính chất làm dịu và tái tạo da, giúp làn da
                                    trở nên mềm mại và mịn màng hơn sau khi làm sạch.
                                </p>

                                <p>
                                    <strong>Chất làm dịu da</strong>: Như tinh chất lô hội, panthenol, chúng giúp làm
                                    dịu da, giảm kích ứng và cân bằng độ ẩm cho da, làm giảm sự căng trở và đồng thời
                                    tạo cảm giác dễ chịu sau khi sử dụng mặt nạ.
                                </p>

                                <p>
                                    Kết hợp những thành phần này giúp mặt nạ không chỉ làm sạch sâu và se khít lỗ chân
                                    lông mà còn cung cấp dưỡng chất và làm dịu da, tạo điều kiện tối ưu để da trở nên
                                    mịn màng, sáng và khỏe mạnh.
                                </p>

                                <h2>
                                    <strong>Cách sử dụng&nbsp;mặt nạ se khít lỗ chân lông</strong>
                                </h2>

                                <p>Cách sử dụng mặt nạ se khít lỗ chân lông có thể được thực hiện theo các bước sau:</p>

                                <h3>
                                    <strong>1. Làm sạch da:</strong>
                                </h3>

                                <p>
                                    Để sử dụng mặt nạ se khít lỗ chân lông một cách hiệu quả, bước đầu tiên quan trọng
                                    là làm sạch da. Trước khi áp dụng mặt nạ, hãy rửa mặt kỹ bằng sữa rửa mặt phù hợp
                                    với loại da của bạn để loại bỏ bụi bẩn, dầu và mọi tạp chất trên bề mặt da. Sau đó,
                                    lau khô da nhẹ nhàng bằng khăn sạch.
                                </p>

                                <p>
                                    Tiếp theo, áp dụng một lượng mặt nạ vừa đủ lên vùng da sạch và khô, tránh vùng mắt
                                    và miệng. Dùng ngón tay hoặc cọ mặt để thoa đều mặt nạ lên da, tập trung vào các
                                    vùng có lỗ chân lông to hoặc dầu nhờn nhiều. Đợi khoảng thời gian hướng dẫn trên bao
                                    bì sản phẩm, thường là khoảng 10-15 phút, cho mặt nạ khô và thấm đều vào da. Khi đã
                                    khô, rửa sạch bằng nước ấm và lau nhẹ da bằng khăn mềm. Kết thúc bằng việc áp dụng
                                    toner và kem dưỡng để cung cấp độ ẩm và dưỡng chất cho da.
                                </p>

                                <h3>
                                    <strong>2. Xông hơi hoặc dùng nước nóng</strong>
                                </h3>

                                <p>
                                    Khi sử dụng mặt nạ se khít lỗ chân lông, việc xông hơi hoặc sử dụng nước nóng trước
                                    đó có thể tăng hiệu quả của sản phẩm. Xông hơi hoặc đặt một khăn ướt nóng lên khuôn
                                    mặt giúp mở rộng lỗ chân lông và làm mềm tế bào da, giúp mặt nạ thẩm thấu và hoạt
                                    động tốt hơn. Quá trình này cũng giúp loại bỏ dầu và bụi bẩn sâu hơn từ lỗ chân
                                    lông. Tuy nhiên, cần thận trọng để không làm tổn thương da với nhiệt độ quá cao. Sau
                                    khi xông hơi hoặc dùng nước nóng, áp dụng mặt nạ theo hướng dẫn của sản phẩm và
                                    massage nhẹ nhàng để tận dụng tối đa lợi ích của mặt nạ se khít lỗ chân lông trên
                                    làn da sạch sẽ và mềm mại.
                                </p>

                                <h3>
                                    <strong>3. Áp dụng mặt nạ</strong>
                                </h3>

                                <p>
                                    Để áp dụng mặt nạ se khít lỗ chân lông, trước tiên, hãy làm sạch da bằng nước hoặc
                                    sữa rửa mặt nhẹ nhàng để loại bỏ bụi bẩn và dầu thừa. Sau đó, thoa một lớp mỏng mặt
                                    nạ lên toàn bộ khuôn mặt, tránh vùng mắt và miệng. Để mặt nạ thẩm thấu và hoạt động
                                    tốt nhất, hãy massage nhẹ nhàng để các thành phần có thể thấm sâu vào da. Đợi khoảng
                                    10-15 phút cho mặt nạ khô hoàn toàn và cảm nhận cảm giác căng nhẹ trên da. Sau đó,
                                    rửa sạch bằng nước ấm và lau nhẹ nhàng để làm sạch hoàn toàn. Cuối cùng, sử dụng
                                    toner và kem dưỡng ẩm để cân bằng và cung cấp độ ẩm cho da. Lưu ý không nên sử dụng
                                    mặt nạ quá thường xuyên, thường là 1-2 lần mỗi tuần để tránh làm khô da hoặc gây
                                    kích ứng.
                                </p>

                                <h3>
                                    <strong>4. Đợi mặt nạ khô</strong>
                                </h3>

                                <p>
                                    Để sử dụng mặt nạ se khít lỗ chân lông hiệu quả, sau khi thoa đều sản phẩm lên toàn
                                    bộ khuôn mặt tránh vùng mắt và môi, bạn cần đợi mặt nạ khô hoàn toàn. Thời gian chờ
                                    thường dao động từ 10 đến 20 phút tùy theo loại sản phẩm và thành phần trong mặt nạ.
                                    Khi mặt nạ bắt đầu khô, bạn sẽ cảm nhận làn da căng lên và mặt nạ trở nên khô ráp.
                                    Đây là dấu hiệu để bạn biết là nên rửa sạch mặt nạ. Tránh để mặt nạ khô quá lâu vì
                                    điều này có thể làm khô da hoặc gây kích ứng. Sau khi đã đợi đủ thời gian, rửa sạch
                                    mặt bằng nước ấm và lau nhẹ bằng khăn mềm để loại bỏ mặt nạ, sau đó áp dụng bước
                                    dưỡng da tiếp theo để đảm bảo da được cung cấp đầy đủ dưỡng chất và độ ẩm cần thiết.
                                </p>

                                <h3>
                                    <strong>5. Tẩy mặt nạ</strong>
                                </h3>

                                <p>
                                    Sau khi đã để mặt nạ se khít lỗ chân lông thẩm thấu và làm việc trên da theo thời
                                    gian quy định trên sản phẩm (thường là khoảng 10-15 phút), bạn có thể tẩy mặt nạ
                                    bằng cách rửa sạch khuôn mặt với nước ấm. Sử dụng đầu ngón tay massage nhẹ nhàng
                                    trong quá trình rửa để loại bỏ mặt nạ một cách dịu nhẹ. Nếu mặt nạ có thành phần đất
                                    sét, bạn có thể cảm nhận được lớp mặt nạ sẽ cứng lại sau khi khô, điều này hoàn toàn
                                    bình thường. Tránh sử dụng sức mạnh quá lớn khi rửa mặt để tránh kích ứng da. Khi đã
                                    rửa sạch mặt nạ, lau nhẹ bằng khăn sạch và áp dụng bước dưỡng da tiếp theo như
                                    serum, kem dưỡng để cung cấp độ ẩm cho da sau quá trình làm sạch sâu này.
                                </p>

                                <h3>
                                    <strong>6. Dùng nước lạnh hoặc toner</strong>
                                </h3>

                                <p>
                                    Sau khi gỡ mặt nạ se khít lỗ chân lông, việc sử dụng nước lạnh hoặc toner là một
                                    bước quan trọng để hoàn thiện quá trình chăm sóc da. Nước lạnh có thể được sử dụng
                                    để rửa sạch da, giúp se khít lỗ chân lông và làm dịu da sau khi loại bỏ mặt nạ. Điều
                                    này giúp cung cấp độ ẩm tự nhiên cho da và làm cho lỗ chân lông co lại, ngăn ngừa
                                    bụi bẩn và tạp chất xâm nhập sau khi sử dụng mặt nạ.
                                </p>

                                <p>
                                    Ngoài ra, toner có thể được áp dụng bằng cách thấm lên da bằng bông cotton hoặc lòng
                                    bàn tay. Toner giúp cân bằng độ pH của da, làm sạch sâu các tế bào chết còn sót lại
                                    và cung cấp dưỡng chất cho da. Việc này tạo điều kiện tối ưu cho các bước chăm sóc
                                    da tiếp theo và giúp da trở nên mềm mịn, sáng và sức khỏe.
                                </p>

                                <h3>
                                    <strong>7. Kết thúc với kem dưỡng</strong>
                                </h3>

                                <p>
                                    Sau khi rửa mặt sạch và áp dụng mặt nạ se khít lỗ chân lông theo hướng dẫn sản phẩm,
                                    để hoàn thiện quy trình chăm sóc da, bước cuối cùng là sử dụng kem dưỡng.
                                </p>

                                <p>
                                    Chọn kem dưỡng phù hợp với loại da của bạn để cung cấp độ ẩm và dưỡng chất cho da
                                    sau khi đã làm sạch sâu. Massage nhẹ nhàng để kem dưỡng thẩm thấu sâu vào da, giúp
                                    tái tạo và làm dịu làn da sau quá trình xử lý mặt nạ. Kem dưỡng có thể chứa các
                                    thành phần như hyaluronic acid để cung cấp độ ẩm, vitamin C để làm sáng da, hoặc các
                                    dưỡng chất từ thực vật giúp tái tạo và bảo vệ da khỏi tác động bên ngoài.
                                </p>

                                <p>
                                    Bước này không chỉ kết thúc quy trình chăm sóc da mà còn giúp cân bằng độ ẩm và
                                    dưỡng chất cho da, để da trở nên mềm mịn, săn chắc và có độ đàn hồi tốt hơn.
                                </p>

                                <p>
                                    Nhớ rằng, tần suất sử dụng mặt nạ se khít lỗ chân lông nên tuân theo hướng dẫn của
                                    sản phẩm và phản ứng của da của bạn. Đừng sử dụng quá nhiều lần trong tuần để tránh
                                    làm khô da hoặc kích ứng.
                                </p>

                                <p
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        alt="Cách sử dụng&nbsp;mặt nạ se khít lỗ chân lông"
                                        src="https://ckdvietnam.com/upload/elfinder/C%C3%A1ch%20s%E1%BB%AD%20d%E1%BB%A5ng%C2%A0m%E1%BA%B7t%20n%E1%BA%A1%20se%20kh%C3%ADt%20l%E1%BB%97%20ch%C3%A2n%20l%C3%B4ng.jpg"
                                        style={{
                                            width: '828px',
                                            height: '689px',
                                        }}
                                    />
                                </p>

                                <h2>
                                    <strong>Lời khuyên về tần suất sử dụng và thời gian thích hợp</strong>
                                </h2>

                                <p>
                                    Đối với mặt nạ se khít lỗ chân lông, tần suất sử dụng phụ thuộc vào loại da của bạn
                                    và thành phần cụ thể trong sản phẩm. Đa số sản phẩm này thường khuyến khích sử dụng
                                    1-2 lần mỗi tuần. Tuy nhiên, nếu da bạn có xu hướng nhạy cảm hoặc khô, việc sử dụng
                                    mặt nạ quá thường xuyên có thể gây kích ứng hoặc làm khô da thêm. Trước khi áp dụng
                                    sản phẩm lên toàn bộ khuôn mặt, hãy thử nghiệm trên một vùng nhỏ để đảm bảo không
                                    gây phản ứng phụ.
                                </p>

                                <p>
                                    Thời gian thích hợp sử dụng mặt nạ se khít lỗ chân lông thường là vào buổi tối sau
                                    khi đã rửa mặt sạch, khi da đã được làm sạch và chuẩn bị tốt nhất cho việc hấp thụ
                                    các dưỡng chất từ sản phẩm. Sử dụng mặt nạ trước khi đi ngủ có thể tận dụng thời
                                    gian nghỉ giấc để da hấp thụ tối đa các thành phần làm sạch và se khít lỗ chân lông.
                                </p>

                                <p>
                                    Tuy nhiên, không nên sử dụng mặt nạ này quá gần vào thời gian bạn cần trang điểm
                                    hoặc trước khi tiếp xúc với ánh nắng mặt trời mà không bảo vệ da bằng kem chống
                                    nắng. Điều này giúp tránh tình trạng da nhạy cảm sau khi sử dụng mặt nạ và bảo vệ da
                                    khỏi tác động của tia UV. Đồng thời, hãy luôn tuân thủ hướng dẫn của sản phẩm và
                                    điều chỉnh tần suất sử dụng phù hợp với phản ứng của da của bạn.
                                </p>

                                <h2>
                                    <strong>Hiệu quả và tác động</strong>
                                </h2>

                                <h3>
                                    <strong>1. Đánh giá về hiệu quả của mặt nạ trong việc se khít lỗ chân lông.</strong>
                                </h3>

                                <p>
                                    Hiệu quả của mặt nạ se khít lỗ chân lông thường được đánh giá thông qua khả năng làm
                                    sạch sâu và làm se khít lỗ chân lông của nó. Sản phẩm này thường chứa các thành phần
                                    như than hoạt tính, đất sét bentonite và các acid làm sạch, giúp loại bỏ bã nhờn,
                                    tạp chất và tế bào chết tích tụ trong lỗ chân lông. Khi sử dụng đúng cách và đều
                                    đặn, mặt nạ có thể giúp làm sạch lỗ chân lông hiệu quả, ngăn chặn vi khuẩn và giảm
                                    tình trạng mụn.
                                </p>

                                <p>
                                    Tuy nhiên, hiệu quả của mặt nạ se khít lỗ chân lông có thể thay đổi tùy thuộc vào
                                    loại da của mỗi người. Da mụn dầu có thể nhận được lợi ích rõ rệt từ việc se khít lỗ
                                    chân lông, giảm sự bí bách và ngăn chặn mụn hơn. Trong khi đó, da khô hoặc nhạy cảm
                                    có thể cần cân nhắc kỹ hơn về tần suất sử dụng để tránh làm khô da hoặc gây kích
                                    ứng.
                                </p>

                                <p>
                                    Ngoài ra, việc duy trì hiệu quả của mặt nạ yêu cầu sự kiên nhẫn và sự nhất quán
                                    trong việc chăm sóc da. Sử dụng đúng cách và kết hợp với chế độ chăm sóc da hàng
                                    ngày là cách tốt nhất để tận dụng tối đa công dụng se khít lỗ chân lông của mặt nạ.
                                </p>

                                <h3>
                                    <strong>2. Các tác động phụ có thể xảy ra và cách xử lý khi có.</strong>
                                </h3>

                                <p>
                                    Khi sử dụng mặt nạ se khít lỗ chân lông, một số tác động phụ có thể xảy ra, đặc biệt
                                    đối với những người có làn da nhạy cảm. Một trong những tác động phổ biến là cảm
                                    giác kích ứng như đỏ, rát hoặc nhẹ nhưng tạm thời. Điều này thường do thành phần
                                    hoặc tác động của mặt nạ đến da. Nếu bạn cảm thấy đỏ hoặc kích ứng, hãy rửa sạch
                                    ngay lập tức và tránh tiếp tục sử dụng sản phẩm. Đối với da nhạy cảm, thử nghiệm
                                    trước khi sử dụng trên vùng nhỏ có thể giúp tránh tình trạng kích ứng lớn.
                                </p>

                                <p>
                                    Một tác động phụ khác có thể là da bị khô do mặt nạ có khả năng hút dầu quá mức.
                                    Trong trường hợp này, sau khi sử dụng mặt nạ, bạn nên áp dụng kem dưỡng ẩm để cung
                                    cấp độ ẩm cần thiết cho da. Chọn kem dưỡng không chứa hóa chất có thể gây kích ứng
                                    và cân nhắc sử dụng thêm một lớp mặt nạ dưỡng ẩm để giữ cho da được bổ sung độ ẩm
                                    đầy đủ.
                                </p>

                                <p>
                                    Nếu tình trạng kích ứng hay khô da kéo dài hoặc trở nên nghiêm trọng, hãy tham khảo
                                    ý kiến của bác sĩ hoặc chuyên gia da liễu. Họ có thể đưa ra lời khuyên cụ thể và sản
                                    phẩm phù hợp hơn với tình trạng da của bạn.
                                </p>

                                <p style={{ textAlign: 'center' }}>
                                    <img
                                        alt="hiệu quả của mặt nạ trong việc se khít lỗ chân lông."
                                        src="https://ckdvietnam.com/upload/elfinder/hi%E1%BB%87u%20qu%E1%BA%A3%20c%E1%BB%A7a%20m%E1%BA%B7t%20n%E1%BA%A1%20trong%20vi%E1%BB%87c%20se%20kh%C3%ADt%20l%E1%BB%97%20ch%C3%A2n%20l%C3%B4ng..webp"
                                        style={{
                                            width: '828px',
                                        }}
                                    />
                                </p>

                                <h2>
                                    <strong>Lưu ý&nbsp;và khuyến cáo</strong>
                                </h2>

                                <h3>
                                    <strong>1. Những lưu ý đặc biệt khi sử dụng mặt nạ.</strong>
                                </h3>

                                <p>
                                    Khi sử dụng mặt nạ se khít lỗ chân lông, có một số lưu ý quan trọng cần nhớ để đảm
                                    bảo hiệu quả và an toàn cho làn da của bạn. Đầu tiên, trước khi áp dụng mặt nạ lên
                                    toàn bộ khuôn mặt, hãy thử nghiệm trên một vùng nhỏ của da để kiểm tra phản ứng.
                                    Điều này giúp tránh tình trạng kích ứng hoặc phản ứng dị ứng trong trường hợp da của
                                    bạn không phù hợp với thành phần trong sản phẩm.
                                </p>

                                <p>
                                    Khi đang sử dụng mặt nạ, hãy tuân thủ thời gian giới hạn được ghi trên sản phẩm.
                                    Đừng để mặt nạ trên da lâu hơn thời gian quy định vì điều này có thể gây khô da hoặc
                                    kích ứng, đặc biệt là đối với những sản phẩm chứa các thành phần mạnh mẽ như acid
                                    salicylic. Ngoài ra, không nên sử dụng mặt nạ quá thường xuyên, theo đúng hướng dẫn
                                    của nhãn sản phẩm hoặc theo khuyến nghị của chuyên gia da liễu.
                                </p>

                                <p>
                                    Sau khi loại bỏ mặt nạ, hãy rửa sạch kỹ tay trước khi tiếp xúc với da mặt để tránh
                                    việc đưa bất kỳ tạp chất hay vi khuẩn từ tay vào da. Hơn nữa, sau khi sử dụng mặt
                                    nạ, hãy áp dụng kem dưỡng để cung cấp độ ẩm và dưỡng chất cho da. Điều này giúp phục
                                    hồi độ ẩm và cân bằng cho làn da sau quá trình làm sạch sâu, đồng thời làm dịu và
                                    tái tạo làn da sau khi tiếp xúc với các thành phần trong mặt nạ.
                                </p>

                                <h3>
                                    <strong>
                                        2. Khuyến cáo về việc kiểm tra da trước khi sử dụng và các tình huống nên tránh.
                                    </strong>
                                </h3>

                                <p>
                                    Việc kiểm tra da trước khi sử dụng mặt nạ se khít lỗ chân lông là rất quan trọng để
                                    đảm bảo an toàn và tránh tác động không mong muốn lên làn da của bạn. Thử nghiệm một
                                    lượng nhỏ sản phẩm trên một vùng da nhỏ, thường là ở phía sau tai hoặc ở cổ, và chờ
                                    24 giờ để kiểm tra xem có bất kỳ phản ứng phụ nào xuất hiện hay không. Nếu có dấu
                                    hiệu kích ứng như đỏ, ngứa, hoặc nổi mẩn, bạn không nên sử dụng sản phẩm trên toàn
                                    bộ khuôn mặt.
                                </p>

                                <p>
                                    <strong>
                                        Cũng cần tránh những tình huống sau khi sử dụng mặt nạ se khít lỗ chân lông:
                                    </strong>
                                </p>

                                <p>
                                    <strong>Tránh ánh nắng mặt trời trực tiếp</strong>: Da sau khi sử dụng mặt nạ có thể
                                    trở nên nhạy cảm hơn đối với tác động của ánh nắng mặt trời. Nên sử dụng kem chống
                                    nắng hoặc hạn chế tiếp xúc trực tiếp với ánh nắng sau khi sử dụng mặt nạ.
                                </p>

                                <p>
                                    <strong>Không sử dụng quá thường xuyên</strong>: Việc sử dụng mặt nạ quá thường
                                    xuyên có thể làm khô da hoặc gây kích ứng. Tuân thủ hướng dẫn sử dụng của sản phẩm
                                    để tránh tình trạng này.
                                </p>

                                <p>
                                    <strong>Tránh vùng mắt và môi</strong>: Vùng da quanh mắt và môi thường nhạy cảm hơn
                                    so với phần còn lại của khuôn mặt. Hãy tránh áp dụng mặt nạ quá gần vùng này để
                                    tránh tác động không mong muốn.
                                </p>

                                <p>
                                    <strong>Không sử dụng trên vùng da bị tổn thương</strong>: Tránh áp dụng mặt nạ lên
                                    vùng da đang bị tổn thương, trầy xước, hoặc có mụn viêm để không làm tăng thêm tình
                                    trạng kích ứng hoặc nhiễm trùng.
                                </p>

                                <p>
                                    Luôn lưu ý đọc kỹ hướng dẫn và chú ý đến phản ứng của làn da sau khi sử dụng mặt nạ
                                    để đảm bảo an toàn và hiệu quả cho quá trình chăm sóc da.
                                </p>

                                <p
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        alt="Những lưu ý đặc biệt khi sử dụng mặt nạ."
                                        src="https://ckdvietnam.com/upload/elfinder/Nh%E1%BB%AFng%20l%C6%B0u%20%C3%BD%20%C4%91%E1%BA%B7c%20bi%E1%BB%87t%20khi%20s%E1%BB%AD%20d%E1%BB%A5ng%20m%E1%BA%B7t%20n%E1%BA%A1..jpg"
                                        style={{
                                            width: '828px',
                                        }}
                                    />
                                </p>

                                <h2>
                                    <strong>Típ và chiến lược bảo quản da</strong>
                                </h2>

                                <h3>
                                    <strong>
                                        1. Những chiến lược khác để duy trì làn da khỏe mạnh sau khi sử dụng mặt nạ
                                    </strong>
                                </h3>

                                <p>
                                    Sau khi sử dụng mặt nạ se khít lỗ chân lông, có một số chiến lược hữu ích để duy trì
                                    làn da khỏe mạnh. Đầu tiên, việc duy trì một chế độ chăm sóc da hàng ngày là quan
                                    trọng. Đảm bảo rửa mặt đúng cách vào buổi sáng và tối, sử dụng sữa rửa mặt phù hợp
                                    với loại da của bạn để loại bỏ bụi bẩn, dầu và tạp chất. Đồng thời, sau khi rửa mặt,
                                    sử dụng toner để cân bằng độ pH của da và áp dụng kem dưỡng ẩm để cung cấp độ ẩm và
                                    dưỡng chất cho da.
                                </p>

                                <p>
                                    Thứ hai, hãy bảo vệ da khỏi tác động của tia UV bằng cách sử dụng kem chống nắng
                                    hàng ngày. Tia UV có thể gây tổn thương cho da, làm mất nước và làm yếu cấu trúc da.
                                    Việc sử dụng kem chống nắng có SPF phù hợp không chỉ bảo vệ da khỏi tác động của ánh
                                    nắng mặt trời mà còn ngăn ngừa tình trạng lão hóa da do tác động của tia UV.
                                </p>

                                <p>
                                    Ngoài ra, việc duy trì một chế độ ăn uống lành mạnh, uống đủ nước hàng ngày và giữ
                                    cho cơ thể bạn luôn được nghỉ ngơi đầy đủ cũng ảnh hưởng lớn đến sức khỏe của làn
                                    da. Đồng thời, tránh stress cũng là một yếu tố quan trọng để duy trì làn da khỏe
                                    mạnh. Stress có thể làm tăng tiết cortisol trong cơ thể, gây ra tình trạng mụn và
                                    làm yếu cấu trúc da.
                                </p>

                                <h3>
                                    <strong>
                                        2. Các loại sản phẩm hoặc liệu pháp bổ sung có thể kết hợp để tăng cường hiệu
                                        quả
                                    </strong>
                                </h3>

                                <p>
                                    Để tăng cường hiệu quả của mặt nạ se khít lỗ chân lông, bạn có thể kết hợp với các
                                    sản phẩm hoặc liệu pháp bổ sung khác trong quy trình chăm sóc da hàng ngày. Sản phẩm
                                    bổ sung có thể bao gồm toner làm se khít lỗ chân lông, sữa dưỡng ẩm chứa các thành
                                    phần cần thiết để cung cấp độ ẩm cho da, hoặc serum làm sáng da để giúp làn da trở
                                    nên tươi sáng hơn.
                                </p>

                                <p>
                                    Ngoài ra, việc sử dụng mặt nạ se khít lỗ chân lông trước khi thực hiện liệu pháp hấp
                                    hoặc đắp mặt nạ giấy cũng có thể giúp tăng cường khả năng hấp thụ dưỡng chất từ các
                                    sản phẩm tiếp theo. Việc đắp mặt nạ giấy sau khi đã sử dụng mặt nạ se khít lỗ chân
                                    lông giúp dưỡng chất thẩm thấu sâu hơn vào da, tạo cơ hội tối ưu nhất cho làn da hấp
                                    thụ các dưỡng chất.
                                </p>

                                <p>
                                    Ngoài ra, việc duy trì một chế độ ăn uống lành mạnh và uống đủ nước cũng đóng vai
                                    trò quan trọng trong việc cải thiện sức khỏe của làn da. Đối với các vấn đề về lỗ
                                    chân lông, việc ăn uống giàu vitamin, chất chống oxy hóa, và duy trì mức độ ẩm cần
                                    thiết cho cơ thể cũng góp phần cải thiện tình trạng lỗ chân lông mở rộng và làn da
                                    tổng thể.
                                </p>

                                <p
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        alt="Có nên dùng thêm Collagen chống nếp nhăn"
                                        src="https://ckdvietnam.com/upload/elfinder/C%C3%B3%20n%C3%AAn%20d%C3%B9ng%20th%C3%AAm%20Collagen%20ch%E1%BB%91ng%20n%E1%BA%BFp%20nh%C4%83n.jpg"
                                        style={{
                                            width: '828px',
                                        }}
                                    />
                                </p>

                                <h2>
                                    <strong>Có nên dùng thêm Collagen chống nếp nhăn ?</strong>
                                </h2>

                                <p>
                                    Việc sử dụng <strong>collagen chống nếp nhăn</strong> có thể mang lại một số lợi ích
                                    đáng kể cho làn da. Collagen là một loại protein tự nhiên có trong cơ thể, giúp da
                                    mịn màng, đàn hồi và săn chắc. Tuy nhiên, khi tuổi tác tăng lên, sản xuất collagen
                                    tự nhiên của cơ thể giảm dần, dẫn đến việc xuất hiện nếp nhăn và mất độ đàn hồi của
                                    da.
                                </p>

                                <p>
                                    Việc bổ sung collagen từ bên ngoài thông qua việc sử dụng các sản phẩm chứa collagen
                                    có thể giúp cải thiện độ đàn hồi của da, làm mịn nếp nhăn và làm chậm quá trình lão
                                    hóa da. Có nhiều loại sản phẩm chứa collagen như kem dưỡng da, serum, viên uống hoặc
                                    các loại thực phẩm bổ sung.
                                </p>

                                <p>
                                    Tuy nhiên, hiệu quả của việc sử dụng collagen có thể khác nhau tùy thuộc vào từng
                                    người do mỗi cơ địa da khác nhau. Đối với một số người, việc bổ sung collagen có thể
                                    mang lại kết quả tích cực trong việc cải thiện độ đàn hồi của da, trong khi với
                                    người khác có thể không thấy rõ rệt.
                                </p>

                                <p>
                                    Ngoài việc sử dụng collagen từ bên ngoài, việc duy trì một chế độ ăn uống cân đối,
                                    giàu vitamin C và chất chống oxy hóa cũng đóng vai trò quan trọng trong việc hỗ trợ
                                    sản xuất collagen tự nhiên của cơ thể. Điều này bao gồm việc tiêu thụ các loại thực
                                    phẩm như trái cây, rau cải, thịt gà, cá và các loại hạt.
                                </p>

                                <p>
                                    Trước khi bắt đầu sử dụng bất kỳ sản phẩm bổ sung collagen nào, tốt nhất nên tham
                                    khảo ý kiến của bác sĩ hoặc chuyên gia da liễu để có sự tư vấn chính xác và đảm bảo
                                    an toàn cho da của bạn.
                                </p>

                                <h2>
                                    <strong>Liên hệ mua mặt nạ se khít lỗ chân lông</strong>
                                </h2>

                                <p>
                                    cảm ơn bạn đã đọc bài viết về mặt nạ se khít lỗ chân lông của chúng tôi. Để trải
                                    nghiệm lợi ích của sản phẩm, hãy ghé thăm trang web của chúng tôi tại{' '}
                                    <a href="https://ckdcosvietnam.com/">https://ckdcosvietnam.com/</a> để xem thông tin
                                    chi tiết và đặt mua sản phẩm. Chúng tôi cam kết cung cấp mặt nạ chất lượng cao, đảm
                                    bảo vệ sinh và hiệu quả trong việc se khít lỗ chân lông, giúp da bạn trở nên mềm mại
                                    và tươi trẻ hơn.
                                </p>

                                <p>
                                    Nếu bạn có bất kỳ câu hỏi hoặc cần tư vấn thêm về sản phẩm, đội ngũ hỗ trợ của chúng
                                    tôi luôn sẵn sàng giải đáp. Hãy liên hệ với chúng tôi qua số hotline 19007327 -
                                    Zalo: 0975155503 hoặc gửi email đến bluepink@ckdcosvietnam.com. Chúng tôi rất vui
                                    lòng được hỗ trợ bạn và đảm bảo mang đến trải nghiệm mua sắm tốt nhất. Đừng bỏ lỡ cơ
                                    hội sở hữu một làn da tươi trẻ và sức khỏe hơn cùng sản phẩm chất lượng từ chúng
                                    tôi!
                                </p>

                                <p>
                                    <strong>CTY TNHH BLUEPINK</strong>
                                </p>

                                <p>Địa chỉ: 97/9 Đường Phạm Thái Bường, P. Tân Phong, Quận 7, Thành Phố Hồ Chí Minh</p>

                                <p>Số điện thoại: DĐ: 0975155503 - Hotline: 19007327 - Zalo: 0975155503</p>

                                <p>Email: bluepink@ckdcosvietnam.com</p>

                                <p>
                                    Website:&nbsp;<a href="https://ckdcosvietnam.com/">https://ckdcosvietnam.com/</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Product;
