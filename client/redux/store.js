import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { championsReducer, itemsReducer, itemsNameReducer } from './reducer';

const reducer = combineReducers({
  champions: championsReducer,
  items: itemsReducer,
  itemNames: itemsNameReducer
});

let middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware);
}

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
