import axios from 'axios';

import { SET_ITEMS, SET_ITEMS_NAMES } from '../constants';

const getAllItems = items => ({
  type: SET_ITEMS,
  items
});

const getItemNames = items => ({
  type: SET_ITEMS_NAMES,
  items
});

export const fetchAllItemsThunk = () => {
  return dispatch => {
    return axios
      .get(
        'https://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/item.json'
      )
      .then(({ data }) => {
        return Promise.all([
          dispatch(getAllItems(data.data)),
          dispatch(getItemNames(data.data))
        ]);
      })
      .catch(err => console.error('api items failed', err));
  };
};
