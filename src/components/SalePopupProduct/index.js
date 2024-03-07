import React, { useState, useEffect } from 'react';

import { Card } from 'flowbite-react';

const reviews = [
    {
        name: 'Lê Thị Hồng Nhung',
        content: 'Sản phẩm rất tốt, tôi rất hài lòng',
        date: '04/12/2023',
        nameProduct: 'Kem Dưỡng Cung Cấp Độ Ẩm Trẻ Hóa Làn Da',
        image: 'https://ckdvietnam.com/assets/images/gifts/sample.webp',
         rating: 5,
    },
    {
        name: 'Lê Hồng Gấm',
        content: 'Sản phẩm hh rất tốt, tôi rất hài lòng',
        date: '04/12/2023',
        nameProduct: 'Dầu Gội Trị Gàu, Ngăn Ngừa Rụng Tóc CKD',
        image: 'https://ckdvietnam.com/upload/product/serum-nang-co-mat-ngan-ngua-lao-hoa-da-ckd-retino-collagen-guasha-tieu-phan-tu-300-2464-3330.webp',
        rating: 5,  
   }
];

function SalePopup() {
    const [isOpen, setIsOpen] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [currentReview, setCurrentReview] = useState(reviews[0]);
    const [productIndex, setProductIndex] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsAnimatingOut(true);
            const timer2 = setTimeout(() => {
                setIsOpen(false);
                setIsAnimatingOut(false);
                const timer3 = setTimeout(() => {
                    setProductIndex((prevIndex) => {
                        const newIndex = prevIndex + 1 === reviews.length ? 0 : prevIndex + 1;
                        setCurrentReview(reviews[newIndex]);
                        setIsOpen(true);
                        setIsAnimating(true);
                        setTimeout(() => setIsAnimating(false), 500); // Animation duration
                        return newIndex;
                    });
                }, 3000);
                return () => clearTimeout(timer3);
            }, 500); // Closing animation duration
            return () => clearTimeout(timer2);
        }, 10000);

        return () => clearTimeout(timer1);
    }, [productIndex]);

    const closePopup = () => {
        setIsAnimatingOut(true);
        setTimeout(() => setIsOpen(false), 500); // Closing animation duration
    }

    if (!isOpen && !isAnimatingOut) {
        return null;
    }
    return (
        
     <div className="fixed bottom-24 flex flex-col items-center sm:z-50 z-0">
            {!isAnimating && 
                <button onClick={closePopup} className="self-end fixed p-2 flex flex-col justify-center items-center z-50">
                    <img src="https://cdn.snapfit.co.kr/image/template/default_close_btn.png" alt="btn-close" className="w-8"/>
                </button>
            }
    <Card className={`w-96 transition-all duration-500 ${isAnimating ? 'transform translate-y-2 opacity-0' : isAnimatingOut ? 'transform translate-y-2 opacity-0' : 'transform translate-y-0 opacity-100'}`}>
    <div className="flex items-center">
        <img src={currentReview.image} alt="product" className="w-16 h-16" />
        <div className="ml-4">
            <h5 className="text-sm sm:text-lg font-bold">{currentReview.nameProduct}</h5>
            <p className="text-xs sm:text-base">{currentReview.name}</p>
        </div>
    </div>
    <p className="text-xs sm:text-base">{currentReview.content}</p>
</Card>
            
        </div>
    );
}

export default SalePopup;