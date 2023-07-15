import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    error: null,
    isLoading: false,

}

const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        extraReducers: (builder)=>{}
    }
)
export default authSlice.reducer;