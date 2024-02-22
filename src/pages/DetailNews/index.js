import React, { useEffect, useState } from 'react';

import { get } from '../../utils/httpRequest';
import { Breadcrumb, Button, Rating } from 'flowbite-react';
import { HiShoppingCart, HiHome } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
function DetailNews() {
    const options = {
        table: 'news',
        select: '*',
        where: 'type="tin-tuc" AND hienthi > 0',
    };

    const { id } = useParams();
    const [event, setEvent] = useState([]);
    const eventId = event.find((item) => item.id === id);

    useEffect(() => {
        const fetch = async () => {
            const _event = await get('tab', { params: options });
            setEvent(_event || []);
        };

        fetch();
    }, []);
    console.log('event', event);
    return (
        <>
            <div className="container mx-auto my-12">
                <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        <span className="line-clamp-1">Trang chủ</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/news">
                        <span className="line-clamp-1">News</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/">
                        <span className="line-clamp-1">{eventId ? eventId.tenvi : ''}</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div dangerouslySetInnerHTML={{ __html: eventId ? eventId.noidungvi : '' }}></div>
        </>
    );
}

export default DetailNews;
