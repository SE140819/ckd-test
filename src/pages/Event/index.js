import React, { useEffect, useState } from 'react';
import { Accordion, Card, Pagination, Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import './index.css';

import { title } from '../../data/title';
import { get } from '../../utils/httpRequest';
import { path_upload } from '../../utils/ckdUtils';
function Event() {
    const options = {
        table: 'news',
        select: '*',
        where: 'type="su-kien" AND hienthi > 0',
    };
    const [event, setEvent] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _event = await get('tab', { params: options });
            setEvent(_event || []);
        };

        fetch();
    }, []);

    const option2s = {
        table: 'news',
        select: '*',
        where: 'type="su-kien" AND hienthi > 0  AND noi_bat = 1',
    };
    const [noiBat, setNoibat] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _noibat = await get('tab', { params: option2s });
            setNoibat(_noibat || []);
        };

        fetch();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(10); // Number of events per page

    // Get current events
    const indexOfLastEvent = Math.min(currentPage * eventsPerPage, event.length);
    const indexOfFirstEvent = Math.min(indexOfLastEvent - eventsPerPage, event.length);
    const currentEvents = event.slice(indexOfFirstEvent, indexOfLastEvent);

    // Change page
    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    console.log('event', event);
    const _url = path_upload().review;
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
                                <Accordion.Title className=" font-bold text-xl text-gray-900 dark:text-white ">
                                    Sự kiện nổi bật
                                </Accordion.Title>
                                <Accordion.Content>
                                    {event.slice(0, 4).map((item, index) => (
                                        <div className="mt-5" key={index}>
                                            <a href={`/event/${item.id}`} className="text-black">
                                                <Card className="max-w-sm" imgSrc={_url + item.photo} vertical={true}>
                                                    <h5 className="font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                                        {item.tenvi}
                                                    </h5>
                                                    <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                                                        {item.motavi}
                                                    </p>
                                                </Card>
                                            </a>
                                        </div>
                                    ))}
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                    <div className="basis-3/3 pl-5 pr-5 md:basis-2/3">
                        {currentEvents
                            .sort((a, b) => a.het_han - b.het_han)
                            .map((item, index) => (
                                <div className="mt-5" key={index}>
                                    <a href={`/event/${item.id}`} className="text-black">
                                        <Card width="max-w-lg" imgSrc={_url + item.photo} vertical={true}>
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                {item.tenvi}
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {item.motavi}
                                            </p>
                                            {item.het_han === '1' ? (
                                                <div className="flex justify-end mt-2">
                                                    <p className="text-red-500 font-bold">Sự kiện đã kết thúc</p>
                                                </div>
                                            ) : (
                                                <div className="flex justify-end mt-2">
                                                    <p className="text-green-500 font-bold">Sự kiện đang diễn ra</p>
                                                </div>
                                            )}
                                        </Card>
                                    </a>
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
