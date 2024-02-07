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
 
