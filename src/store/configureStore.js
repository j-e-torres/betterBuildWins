import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

if (module.hot) {
  module.hot.accept('./reducers', () => {
    forceReducerReload(store);
  });
}

export default store;
