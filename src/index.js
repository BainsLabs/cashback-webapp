/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'App';
import config from 'config';
import Amplify from 'aws-amplify';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import Messages from 'constants/language';
import locale_zh from 'react-intl/locale-data/zh';
import { flattenMessages } from 'utils/flattenMessages';
import * as serviceWorker from './serviceWorker';
import 'static/scss/index.sass';

const language = localStorage.getItem('country') === null ? 'en-US' : localStorage.getItem('country'); // language without region co
console.log(language, 'languageeeesss');
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

addLocaleData([...locale_en, ...locale_zh]);

ReactDOM.render(
  <IntlProvider locale={language} messages={flattenMessages(Messages[language])}>
    <Provider store={store}>
      <PersistGate loading="...loading" persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </IntlProvider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
