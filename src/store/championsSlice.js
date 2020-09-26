import { createSlice } from '@reduxjs/toolkit';

import { getChampions } from '../api/ddragonAPI';

export const initialState = {
  champions: {},
  error: null,
};

const championsSlice = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    getChampionsSuccess(state, action) {
      state.champions = action.payload;
      state.error = null;
    },
    getChampionsFail(state, action) {
      state.error = action.payload;
    },
  },
});

export const { getChampionsSuccess, getChampionsFail } = championsSlice.actions;

export default championsSlice.reducer;

export const fetchChampions = version => async dispatch => {
  try {
    const champions = await getChampions(version);

    dispatch(getChampionsSuccess(champions));
  } catch (err) {
    dispatch(getChampionsFail(err));
  }
};
