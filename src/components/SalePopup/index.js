import React, { useState, useEffect } from 'react';

function SalePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('popupShown')) {
            setIsOpen(true);
            localStorage.setItem('popupShown', 'true');
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div style={{
                position: 'relative',
                // width: '80%',
                // height: '80%',
                // backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                overflow: 'hidden',
            }}>
               <img src="//cdn.snapfit.co.kr/stores/ckdcos/event_image/628x800_w13841.jpg" alt="" width="100%"></img>
                {/*  dấu x nằm góc trên bên phải */}
                <button onClick={closePopup} style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    // backgroundColor: 'white',
                    border: '50%',
                    cursor: 'pointer',
                }}>
                    <img src="https://cdn.snapfit.co.kr/image/template/default_close_btn.png" alt="btn-close"
                    width="30px"></img>
                </button>
            </div>
        </div>
    );
}

export default SalePopup;