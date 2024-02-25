
import React from 'react'
import './index.css';
import { useSelector } from 'react-redux';
const Instagram =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/media%20index%2FICON-01.png?alt=media&token=832cb6fd-d187-416c-a548-830cf53c74c7';
const Zalo =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/media%20index%2FICON-02.png?alt=media&token=5fcd2b64-ceaf-488c-a5bd-598248901d3b';
const Cart =
    'https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/media%20index%2FICON-03.png?alt=media&token=219b07b1-386d-494e-8a06-63b105378239';
    function Media() {
        // 2 cục zalo và instagram
        
        const cart = useSelector((state) => state.cart);
        const totalQuantity = useSelector((state) => state.cart.totalQuantity);
 
        console.log('totalQuantity', totalQuantity);
        // cart getlocalstorage
        // const cart2 = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div className="media">
            <div className="zalo">
                <a href="https://zalo.me/0961248596" target="_blank" rel="noreferrer">
                    <img src={Zalo} alt="zalo" className="pb-[2px]" />
                </a>
            </div>
            <div className="instagram">
                <a href="https://www.instagram.com/ckd_vietnam/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="instagram" className="pb-[2px]" />
                </a>
            </div>
            <div className="instagram">
                {/* vòng tròn màu đỏ cho giỏ hàng */}
                <div className="cart-fixed-circle" style={{ display: totalQuantity> 0 ? 'block' : 'none' }}>
                    {/* chữ nằm giữa */}
                    <div className="cart-fixed-circle__text">
                        {totalQuantity}
                    </div>
                </div>
                <a className="cart-fixed text-decoration-none " href="/shopping" title="Giỏ hàng">
                    <img src={Cart} alt="cart" className="pb-[2px]" />
                </a>
            </div>
        </div>
    );
};

export default Media;