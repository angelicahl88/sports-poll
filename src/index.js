import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './Store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

import { fetchData } from './actions/index';



store.dispatch(fetchData());


ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'));

registerServiceWorker();
