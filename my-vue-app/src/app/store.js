import { configureStore } from "@reduxjs/toolkit";
import counsterReducer from "../features/counters/counsterslice";
const store = configureStore({
    reducer: {
        counters: counsterReducer
    }
})

export default store;