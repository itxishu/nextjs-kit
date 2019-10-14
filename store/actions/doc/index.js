import request from '../../../service/request'
import { createApiAction, createAction } from '../index'
import { LIST, CATEGORIES, POSTS } from '../../constants/doc'
import { bindActionCreators } from 'redux'
import { initStore as store } from '../../index'
export const list = createApiAction(POSTS, params => request.get('posts', params))
export const categories = createApiAction(CATEGORIES, params => request.get('categories', params))

export default bindActionCreators({
  list,
  categories
}, store().dispatch)