import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query';

type AxiosBaseQueryArg = {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}

export const axiosBaseQuery = (
    { baseUrl }: { baseUrl: string }
): BaseQueryFn<AxiosBaseQueryArg, unknown, unknown> => async ({ url, method, data, params }) => {
    try {
        const result = await axios({ url: baseUrl + url, method, data, params });
        return { data: result.data };
    } catch (axiosError) {
        let err = axiosError as AxiosError;
        return {
            error: { status: err.response?.status, data: err.response?.data || err.message }
        };
    }
}