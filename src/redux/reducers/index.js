import { combineReducers } from "redux";
import ModalReducer from "redux/reducers/modalReducer";
export default combineReducers({
  UserModal: ModalReducer
});
