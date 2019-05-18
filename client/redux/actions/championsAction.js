import axios from 'axios'

import { SET_CHAMPIONS } from '../constants'

const getAllChampions = champions => ({
  type: SET_CHAMPIONS,
  champions
})

export const fetchAllChampionsThunk = () => {
  return dispatch => {
    return axios
      .get(
        'http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/champion.json'
      )
      .then(({ data }) => dispatch(getAllChampions(data.data)))
      .catch(err => console.error('api call failed', err))
  }
}
