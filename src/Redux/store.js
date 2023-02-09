import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Api/apiSlice.js";
import AuthSlice from "./authSlice.js";

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: AuthSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});