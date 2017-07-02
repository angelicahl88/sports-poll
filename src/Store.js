import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';


function configureStore(initialState) {
   return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, createLogger({
         predicate: (getState, action) => global.__DEV__,
         duration: true,
         diff: true
      }))
   )
};

const store = configureStore({});

export default store;
