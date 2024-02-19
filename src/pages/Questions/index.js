import { Breadcrumb } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';

function Questions() {
    return (
        <>
            <div className="container mx-auto my-12">
                <div className="container mx-auto my-12">
                    <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                        <Breadcrumb.Item href="/" icon={HiHome}>
                            Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/salepolicy">Câu hỏi thường gặp</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-4xl font-bold text-center main-color">COME BACK SOON</h1>
                </div>
            </div>
        </>
    );
}

export default Questions;
