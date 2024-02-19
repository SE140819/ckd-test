import { Breadcrumb, Button, Checkbox, Label, Radio, TextInput, Datepicker } from 'flowbite-react';
import { HiMail, HiHome } from 'react-icons/hi';
import { title } from '../../data/title';
function Account() {
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
                    <TextInput id="account" placeholder="Nhập tài khoản" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Mật khẩu cũ" />
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Mật khẩu mới" />
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Nhập lại mật khẩu mới" />
                    </div>
                    <TextInput id="repeat-password" type="password" required shadow />
                </div>
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
                        <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput id="email" type="email" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="phone" value="Phone" />
                    </div>
                    <TextInput id="phone" type="phone" placeholder="" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Address" value="Address" />
                    </div>
                    <TextInput id="Address" type="" placeholder="" required />
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