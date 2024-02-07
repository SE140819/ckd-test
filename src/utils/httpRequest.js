import axios from 'axios';

const httpRequest = axios.create({
    baseURL: "https://admin.ckdvietnam.com/api/",
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
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
