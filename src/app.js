import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import solarStore from './store/solarStore';
import visualStore from './store/visualStore';
import weatherStore from './store/weatherStore';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from "react-router-dom";
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import App from './App/App';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  solarStore,
  visualStore,
  weatherStore,
  routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

// debug
window._____APP_STATE_____ = stores;

ReactDOM.render((
  <Provider {...stores}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
  ), document.getElementById('app')
);

module.hot.accept();
