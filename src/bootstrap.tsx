// because of Module Federation an app is operating in omnidirectional mode
// it should be loaded in an async way
// https://webpack.js.org/concepts/module-federation/#troubleshooting

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './common/components/App/App';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
