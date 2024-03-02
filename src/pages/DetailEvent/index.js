import React, { useEffect, useState } from 'react';

import { get } from '../../utils/httpRequest';
import { Accordion, Breadcrumb, Button, Card, Rating } from 'flowbite-react';
import { HiShoppingCart, HiHome } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { path_upload } from '../../utils/ckdUtils';
import DOMPurify from 'dompurify';
function DetailNews() {
    const options = {
        table: 'news',
        select: '*',
        where: 'type="su-kien" AND hienthi > 0',
    };

    const { tenkhongdauvi } = useParams();
    const [event, setEvent] = useState([]);
    const eventId = event.find((item) => item.tenkhongdauvi === tenkhongdauvi);

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
        where: 'type="su-kien" AND hienthi > 0  AND noibat = 1',
    };
    const [noiBat, setNoibat] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const _noibat = await get('tab', { params: option2s });
            setNoibat(_noibat || []);
        };

        fetch();
    }, []);

    const encodedHtmlContent = eventId ? eventId.noidungvi : '';
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(encodedHtmlContent, 'text/html').documentElement.textContent;
    const _url = path_upload().review;
    return (
        <>
            <div className="main_fix pt-5">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            <span className="line-clamp-1">Trang chủ</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/su-kien">
                            <span className="line-clamp-1">Sự kiện</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/">
                            <span className="line-clamp-1">{eventId ? eventId.tenvi : ''}</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="flex flex-row justify-center ">
                    <div className="basis-1/3 pr-5 pt-5  hidden md:block lg:block">
                        <Accordion>
                            <Accordion.Panel>
                                <Accordion.Title className=" font-bold text-xl text-gray-900 dark:text-white ">
                                    Sự kiện nổi bật
                                </Accordion.Title>
                                <Accordion.Content>
                                    {noiBat.map((item, index) => (
                                        <div className="mt-5" key={index}>
                                            <a href={`/su-kien/${item.tenkhongdauvi}`} className="text-black">
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
                        <h1 className="text-4xl font-bold text-center main-color">{eventId ? eventId.tenvi : ''}</h1>
                        <div dangerouslySetInnerHTML={{ __html: decodedString }}></div>
                    </div>
                </div>
            </div>

            {/* <div>{eventId ? eventId.noidungvi : ''}</div> */}
        </>
    );
}

export default DetailNews;
