import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import models from './loader'
const loadingPlugin = createLoadingPlugin()

const configureStore = preloadedState =>
  init({
    plugins: [loadingPlugin],
    models,
    redux: {
      reducers: {
        ...rootReducer
      },
      initialState: preloadedState,
      enhancers: [applyMiddleware(thunk)]
    }
  })
export default configureStore
