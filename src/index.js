import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureAppStore from './store/configureStore';
import './base.scss';

import * as serviceWorker from './serviceWorker';

const store = configureAppStore();

const render = () => {
  const App = require('./app').default;

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
