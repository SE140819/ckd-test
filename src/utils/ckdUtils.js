import {isMobile} from 'react-device-detect';


export const checkIsMobile = () => {
    let tag_mb = '';
    if (isMobile) {
      tag_mb = 'm';
    }

    return tag_mb;
};

export const path_upload = ()=>{
    const _url = 'https://ckdvietnam.com/'
          
    return {
        photo: _url + 'upload/photo/',
        product: _url + 'upload/product/',
    }
}

 export const formatNumber = (value) => {
     // Chia mỗi 3 chữ số bằng dấu phẩy
     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 };

 //  phần trăm khuyến mãi được tính theo công thức: (giá gốc - giá khuyến mãi) / giá gốc * 100
 export const getDiscount = (price, sale) => {
     return Math.round(((price - sale) / price) * 100);
 };
