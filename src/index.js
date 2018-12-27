import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import solarStore from './store/solarStore';
import weatherStore from './store/weatherStore';
import App from './App/App';

const stores = {
  solarStore,
  weatherStore,
};

// debug
window._____APP_STATE_____ = stores;

ReactDOM.render((
  <Provider {...stores}>
    <App/>
  </Provider>
  ), document.getElementById('app')
);

module.hot.accept();
