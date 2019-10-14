import { ADD, MINUS, LIST, CATEGORIES, POSTS } from '../constants/doc'
import { handleActions } from 'redux-actions'


export const INITIAL_STATE = {
  num: 0,
  list: [],
  categories: [],
  posts:[]
}

let reducers = {
  [POSTS](state, action) {
    return {
      ...state,
      posts: action.payload.data,
      requestings: {
        ...state.requestings,
        [CATEGORIES]: false
      },
      errors: {
        ...state.errors,
        [CATEGORIES]: null
      }
    }
  },
  [CATEGORIES](state, action) {
    console.log('action',action)
    return {
      ...state,
      categories: action.payload.data,
      requestings: {
        ...state.requestings,
        [CATEGORIES]: false
      },
      errors: {
        ...state.errors,
        [CATEGORIES]: null
      }
    }
  }

}

const doc = handleActions(reducers, INITIAL_STATE)
export default {
  doc
}