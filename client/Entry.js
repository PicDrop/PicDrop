import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App.js'; 

injectTapEventPlugin();

ReactDOM.render(<Router>{ routes }</Router>,
  document.getElementById('app')
);
