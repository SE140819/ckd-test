import React from 'react';
import { useEffect, useState } from 'react';
import './index.css';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Table } from 'flowbite-react';

import { title } from '../../data/title';
import { history } from '../../data/history';
import axios from 'axios';


const notfoundTransaction =
    'https://firebasestorage.googleapis.com/v0/b/ckd--project.appspot.com/o/notfound%2FFolder.jpg?alt=media&token=7c113f16-4ba1-4a77-842c-dcd8bb1cc53c';
    


function History() {
    const [userData, setUserData] = useState(null);

    const nameLocal = localStorage.getItem('user')?localStorage.getItem('user'):"";
    const customname = nameLocal ? nameLocal.slice(1, nameLocal.length - 1) : "";

  useEffect(() => {
    fetch('https://ckd--project-default-rtdb.firebaseio.com/Orders.json')
        .then(response => response.json())  
        .then(data => {
        //   tìm và lọc ra những đơn hàng của gmail đăng nhập hiện tại
            const userDataFiltered = Object.values(data).filter(item => item.user.email === customname);

            setUserData(userDataFiltered);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    console.log('userData', userData);

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
                {userData && userData.length === 0 ? (
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
                                {userData?.map((item, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>
                                            {item.cart.map((item, index) => (
                                                <div key={index}>
                                                    <p className="text-gray-900 dark:text-white">{item.tenvi}</p>
                                                </div>
                                            ))}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {/* 2024-03-03T18:19:59.858Z  to  03/03/2024 */}
                                            {item.created_at.slice(8, 10) +
                                                '/' +
                                                item.created_at.slice(5, 7) +
                                                '/' +
                                                item.created_at.slice(0, 4)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.cart.map((item, index) => (
                                                <div key={index}>
                                                    <p className="text-gray-900 dark:text-white">{item.quantity}</p>
                                                </div>
                                            ))}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.total)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span
                                                className={`px-2 py-1 rounded-full ${
                                                    item.status === 0
                                                        ? 'bg-yellow-500 text-white'
                                                        : item.status === 1
                                                        ? 'bg-green-500 text-white'
                                                        : item.status === 0
                                                }`}
                                            >
                                                {item.status === 0
                                                    ? 'Đang chờ xác nhận'
                                                    : item.status === 1
                                                    ? 'Đã xác nhận'
                                                    : 'Đã hủy'}
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
