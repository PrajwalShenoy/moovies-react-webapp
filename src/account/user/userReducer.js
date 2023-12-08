import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userIsSet: false,
    currentUser: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        memberSince: ""
    }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userIsSet = true;
            state.currentUser = action.payload;
        },
        updateUser: (state, action) => {
            state.currentUser = action.payload;
        },
        clearUser: (state) => {
            state.userIsSet = false;
            state.currentUser = {
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                memberSince: ""
            };
        }
    },

});

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;