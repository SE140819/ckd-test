import React, { useEffect, useState } from 'react';
import { Accordion, Card, Pagination, Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import './index.css';

import { title } from '../../data/title';

function Event() {
    const [event, setEvent] = useState([
        {
            id: 1,
            title: 'KHÁM PHÁ LỢI ÍCH TUYỆT VỜI CỦA COLLAGEN HÀN QUỐC CHO SỨC KHỎE VÀ VẺ ĐẸP TỰ NHIÊN',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 2,
            title: 'SERUM COLLAGEN - CHÌA KHÓA LÀN DA KHỎE MẠNH VÀ TRẺ TRUNG',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 3,
            title: 'TÁC DỤNG PHỤ CỦA RETINOL: LỜI KHUYÊN HIỆU QUẢ CHO CHĂM SÓC DA',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 4,
            title: '4',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 5,
            title: '5',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 6,
            title: '6',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 7,
            title: '7',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 8,
            title: '8',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 9,
            title: '9',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 10,
            title: '10',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 9,
            title: 'cuối',
            content:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(10); // Number of events per page

    // Get current events
    const indexOfLastEvent = Math.min(currentPage * eventsPerPage, event.length);
    const indexOfFirstEvent = Math.min(indexOfLastEvent - eventsPerPage, event.length);
    const currentEvents = event.slice(indexOfFirstEvent, indexOfLastEvent);

    // Change page
    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="main_fix pt-5">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/event">
                            <span>Sự kiện</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-4xl font-bold text-center main-color">{title.event}</h1>
                </div>
                <div className="flex flex-row justify-center ">
                    <div className="basis-1/3 pr-5 pt-5  hidden md:block lg:block">
                        <Accordion>
                            <Accordion.Panel>
                                <Accordion.Title>SỰ KIỆN NỔI BẬT</Accordion.Title>
                                <Accordion.Content>
                                    {event.slice(0, 4).map((item, index) => (
                                        <div className="mt-5" key={index}>
                                            <Card className="max-w-sm" imgSrc={item.imgSrc} vertical>
                                                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {item.title}
                                                </h5>
                                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                                    {item.content}
                                                </p>
                                            </Card>
                                        </div>
                                    ))}
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                    <div className="pl-5 pr-5">
                        {currentEvents.map((item, index) => (
                            <div className="mt-5" key={index}>
                                <Card width="full" imgSrc={item.imgSrc} horizontal>
                                    <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.title}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
                                </Card>
                            </div>
                        ))}
                        <div className="flex overflow-x-auto sm:justify-center">
                            <Pagination
                                previousLabel="Trước"
                                nextLabel="Sau"
                                currentPage={currentPage}
                                totalPages={Math.ceil(event.length / eventsPerPage)}
                                onPageChange={onPageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Event;
