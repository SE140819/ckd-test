import React, {Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {publicRoutes} from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import ScrollOnTop from './layouts/DefaultLayout/ScrollOnTop';
import Media from './layouts/DefaultLayout/Media';
import NotFoundPage from './pages/404';

function App() {
    return (
        <Router>
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