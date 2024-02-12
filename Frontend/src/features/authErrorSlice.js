import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isFetching : false,
    error: false,
    errormsg:"",
    register:false
};


const authErrorSlice = createSlice({
    name:'autherror',
    initialState,
    reducers : {
        loginStart(state) {
            state.isFetching = true;
          },
        loginFailure(state,action) {
          state.error = true;
          state.errormsg =action.payload;
        },
        signupFailure(state,action) {
          state.error = true;
          state.errormsg = action.payload;
        },
        signupSuccess(state) {
          state.register = true;
        }
    }
});


export const {loginStart,loginFailure,signupSuccess,signupFailure} = authErrorSlice.actions;

export default authErrorSlice.reducer;
