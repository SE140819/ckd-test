import { useContext } from 'react';
// import { themeContext } from './Context';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import Intro from '../../components/intro/Intro';

function Introduction() {
    // const theme = useContext(themeContext);

    return (
        <div className="App">
            <div className='container mx-auto'>
            <Breadcrumb aria-label="Breadcrumb"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mt-5">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Trang chủ
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Giới thiệu</Breadcrumb.Item>
    </Breadcrumb>
            <Intro />
            </div>     
        </div>
    );
}

export default Introduction;
