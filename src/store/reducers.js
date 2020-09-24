import { combineReducers } from '@reduxjs/toolkit';

import championsReducer from './championsSlice';
import itemsReducer from './itemsSlice';

const rootReducer = combineReducers({
  champions: championsReducer,
  items: itemsReducer,
});

export default rootReducer;
