import * as content from 'redux/actionsTypes/contentActionType';

export default (state = { path: '' }, action) => {
  switch (action.type) {
    case content.CONTENT_ADD:
      return {
        content: action.payload,
      };
    case content.CONTENT_LIST:
      return {
        contentList: action.payload,
      };
    default:
      return state;
  }
};
