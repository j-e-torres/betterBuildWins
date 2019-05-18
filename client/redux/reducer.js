import { SET_CHAMPIONS, SET_ITEMS } from './constants'

export const championsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CHAMPIONS:
      return action.champions
    default:
      return state
  }
}

export const itemsReducer = (state = {}, action) => {
  const itemsObj = action.items
  const onlyAramAndSummonersRift = itemsObj
    ? Object.keys(itemsObj).reduce((acc, key) => {
        if (
          !acc[key] &&
          (itemsObj[key].maps[11] === true || itemsObj[key].maps[12] === true)
        ) {
          acc[key] = itemsObj[key]
        }
        return acc
      }, {})
    : {}

  switch (action.type) {
    case SET_ITEMS:
      return onlyAramAndSummonersRift
    default:
      return state
  }
}
