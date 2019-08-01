/* eslint-disable import/prefer-default-export */
import { SIDEBAR_STATE } from 'redux/actionsTypes/sidebarActionTypes';

export const sidebarState = () => async (dispatch) => {
  dispatch({
    type: SIDEBAR_STATE,
  });
};
