import * as ModalTypes from "redux/actionsTypes/modalActionTypes";

export const SignInModal = () => dispatch => {
  return dispatch({
    type: ModalTypes.SIGNIN_MODAL,
    payload: { open: true, name: "signin" }
  });
};

export const SignUpModal = () => dispatch => {
  return dispatch({
    type: ModalTypes.SIGNIN_MODAL,
    payload: { open: true, name: "signup" }
  });
};

export const CloseModal = () => dispatch => {
  return dispatch({
    type: ModalTypes.CLOSE_MODAL,
    payload: null
  });
};
