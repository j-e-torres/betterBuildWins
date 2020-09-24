import { createSlice } from '@reduxjs/toolkit';

import { getItems } from '../api/ddragonAPI';

export const initialState = {
  items: {},
  loading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItemsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getItemsSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    getItemsFail(state, action) {
      state.loading = false;
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

export const fetchItems = async dispatch => {
  try {
    dispatch(getItemsStart());

    const items = await getItems();

    dispatch(getItemsSuccess(items));
  } catch (err) {
    dispatch(getItemsFail(err));
  }
};
