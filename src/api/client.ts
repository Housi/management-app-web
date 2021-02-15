import axios, { AxiosRequestConfig } from 'axios';

export const APIClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// global config because this part won't change
const getRequest: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  method: 'GET',
};

export const fetcher = (url, term) =>
  APIClient({ ...getRequest, url, params: { term } }).then((res) => res.data);

// APIClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log('err');
//     if (error.response?.status === 401)
//       window.location.href = `${process.env.NEXT_PUBLIC_URL}/sign-in`;
//     return Promise.reject(error);
//   }
// );
