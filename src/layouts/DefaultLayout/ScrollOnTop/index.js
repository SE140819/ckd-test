
import React from 'react'
import './index.css';

function ScrollOnTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <button className="scroll-to-top" onClick={scrollToTop}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    fill: '#fa6881',
                }}
                viewBox="0 -960 960 960"           
            >
                <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
            </svg>
        </button>
    );
}

export default ScrollOnTop;