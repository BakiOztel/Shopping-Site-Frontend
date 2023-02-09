import { apiSlice } from "./apiSlice.js";

export const paymentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postPayment: builder.mutation({
            query: credentials => ({
                url: "/postPayment",
                method: "POST",
                body: { ...credentials }
            })
        }),
        getOrder: builder.query({
            query: args => ({
                url: "/getOrder",
                method: "GET",
            })
        })
    })
});

export const { usePostPaymentMutation, useGetOrderQuery } = paymentApi;