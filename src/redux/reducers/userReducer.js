import * as User from 'redux/actionsTypes/userActionTypes';

export default (state = { authenticated: false }, action) => {
  switch (action.type) {
    case User.AUTHENTICATED_USER:
      return {
        authenticated: action.payload.authenticated,
        user: action.payload.user,
      };
    case User.LOGOUT_USER:
      return {
        authenticated: action.payload.authenticated,
      };
    default:
      return state;
  }
};
