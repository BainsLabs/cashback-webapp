import * as ModalTypes from 'redux/actionsTypes/modalActionTypes';

export const modalState = name => (dispatch) => {
  dispatch({
    type: ModalTypes.SIGNIN_MODAL,
    payload: { open: true, name },
  });
};

export const SignUpModal = () => (dispatch) => {
  dispatch({
    type: ModalTypes.SIGNIN_MODAL,
    payload: { open: true, name: 'signup' },
  });
};
export const ForgotModal = () => (dispatch) => {
  dispatch({
    type: ModalTypes.FORGOT_MODAL,
    payload: { open: true, name: 'forgot' },
  });
};

export const CloseModal = () => (dispatch) => {
  dispatch({
    type: ModalTypes.CLOSE_MODAL,
    payload: { open: false },
  });
};
