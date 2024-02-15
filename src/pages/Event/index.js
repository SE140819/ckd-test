import React, { useEffect, useState } from 'react';
import { Accordion, Card } from 'flowbite-react';
function Event() {


    const  event = [
        {
            id: 1,
            title: 'Noteworthy technology acquisitions 2021',
            content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        },
        {
            id: 2,
            title: 'Noteworthy technology acquisitions 2021',
            content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        }
        , {
            id: 3,
            title: 'Noteworthy technology acquisitions 2021',
            content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            imgSrc: 'https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp',
        }
    ];

    return (
       <>
  {/*  chia 2 phần bên trái và bên phải  bên trái chiếm 1/3 bên phải chiếm 2/3 */}
  <div className="main_fix pt-5">
  <div className="flex flex-row">
    <div className="basis-1/3 pr-5 pt-5">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>SỰ KIỆN NỔI BẬT</Accordion.Title>
          <Accordion.Content>
            <Card className="max-w-sm" imgSrc="https://ckdvietnam.com/upload/news/anyconvcombanner-web-4369.webp" vertical>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
    <div className="basis-1/5 pl-5">

    </div>
    <div className="basis-1/2 pl-5">
        {event.map((item, index) => (
          <div className="mt-5"
          key={index}>
            <Card 
            width="full"
            imgSrc={item.imgSrc} horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.content}
              </p>
            </Card>
          </div>
        ))}
      
    </div>
  </div>
</div>


       </>
    );
}

export default Event;
