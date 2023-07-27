import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./services/postSliece";


export const store = configureStore({
    reducer:{
        counts : counterSlice,
    }
})