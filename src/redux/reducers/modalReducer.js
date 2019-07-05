import * as ModalTypes from "redux/actionsTypes/modalActionTypes";

export default (state = { path: "" }, action) => {
  switch (action.type) {
    case ModalTypes.SIGNIN_MODAL:
    case ModalTypes.SIGNUP_MODAL:
      return {
        ...state,
        path: action.payload
      };
    case ModalTypes.CLOSE_MODAL:
      return {
        ...state,
        path: action.payload
      };
    default:
      return state;
  }
};
