import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'User',
  storage,
  whitelist: ['User'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = { authenticated: false };

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export default store;

export { persistor };
