import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import models from './loader';

const loadingPlugin = createLoadingPlugin();

const initStore = initialState =>
  init({
    plugins: [loadingPlugin],
    models,
    redux: {
      initialState
    }
  });
export default initStore;
