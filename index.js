/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import configureStore from './App/redux/store';
import {Provider} from 'react-redux';

const store = configureStore();

const SunoApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => SunoApp);
