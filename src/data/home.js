
export const product_list = [
    {
        id: 1,
        name: 'Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất',
        brand: 'CKD',
        category: '1',
        type: '1',
        price: 1029000,
        voucher: 50,
        image: 'https://ckdvietnam.com/upload/product/combo-tet-ckd-2-4794.webp',
        sold: 50,
        date: '2021-10-10',
    },
    {
        id: 2,
        name: 'Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất',
        brand: 'CKD',
        category: '2',
        type: '1',
        price: 329000,
        voucher: 10,
        image: 'https://ckdvietnam.com/upload/product/combo-tet-ckd-2-4794.webp',
        sold: 50,
        date: '2023-10-10',
    },
    {
        id: 3,
        name: 'Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất',
        price: 329000,
        brand: 'CKD',
        category: '3',
        type: '1',
        voucher: 10,
        image: 'https://ckdvietnam.com/upload/product/combo-tet-ckd-2-4794.webp',
        sold: 50,
        date: '2024-10-10',
    },

    {
        id: 4,
        name: 'Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất',
        price: 329000,
        brand: 'CKD',
        category: '4',
        type: '1',
        voucher: 10,
        image: 'https://ckdvietnam.com/upload/product/combo-tet-ckd-2-4794.webp',
        sold: 50,
        date: '2025-10-10',
    },
    {
        id: 5,
        name: 'Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất',
        price: 329000,
        brand: 'Lactto',
        category: '5',
        type: '2',
        image: 'https://ckdvietnam.com/upload/product/combo-tet-ckd-2-4794.webp',
        sold: 100,
        date: '2026-10-10',
    },
];

export const categorty = [
    {
        id: 1,
        name: 'Làm sạch',
        blocks: [
            {
                id: 'sheNwCUP5A',
                type: 'header',
                data: {
                    text: 'Editor.js',
                    level: 2,
                },
            },
            {
                id: '12iM3lqzcm',
                type: 'paragraph',
                data: {
                    text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
                },
            },
            {
                id: 'fvZGuFXHmK',
                type: 'image',
                data: {
                    file: {
                        url: 'https://ckdvietnam.com/upload/elfinder/N%C6%B0%E1%BB%9Bc%20Hoa%20H%E1%BB%93ng%20ckd/AnyConv.com__FIX%20CKD%20Retino%20Nuoc%20Hoa%20Hong%20Ket%20Cau%20Collagen%20Tieu%20Phan%20Tu%20300%20.webp',
                    },
                    style: {
                        textAlign: 'center',
                    },
                },
            },

            // căn giữa ảnh
            {
                id: 'xnPuiC9Z8M',
                type: 'list',
                data: {
                    style: 'unordered',
                    items: [
                        'It is a block-styled editor',
                        'It returns clean data output in JSON',
                        'Designed to be extendable and pluggable with a simple API',
                    ],
                },
            },
            {
                id: '-MhwnSs3Dw',
                type: 'header',
                data: {
                    text: 'What does it mean «block-styled editor»',
                    level: 3,
                },
            },
            {
                id: 'Ptb9oEioJn',
                type: 'paragraph',
                data: {
                    text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
                },
            },
            {
                id: '-J7nt-Ksnw',
                type: 'paragraph',
                data: {
                    text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
                },
            },
            {
                id: 'SzwhuyoFq6',
                type: 'header',
                data: {
                    text: 'What does it mean clean data output',
                    level: 3,
                },
            },
            {
                id: 'x_p-xddPzV',
                type: 'paragraph',
                data: {
                    text: 'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below',
                },
            },
            {
                id: '6W5e6lkub-',
                type: 'paragraph',
                data: {
                    text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
                },
            },
            {
                id: 'eD2kuEfvgm',
                type: 'paragraph',
                data: {
                    text: 'Clean data is useful to sanitize, validate and process on the backend.',
                },
            },
            {
                id: 'N8bOHTfUCN',
                type: 'delimiter',
                data: {},
            },
            {
                id: 'IpKh1dMyC6',
                type: 'paragraph',
                data: {
                    text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
                },
            },
        ],
    },
    {
        id: 2,
        name: 'Chăm sóc da',
    },
    {
        id: 3,
        name: 'Mặt nạ',
    },
    {
        id: 4,
        name: 'Chống nắng',
    },
    {
        id: 5,
        name: 'Cơ thể/tóc',
    },
];

export const type = [
    {
        id: 1,
        name: 'Retino',
    },
    {
        id: 2,
        name: 'Lactto',
    },
    {
        id: 3,
        name: 'Collagen',
    },
    {
        id: 4,
        name: 'Tinh chất',
    },
    {
        id: 5,
        name: 'Toner',
    },
];
    

export const review = [
    {
        id: 1,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz50235689895375d9b2cab8cfcb2f95d42404b3af92819-6977.webp',
        customer: 'Kim Ngân',
        rating: 1.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 2,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Ngưu',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 3,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz50234679626169c45d8aa93e718c970538e3e4a8aef9d-2969.webp',
        customer: 'Kim Bạc',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 4,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Y',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 5,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Y',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },

    {
        id: 7,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Y',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 8,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Y',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 9,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Y',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 10,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Y',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
    {
        id: 11,
        img: 'https://ckdvietnam.com/upload/news/anyconvcomz5023568994442bf949dc10a3105bdb0e856692d67f328-6618.webp',
        customer: 'Kim Y',
        rating: 4.5,
        date: '2021-10-10',
        feedback:
            'em toner này giúp thu nhỏ lỗ chân lông của tui hẳn ra luôn á, da cũng sáng và mịn hơn sau mỗi lần sử dụng luôn, rất hài lòng, lần sau sẽ ủng hộ tiếp.',
    },
];

export const title = {
    sanphamkhuyenmai: 'Sản phẩm khuyến mãi',
    danhgia: 'Đánh giá',
    video: 'Video',
    Tab1: 'TỐT NHẤT',
    Tab2: 'MỚI NHẤT',
    daban: 'Đã bán:',
    xemthem: 'Xem thêm',
    reviewkhachhang: ' CÁC ĐÁNH GIÁ KHÁC VỀ SẢN PHẨM NÀY',
    ngaydanhgia: 'Ngày đánh giá: ',
    brand: 'THƯƠNG HIỆU GIA ĐÌNH CKD',
};