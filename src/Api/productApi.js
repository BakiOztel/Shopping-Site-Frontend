import { apiSlice } from "./apiSlice.js";

export const productSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (args) => {
                const { q, star, tag } = args;
                return {
                    url: `/products/search?q=${q ? q : ""}&star=${star ? star : 0}&tag=${tag ? tag : ""}`,
                    method: "GET",
                }
            }
        }),
        getOnePrdocut: builder.query({
            query: (id) => {
                return {
                    url: `/product/${id}`,
                    method: "GET"
                }
            }
        }),
        AddBasker: builder.mutation({
            query: credentials => ({
                url: "/AddBasket",
                method: "POST",
                body: { ...credentials }
            })
        }),
        getBasket: builder.mutation({
            query: credentials => {
                return {
                    url: `/getBasket`,
                    method: "POST",
                    body: { ...credentials }
                }
            }
        }),
        deleteProductBasket: builder.mutation({
            query: credentials => ({
                url: "/deleteProductBasket",
                method: "POST",
                body: { ...credentials }
            })
        })
    })
});

export const { useGetProductsQuery, useGetOnePrdocutQuery, useAddBaskerMutation,
    useGetBasketMutation, useAddAdressMutation, useDeleteProductBasketMutation } = productSlice;