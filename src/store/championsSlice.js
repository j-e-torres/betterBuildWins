import { createSlice } from '@reduxjs/toolkit';

import { getChampions } from '../api/ddragonAPI';

export const initialState = {
  champions: {},
  loading: false,
  error: null,
};

const championsSlice = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    getChampionsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getChampionsSuccess(state, action) {
      // console.log('getchampsuccess action.payload', action.payload);
      state.champions = action.payload;
      state.loading = false;
      state.error = null;
    },
    getChampionsFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getChampionsStart,
  getChampionsSuccess,
  getChampionsFail,
} = championsSlice.actions;

export default championsSlice.reducer;

export const fetchChampions = async dispatch => {
  try {
    dispatch(getChampionsStart());

    const champions = await getChampions();

    dispatch(getChampionsSuccess(champions));
  } catch (err) {
    dispatch(getChampionsFail(err));
  }
};
