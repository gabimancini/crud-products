import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath:"apiProduct",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://fakestoreapi.com/products'
    }),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(num)=>`?limit=${num}`
        })
    })
})
export const {useGetProductsQuery} = apiSlice