import { combineReducers } from 'redux';
import ModalReducer from 'redux/reducers/modalReducer';
import UserReducer from 'redux/reducers/userReducer';
import ContentReducer from 'redux/reducers/contentRedcuers';
import SidebarReducer from 'redux/reducers/sidebarReducer';
import GeoReducer from 'redux/reducers/geoReducer';

export default combineReducers({
  UserModal: ModalReducer,
  User: UserReducer,
  Content: ContentReducer,
  Sidebar: SidebarReducer,
  GeoReducer,
});
