import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Products {
    id: number 
  }
  type PostsResponse = Products[]
export const apiSlice = createApi({
    reducerPath:"apiProduct",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8000'
    }),
    tagTypes: ['Products'],

    endpoints:(builder)=>({
        getProducts:builder.query<PostsResponse, void>({
            query:()=>`/data`,
            providesTags:["Products"],
            transformResponse: (response:Products[]) => response.sort((a,b)=>{
                return b.id - a.id;
            })
         }),
        addProduct:builder.mutation({
            query:(newProduct)=>({
                url:'/data',
                method: "POST",
                body: newProduct  
            }),
            invalidatesTags:["Products"]
        })
    })
})
export const {useGetProductsQuery, useAddProductMutation} = apiSlice