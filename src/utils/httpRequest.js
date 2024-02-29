import axios from 'axios';
import React, { useState, useEffect } from 'react';

const httpRequest = axios.create({
    baseURL: 'https://ckdvietnam.com/erp/api/',
});

export const get = async (path, options = {}) => {
    try {
        const response = await httpRequest.get(path, options);
        return response.data;
    } catch (error) {
        // //  nếu lỗi 500 thì chuyển hướng về trang lỗi 500 render 1 lần duy nhất
        // if (error.response.status === 500) {
        //     window.location.href = '/500';
        //     // dừng hàm và trả về lỗi
        //     return error;
        // } else {
        //     window.location.href = '/500';
        //     return error;
        // }
        // return error;
    }
};

export default httpRequest;


/*


import axios from 'axios';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

const httpRequest = axios.create({
    baseURL: "https://admin.ckdvietnam.com/api/",
});

export const get = (path, options = {}) => {


    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          axios
            .get(path, options)
            .then((res) => res.data),
      })

      if (isFetching) return 'Fetching...'
      if (isLoading) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message

      return data;

    //const response = await httpRequest.get(path, options);
    //return response.data;
};

export default httpRequest;

*/
