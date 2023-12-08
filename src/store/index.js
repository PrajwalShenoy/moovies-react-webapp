import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../account/user/userReducer";

const store = configureStore({
    reducer: {
        userReducer,
    }
});

export default store;