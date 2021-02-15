import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const APIClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const callGetAPI = (
  url: string,
  params?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return APIClient({
    url,
    method: "GET",
    ...params
  });
};

export const fetcher = async (
  url: string,
  params?: AxiosRequestConfig
): Promise<any> => {
  try {
    const res = await callGetAPI(url, params);
    return res.data;
  } catch (err) {
    return err;
  }
};
