import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentToken : null,
};

const tokenSlice = createSlice({
    name:'authtoken',
    initialState,
    reducers : {
        setToken(state, action) {
          state.currentToken = action.payload;
        },
    }
});

export const { setToken} = tokenSlice.actions;

export default tokenSlice.reducer;
