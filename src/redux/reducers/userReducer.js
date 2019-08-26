import * as User from 'redux/actionsTypes/userActionTypes';
import * as SignUp from 'redux/actionsTypes/signupTypes';

export default (state = { authenticated: false }, action) => {
  switch (action.type) {
    case User.AUTHENTICATED_USER:
      return {
        authenticated: action.payload.authenticated,
        user: action.payload.user,
      };
    case SignUp.GET_EMAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
    case SignUp.GET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SignUp.CONTACT_MAIL:
      return {
        ...state,
        contact: action.payload,
      };
    case User.LOGOUT_USER:
      return {
        authenticated: action.payload.authenticated,
      };
    case User.SIGNUP_USER:
      return {
        registerUser: action.payload,
      };
    case User.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
