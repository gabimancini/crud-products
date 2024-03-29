import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath:"apiProduct",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://fakestoreapi.com'
    }),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(num)=>`/products?limit=${num}`
        }),
        addProduct:builder.mutation({
            query:(newProduct)=>({
                url:'/products',
                method: "POST",
                body: newProduct
            })
        })
    })
})
export const {useGetProductsQuery, useAddProductMutation} = apiSlice