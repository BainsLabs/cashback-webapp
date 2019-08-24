/* eslint-disable import/prefer-default-export */
import {
  verifyUsername,
  userRegisterApi,
  userGetEmailApi,
  verifyEmailAPI,
  contactAPI,
} from 'services';
import * as user from '../actionsTypes/signupTypes';

export const checkUsername = params => async (dispatch) => {
  const res = await verifyUsername(params);
  dispatch({
    payload: res.data,
  });
  return res.data;
};

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
export const getUserName = params => async (dispatch) => {
  const res = await userGetEmailApi(params);
  dispatch({
    type: user.GET_USERNAME,
    payload: res.data,
  });
  return res.data;
};

export const verifyEmail = params => async (dispatch) => {
  const res = await verifyEmailAPI(params);
  return res.data;
};
export const ContactAction = params => async (dispatch) => {
  const res = await contactAPI(params);
  dispatch({
    type: user.CONTACT_MAIL,
    payload: res.data,
  });
  return res.data;
};
