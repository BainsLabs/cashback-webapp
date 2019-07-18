import { combineReducers } from 'redux';
import ModalReducer from 'redux/reducers/modalReducer';
import UserReducer from 'redux/reducers/userReducer';
import ContentReducer from 'redux/reducers/contentRedcuers';

export default combineReducers({
  UserModal: ModalReducer,
  User: UserReducer,
  Content: ContentReducer,
});
