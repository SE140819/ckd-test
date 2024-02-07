import React, { useEffect, useState } from 'react';

import './index.css';
function Introduct() {
    return (
        <>
            <section className="section">
                <div className="section__container">
                    <div className="content">
                        <p className="subtitle">HELLO</p>
                        <h1 className="title">
                            I'm{' '}
                            <span>
                                Mitchell
                                <br />a
                            </span>{' '}
                            Web Developer
                        </h1>
                        <p className="description">
                            Welcome to my web developer portfolio! I'm Mitchell, a skilled and creative web developer
                            with a passion for creating beautiful, responsive, and user-friendly websites. I've worked
                            on a variety of web projects, ranging from personal blogs to e-commerce platforms.
                        </p>
                        <div className="action__btns">
                            <button className="hire__me">Hire Me</button>
                            <button className="portfolio">Portfolio</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src="assets/profile.jpg" alt="profile" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Introduct;
