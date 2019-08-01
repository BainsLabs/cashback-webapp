import { contentAddApi, contentGetApi } from 'services';
import * as content from '../actionsTypes/contentActionType';

export const newContent = params => async (dispatch) => {
  const res = await contentAddApi(params);
  dispatch({
    type: content.CONTENT_ADD,
    payload: res.data,
  });
  return res.data;
};

export const getContent = language => async (dispatch) => {
  const res = await contentGetApi(language);
  dispatch({
    type: content.CONTENT_LIST,
    payload: res.data,
  });
  return res.data;
};
