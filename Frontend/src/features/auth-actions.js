import {  loginSuccess,logoutFailure} from '../features/authSlice';

import { loginStart,loginFailure,signupSuccess,signupFailure} from '../features/authErrorSlice';
import { publicRequest } from '../request-method';

import {setToken} from '../features/tokenSlice'




export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await publicRequest.post('/user/login', user);
      dispatch(loginSuccess(response.data.email));
      dispatch(setToken(response.data.token));
    } catch (err) {
      dispatch(loginFailure(err.response.data.error));
    }
  };
};

export const logout = (user) => {
  return async (dispatch) => {
    try{
        dispatch({type : "USER_LOGOUT"})

    }
    catch (err) {
      dispatch(logoutFailure());
    }
  };

};

export const signup = (user) => {
  return async (dispatch) => {
    try {
      const response = await publicRequest.post('/user/signup', user);
      dispatch(signupSuccess(response.data));
    }
    catch (err) {
      dispatch(signupFailure(err.response.data.error));
    }
  };
};
