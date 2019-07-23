/* eslint-disable import/prefer-default-export */
import { verifyUsername, userRegisterApi, userGetEmailApi } from 'services';
import * as user from '../actionsTypes/signupTypes';

// export const checkUsername = params => async (dispatch) => {
//   const res = await verifyUsername(params);
//   dispatch({
//     type: content.CONTENT_ADD,
//     payload: res.data,
//   });
//   return res.data;
// };

export const userRegister = params => async (dispatch) => {
  const res = await userRegisterApi(params);
  dispatch({
    type: user.USER_REGISTER,
    payload: res.data,
  });
  return res.data;
};

export const getUserEmail = params => async (dispatch) => {
  const res = await userGetEmailApi(params);
  dispatch({
    type: user.GET_EMAIL,
    payload: res.data,
  });
  return res.data;
};
