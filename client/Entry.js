import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import store from './store';
// import initialState from './defaultState';
import DevTools from './devTools/devTools';

injectTapEventPlugin();
// const store = configStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router >{ routes }</Router>
  </Provider>,
  document.getElementById('app')
);
