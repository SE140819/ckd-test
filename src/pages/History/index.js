import React from 'react';
import { useEffect, useState } from 'react';
import './index.css';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Table } from 'flowbite-react';

import { title } from '../../data/title';
import { history } from '../../data/history';


const notfoundTransaction =
    'https://firebasestorage.googleapis.com/v0/b/ckd--project.appspot.com/o/notfound%2FFolder.jpg?alt=media&token=7c113f16-4ba1-4a77-842c-dcd8bb1cc53c';
function History() {
    return (
        <>
            <div className="container mx-auto my-12">
                <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Trang chủ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/history">Lịch sử mua hàng</Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="text-4xl font-bold text-center main-color">{title.history}</h1>
            </div>
            <div className="container mx-auto my-12">
                {history.length === 0 ? (
                    <div className="text-center">
                        <img src={notfoundTransaction} alt="notfound" className="w-1/3 mx-auto" />
                        <h1 className="text-2xl font-bold mt-5">Không có lịch sử mua hàng</h1>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>{title.productname}</Table.HeadCell>
                                <Table.HeadCell>{title.createby}</Table.HeadCell>
                                <Table.HeadCell>{title.quantity}</Table.HeadCell>
                                <Table.HeadCell>{title.price}</Table.HeadCell>
                                <Table.HeadCell>{title.status}</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {history.map((item, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>
                                            {item.productname.length > 20
                                                ? item.productname.substring(0, 20) + '...'
                                                : item.productname}
                                        </Table.Cell>
                                        <Table.Cell>{item.createby}</Table.Cell>
                                        <Table.Cell>{item.quantity}</Table.Cell>
                                        <Table.Cell>
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.price)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span
                                                className={`px-2 py-1 rounded-full ${
                                                    item.status === 'Đang giao'
                                                        ? 'bg-yellow-500 text-white'
                                                        : item.status === 'Hoàn thành'
                                                        ? 'bg-green-500 text-white'
                                                        : item.status === 'Đã hủy'
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-blue-500 text-white'
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                )}
            </div>
        </>
    );
}

export default History;
