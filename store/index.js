import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import models from './loader';

const loadingPlugin = createLoadingPlugin();

const initStore = () =>
  init({
    plugins: [loadingPlugin],
    models
  });
export default initStore;
