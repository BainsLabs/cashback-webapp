import * as User from 'redux/actionsTypes/userActionTypes';
import { userRegisterApi } from 'services';

export const isAuthenticated = user => (dispatch) => {
  return dispatch({
    type: User.AUTHENTICATED_USER,
    payload: { authenticated: true, user },
  });
};

export const isLogout = user => (dispatch) => {
  return dispatch({
    type: User.LOGOUT_USER,
    payload: { authenticated: false },
  });
};

export const UserSignUp = params => async (dispatch) => {
  const res = await userRegisterApi(params);
  dispatch({
    type: User.SIGNUP_USER,
    payload: res.data,
  });
  return res.data;
};
