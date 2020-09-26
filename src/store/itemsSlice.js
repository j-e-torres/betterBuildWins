import { createSlice } from '@reduxjs/toolkit';

import { getItems } from '../api/ddragonAPI';

export const initialState = {
  items: {},
  error: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItemsSuccess(state, action) {
      state.items = action.payload;
      state.error = null;
    },
    getItemsFail(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  getItemsStart,
  getItemsFail,
  getItemsSuccess,
} = itemsSlice.actions;

export default itemsSlice.reducer;

export const fetchItems = version => async dispatch => {
  try {
    const items = await getItems(version);

    dispatch(getItemsSuccess(items));
  } catch (err) {
    dispatch(getItemsFail(err));
  }
};
