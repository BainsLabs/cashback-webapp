/* eslint-disable import/prefer-default-export */
import * as ModalTypes from 'redux/actionsTypes/modalActionTypes';

export const modalState = name => (dispatch) => {
  dispatch({
    type: ModalTypes.STATE,
    payload: { open: name !== null, name },
  });
};
