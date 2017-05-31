import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Robots from './Robots';
import './index.css';
import 'tachyons';
import { createStore, applyMiddleware } from 'redux';
import { searchReducers } from './reducers';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchReducers, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
