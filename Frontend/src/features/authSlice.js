import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser : null,
    isFetching : false,
    error: false,
    errormsg:""
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers : {
        // loginStart(state) {
        //   //state.isFetching = true;
        // },
        loginSuccess(state, action) {
          state.isFetching = false;
          state.currentUser = action.payload;
          state.error = false;
          state.errormsg = "";
        },
        logoutFailure(state) {
          //state.error = true;
        },
    }
});

export const { loginStart, loginSuccess, logoutFailure} = authSlice.actions;

export default authSlice.reducer;
