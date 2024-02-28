// trang 404
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const NOTF =
    'https://firebasestorage.googleapis.com/v0/b/ckd--project.appspot.com/o/404.jpg?alt=media&token=edeb8fb3-7c95-425f-a702-c9e2015bf525';
const NotFoundPage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <img src={NOTF} alt="404" />
                <Link to="/">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
