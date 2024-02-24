// trang 404
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NotFoundPage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops, The Page you are looking for can't be found!</h2>
                {/* <form className="notfound-search">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </form> */}
                <a href="/">
                    <span className="arrow"></span>Return To Homepage
                </a>
            </div>
        </div>
    );
    }

export default NotFoundPage;
