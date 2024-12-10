// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi', // The key for this API in the Redux store
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.example.com', // Replace with your API's base URL
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token") // Assuming token is stored in the auth slice
            if (token) {
                headers.set('Authorization', `${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes : ["approveEvent", "allEvents"]
});

// Export hooks for usage in functional components
export default baseApi;
