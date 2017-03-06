import * as types from '../../mutation-types'

const state = {
  directions: [],
  page: 1
}

const mutations = {
  [types.UPDATE_DIRECTIONS] (state, directions) {
    state.directions = directions
  },
  [types.UPDATE_DIRECTION] (state, parcel) {
    state.directions.splice(parcel.index, 1, parcel.direction)
  },
  [types.UPDATE_DIRECTIONS_PAGE] (state, page) {
    state.page = page
  }
}

export default {
  state,
  mutations
}
