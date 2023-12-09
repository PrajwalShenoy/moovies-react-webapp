import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userIsSet: false,
    currentUser: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        memberSince: "",
        followers: [],
        following: [],
        watchlist: []
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
                memberSince: "",
                followers: [],
                following: [],
                watchlist: []
            };
        },
        addToWatchList: (state, action) => {
            state.currentUser.watchlist.push(action.payload);
        },
        removeFromWatchList: (state, action) => {
            state.currentUser.watchlist = state.currentUser.watchlist.filter((movie) => movie !== action.payload);
        }
    },

});

export const { setUser, updateUser, clearUser, addToWatchList, removeFromWatchList } = userSlice.actions;
export default userSlice.reducer;