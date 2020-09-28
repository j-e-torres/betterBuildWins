import { combineReducers } from '@reduxjs/toolkit';

import championsReducer from './championsSlice';
import itemsReducer from './itemsSlice';
import apiVersionReducer from './apiVersionSlice';

const rootReducer = combineReducers({
  champions: championsReducer,
  items: itemsReducer,
  apiVersion: apiVersionReducer,
});

export default rootReducer;
