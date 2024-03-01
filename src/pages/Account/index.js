import { Breadcrumb, Button, Checkbox, Label, Radio, TextInput, Datepicker } from 'flowbite-react';
import { HiMail, HiHome } from 'react-icons/hi';
import { title } from '../../data/title';

import React, { useEffect, useState } from 'react';
import { auth, provider } from '../../config';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
function Account() {
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem('email', data.user.email);
        });
    };

    const nameGG = localStorage.getItem('email');
    const nameFB = localStorage.getItem('facebook');
    const nameLocal = localStorage.getItem('user');

    const [address, setAddress] = useState({ province: '', district: '', ward: '' });


    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');

    useEffect(() => {
        const fetchProvinces = async () => {
            const response = await axios.get('https://vapi.vnappmob.com/api/province');
            setProvinces(response.data.results); // adjust this line based on the API response structure
        };

        fetchProvinces();
    }, []);

    useEffect(() => {
        const fetchDistricts = async () => {
            const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${selectedProvince}`);
            setDistricts(response.data.results); // adjust this line based on the API response structure
        };

        if (selectedProvince) {
            fetchDistricts();
        }
    }, [selectedProvince]);

    useEffect(() => {
        const fetchWards = async () => {
            const response = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`);
            setWards(response.data.results); // adjust this line based on the API response structure
        };

        if (selectedDistrict) {
            fetchWards();
        }
    }, [selectedDistrict]);


    const handleAddressChange = (type, value) => {
        let newAddress = { ...address };

        if (type === 'province') {
            setSelectedProvince(value);
            newAddress.province = provinces.find((province) => province.province_id === value).province_name;
        } else if (type === 'district') {
            setSelectedDistrict(value);
            newAddress.district = districts.find((district) => district.district_id === value).district_name;
        } else if (type === 'ward') {
            setSelectedWard(value);
            newAddress.ward = wards.find((ward) => ward.ward_id === value).ward_name;
        }

        setAddress(newAddress);
    };
    return (
        <div className="main_fix pt-5">
            <div className="container mx-auto my-12">
                <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Trang chủ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/account">
                        <span>Thông tin tài khoản</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="text-4xl font-bold text-center main-color">
                    <span>{title.account}</span>
                </h1>
            </div>
            <form className="flex flex-col gap-4 shadow-lg p-8 bg-white dark:bg-gray-800 rounded-lg">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Họ tên" />
                    </div>
                    <TextInput id="name" placeholder="Nhập họ tên" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="account" value="Tài khoản" />
                    </div>
                    <TextInput
                        id="account"
                        placeholder="Nhập tài khoản"
                        disabled
                        required
                        shadow
                        value={nameGG || nameFB || nameLocal?.slice(1,nameLocal.length-1)}
                    />
                </div>
                {/* <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Mật khẩu cũ" />
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div> */}
                {/* <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Mật khẩu mới" />
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div> */}

                {/* <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Nhập lại mật khẩu mới" />
                    </div>
                    <TextInput id="repeat-password" type="password" required shadow />
                </div> */}
                {/* Giới tính radio */}
                <div className="mb-2 block">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Giới tính" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="nam" name="gender" value={1} />
                            <Label htmlFor="nam">Nam</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="nu" name="gender" value={0} />
                            <Label htmlFor="nu">Nữ</Label>
                        </div>
                    </div>
                </div>
                {/* Ngày sinh */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="date" value="Ngày sinh" />
                    </div>
                    <Datepicker id="date" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="phone" value="Số điện thoại" />
                    </div>
                    <TextInput id="phone" type="phone" placeholder="" required />
                </div>
                <div>
                <div className="mb-6">
                                                        <label
                                                            htmlFor="email"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="nguyenvana@gmail.com"
                                                            // onChange={(e) =>
                                                            //     setUser({ ...user, email: e.target.value })
                                                            // }
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-6">
                                                        <label
                                                            htmlFor="address"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Địa chỉ:
                                                        </label>
                                                        <select
                                                            id="address"
                                                            defaultValue="Chọn tỉnh/thành phố"
                                                            onChange={(e) =>
                                                                handleAddressChange('province', e.target.value)
                                                            }
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                            <option disabled>Chọn tỉnh/thành phố</option>
                                                            {provinces.map((province) => (
                                                                <option
                                                                    key={province.province_id}
                                                                    value={province.province_id}
                                                                >
                                                                    {province.province_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <label
                                                            htmlFor="district"
                                                            className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Quận/Huyện:
                                                        </label>
                                                        <select
                                                            id="district"
                                                            defaultValue="Chọn quận/huyện"
                                                            disabled={!selectedProvince}
                                                            
                                                            onChange={(e) =>
                                                                handleAddressChange('district', e.target.value)
                                                            }
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                             <option disabled>Chọn quận/huyện</option>
                                                            {districts.map((district) => (
                                                                <option
                                                                    key={district.district_id}
                                                                    value={district.district_id}
                                                                >
                                                                    {district.district_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <label
                                                            htmlFor="ward"
                                                            className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Xã/Phường:
                                                        </label>
                                                        <select
                                                            id="ward"
                                                            defaultValue="Chọn xã/phường"
                                                            disabled={!selectedDistrict}
                                                            
                                                            onChange={(e) =>
                                                                handleAddressChange('ward', e.target.value)
                                                            }
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                            <option disabled>Chọn xã/phường</option>
                                                            {wards.map((ward) => (
                                                                <option key={ward.ward_id} value={ward.ward_id}>
                                                                    {ward.ward_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                                
                    <div className="mb-2 block">
                        <Label htmlFor="Address" value="Địa chỉ" />
                    </div>
                    <TextInput id="Address" type="" placeholder="" value={address.province + ', ' + address.district + ', ' + address.ward} disabled required />
                </div>
                {/* nút cập nhật */}
                <div className="flex items-center justify-center">
                    <Button type="submit" className="hover:bg-blue-600 bg-blue-500" shadow>
                        <span
                            className="flex items-center justify-center gap-2"
                            style={{ color: 'white', fontWeight: 'bold' }}
                        >
                            Cập nhật
                        </span>
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Account;
