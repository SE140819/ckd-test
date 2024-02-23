// trang 404
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="text-center">
                <h1 className="display-1">404</h1>
                <p className="h1">Page not found.</p>
                <p className="h2 font-weight-normal mt-3 mb-4">The page you are looking for might have been removed.</p>
                <Link to="/" className="btn btn-primary">Go to Home</Link>
            </div>
        </div>
    );
    }

export default NotFoundPage;
