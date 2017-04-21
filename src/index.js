import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

import store from './store/createStore';

import App from './components/App';
import './styles/index.css';

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
