import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  version: '',
};

const apiVersionSlice = createSlice({
  name: 'apiVersion',
  initialState,
  reducers: {
    setVersion(state, action) {
      state.version = action.payload;
    },
  },
});

export const { setVersion } = apiVersionSlice.actions;

export default apiVersionSlice.reducer;

export const fetchVersion = version => async dispatch => {
  dispatch(setVersion(version));
};
