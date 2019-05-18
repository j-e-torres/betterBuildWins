import axios from 'axios'

import { SET_ITEMS } from '../constants'

const getAllItems = items => ({
  type: SET_ITEMS,
  items
})

export const fetchAllItemsThunk = () => {
  return dispatch => {
    return axios
      .get('http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/item.json')
      .then(({ data }) => dispatch(getAllItems(data.data)))
      .catch(err => console.error('api items failed', err))
  }
}
