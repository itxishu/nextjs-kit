import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import * as Sentry from '@sentry/browser';
import initStore from '../store';
import { SENTRY_DSN } from '../utils/consts';

Sentry.init({
  dsn: SENTRY_DSN
});

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    componentDidCatch(error, errorInfo) {
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });

        Sentry.captureException(error);
      });

      super.componentDidCatch(error, errorInfo);
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);
