import * as User from 'redux/actionsTypes/userActionTypes';

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
