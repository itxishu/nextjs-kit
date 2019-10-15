import {  applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import models from './loader'
// eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const loadingPlugin = createLoadingPlugin()

const configureStore = preloadedState => {
  const store = init({
    plugins: [loadingPlugin],
    models,
    redux: {
      reducers: {
        ...rootReducer
      },
      initialState: preloadedState,
      // enhancers: [composeEnhancers(applyMiddleware(thunk))]  //, createLogger()
    }
  })
  return store
}

export default configureStore
