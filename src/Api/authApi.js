import { apiSlice } from "./apiSlice.js";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/userLogin",
                method: "POST",
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: credentials => ({
                url: "/userRegister",
                method: "POST",
                body: { ...credentials }
            })
        }),
        isLogin: builder.mutation({
            query: credentials => ({
                url: "/refresh",
                method: "POST",
                body: { ...credentials }
            })
        }),
        logOut: builder.mutation({
            query: credentials => ({
                url: "/logOut",
                method: "POST",
                body: { ...credentials }
            })
        })
    })
});

export const { useLoginMutation, useRegisterMutation, useIsLoginMutation, useLogOutMutation } = authApiSlice;