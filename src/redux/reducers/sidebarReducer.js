import * as Sidebar from 'redux/actionsTypes/sidebarActionTypes';

export default (state = { open: false }, action) => {
  switch (action.type) {
    case Sidebar.SIDEBAR_STATE:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
