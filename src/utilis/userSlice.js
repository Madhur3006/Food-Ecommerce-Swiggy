import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        userName: ''
    },
    reducer: {
        login: (state, action) => {
            state.isLoggedIn = true
            state.userName = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.userName = ''
        }
    }
})

export default userSlice.reducer
export const {login, logout}  = userSlice.actions;