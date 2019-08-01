import * as ModalTypes from 'redux/actionsTypes/modalActionTypes';

export default (state = { path: '' }, action) => {
  switch (action.type) {
    case ModalTypes.STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
