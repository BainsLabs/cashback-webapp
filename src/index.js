import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

import * as serviceWorker from './serviceWorker';

import 'static/scss/index.sass';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="...loading" persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
