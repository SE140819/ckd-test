import React, {Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {publicRoutes} from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import ScrollOnTop from './layouts/DefaultLayout/ScrollOnTop';
import Media from './layouts/DefaultLayout/Media';
import NotFoundPage from './pages/404';
import { Helmet } from 'react-helmet';

function App() {
    return (
        <Router>
    <Helmet>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="google-site-verification" content=""/>
    <meta name="robots" content="index, follow, noodp, noydir, noarchive, max-image-preview:standard,max-video-preview:-1,max-snippet:-1,notranslate"/>
    <meta name="keywords" content="Chăm sóc da bằng collagen, Serum Collagen, Retinol cho da nhạy cảm"/>
    <meta name="description" content="Chăm sóc da bằng Retinol trị mụn cùng collagen tự nhiên từ Hàn Quốc. Hỗ trợ tái tạo và cung cấp dưỡng chất, giúp da mịn màng, săn chắc, trẻ trung từ bên trong"/>
    <meta name="author" content="CKD VIỆT NAM"/>
    <meta name="copyright" content="CKD VIỆT NAM - [contact@ckdvietnam.com]"/>
    <meta name="abstract" content="CKD VIỆT NAM"/>
    <meta name="revisit-after" content="1 days"/>
    <meta name="resource-type" content="Document"/>
    <meta name="distribution" content="Global"/>
    <meta name="theme-color" content="#ffffff"/>
    <meta name="geo.region" content="VN"/>
    <meta name="geo.placename" content="Hồ Chí Minh"/>
    <meta name="geo.position" content="10.726993;106.707453"/>
    <meta name="ICBM" content="10.726993;106.707453"/>
    <meta name="format-detection" content="telephone=no, email=no, address=no"/>
    <meta name="viewport" content="user-scalable=1, width=device-width, initial-scale=1"/>
    <meta property="og:title" content="Chăm sóc da bằng Retinol và collagen tự nhiên chất lượng cao từ Hàn Quốc - CKD VIETNAM"/>
    <meta property="og:site_name" content="CKD VIỆT NAM"/>
    <meta property="og:url" content="https://ckdvietnam.com/"/>
    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="VN"/>
    <meta property="og:price:amount" content="1000"/>
    <meta property="og:price:currency" content="VND"/>
    <meta property="og:description" content="Chăm sóc da bằng Retinol trị mụn cùng collagen tự nhiên từ Hàn Quốc. Hỗ trợ tái tạo và cung cấp dưỡng chất, giúp da mịn màng, săn chắc, trẻ trung từ bên trong"/>
    <meta property="og:image" content="https://ckdvietnam.com/assets/images/CKD-COS-VIET-NAM.jpg"/>
    <meta property="og:image:alt" content="Chăm sóc da bằng Retinol và collagen tự nhiên chất lượng cao từ Hàn Quốc - CKD VIETNAM"/>
    <meta property="og:image:width" content="1000"/>
    <meta property="og:image:height" content="1000"/>
    <meta property="twitter:title" content="Chăm sóc da bằng Retinol và collagen tự nhiên chất lượng cao từ Hàn Quốc - CKD VIETNAM"/>
    <meta property="twitter:site_name" content="CKD VIỆT NAM"/>
    <meta property="twitter:url" content="https://ckdvietnam.com/"/>
    <meta property="twitter:type" content="website"/>
    <meta property="twitter:locale" content="VN"/>
    <meta property="twitter:price:amount" content="1000"/>
    <meta property="twitter:price:currency" content="VND"/>
    <meta property="twitter:description" content="Chăm sóc da bằng Retinol trị mụn cùng collagen tự nhiên từ Hàn Quốc. Hỗ trợ tái tạo và cung cấp dưỡng chất, giúp da mịn màng, săn chắc, trẻ trung từ bên trong"/>
    <meta property="twitter:image" content="https://ckdvietnam.com/assets/images/CKD-COS-VIET-NAM.jpg"/>
    <meta property="twitter:image:alt" content="Chăm sóc da bằng Retinol và collagen tự nhiên chất lượng cao từ Hàn Quốc - CKD VIETNAM"/>
    <meta property="twitter:image:width" content="1000"/>
    <meta property="twitter:image:height" content="1000"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:creator" content="CKD VIỆT NAM"/>
    <meta name="google-signin-client_id" content="63359959323-88e9odjoprlrqqejsrrt7d4gk13093gr.apps.googleusercontent.com"/>
    <meta name="google-signin-scope" content="profile email"/>
    <meta itemprop="name" content="Chăm sóc da bằng Retinol và collagen tự nhiên chất lượng cao từ Hàn Quốc - CKD VIETNAM"/>
    <meta itemprop="description" content="Chăm sóc da bằng Retinol trị mụn cùng collagen tự nhiên từ Hàn Quốc. Hỗ trợ tái tạo và cung cấp dưỡng chất, giúp da mịn màng, săn chắc, trẻ trung từ bên trong"/>
    <meta itemprop="image" content="https://ckdvietnam.com/assets/images/CKD-COS-VIET-NAM.jpg"/>
    </Helmet>
            
            <title>Psycteam</title>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                <Route path="*" element={<NotFoundPage />} /> {/* Trang 404 */}
            </Routes>
          
            <Media />
        </Router>
    );
}

export default App;