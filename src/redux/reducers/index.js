import { combineReducers } from 'redux';
import ModalReducer from 'redux/reducers/modalReducer';
import UserReducer from 'redux/reducers/userReducer';

export default combineReducers({
  UserModal: ModalReducer,
  User: UserReducer,
});
