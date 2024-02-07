
import React from 'react'
import './index.css';

function Media() {
    // 2 cục zalo và instagram
    return (
        <div className="media">
            <div className="zalo">
                <a href="https://zalo.me/0961248596" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/zalo.png" alt="zalo" />
                </a>
            </div>
            <div className="instagram">
                <a href="https://www.instagram.com/ckd_vietnam/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram" />
                </a>
            </div>
            <div className="instagram">
                <a className="cart-fixed text-decoration-none " href="/shopping" title="Giỏ hàng">
                    <svg
                        fill="#4fa15d"
                        width="50px"
                        height="50px"
                        viewBox="0 0 19.00 19.00"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cf-icon-svg"
                        stroke="#4fa15d"
                        strokeWidth="0.00019"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#f7f7f7"
                            strokeWidth="0.5700000000000001"
                        >
                            <path d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-3.34-2.323a.63.63 0 0 0-.628-.628H5.892l-.436-1a.384.384 0 0 0-.351-.23H3.68a.384.384 0 1 0 0 .768h1.173l1.785 4.096a.37.37 0 0 0-.087-.01 1.161 1.161 0 1 0 0 2.322h.042a.792.792 0 1 0 .864 0h3.452a.792.792 0 1 0 .864 0h.565a.384.384 0 1 0 0-.767H6.55a.393.393 0 0 1 0-.787.38.38 0 0 0 .098-.013l5.803-.602a.714.714 0 0 0 .625-.694z"></path>
                        </g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-3.34-2.323a.63.63 0 0 0-.628-.628H5.892l-.436-1a.384.384 0 0 0-.351-.23H3.68a.384.384 0 1 0 0 .768h1.173l1.785 4.096a.37.37 0 0 0-.087-.01 1.161 1.161 0 1 0 0 2.322h.042a.792.792 0 1 0 .864 0h3.452a.792.792 0 1 0 .864 0h.565a.384.384 0 1 0 0-.767H6.55a.393.393 0 0 1 0-.787.38.38 0 0 0 .098-.013l5.803-.602a.714.714 0 0 0 .625-.694z"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Media;