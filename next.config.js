const withPlugins = require('next-compose-plugins');
const stylus = require('@zeit/next-stylus');
const css = require('@zeit/next-css');
const { DefinePlugin } = require('webpack');
const dev = process.env.NODE_ENV !== 'production';
const { plugins } = require('./build/webpack.common')
const localIdentName = dev ? '[local]-[hash:base64:5]' : '[hash:base64:5]';

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const nextConfig = {
  distDir: 'dist',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.plugins.push(...plugins)
    return config
  }
};

module.exports = withPlugins(
  [
    [
      stylus,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName
        }
      }
    ],
    [
      css,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName
        }
      }
    ]
  ],
  nextConfig
);
