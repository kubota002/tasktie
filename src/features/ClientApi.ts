import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery'; 

interface ClientAddRequest {
    clientName: string;
    reading: string;
    phone: number;
    email: string;
    address: string;
    memo: string;
}

interface ClientAddResponse {
    result: number;
    message: string;
}

export const clientApi = createApi({
    reducerPath: "clientApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "http://localhost:8080/api",
    }),
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        addClient: builder.mutation<ClientAddResponse, ClientAddRequest>({
            query: (clientDetails) => ({
                url: "/client/add",
                method: "POST",
                data: clientDetails
            }),
        })
    })
})