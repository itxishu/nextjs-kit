const withPlugins = require('next-compose-plugins');
const stylus = require('@zeit/next-stylus');
const css = require('@zeit/next-css');

const dev = process.env.NODE_ENV !== 'production';

const localIdentName = dev ? '[local]-[hash:base64:5]' : '[hash:base64:5]';

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const nextConfig = {
  distDir: 'dist'
  // webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
  //   config.module.rules.push({
  //       test: /\.js$/,
  //       enforce: 'pre',
  //       include: [
  //         path.resolve('components'),
  //         path.resolve('pages'),
  //         path.resolve('utils'),
  //         path.resolve('constants'),
  //         path.resolve('containers')
  //       ],
  //       options: {
  //         configFile: path.resolve('.eslintrc'),
  //         eslint: {
  //           configFile: path.resolve(__dirname, '.eslintrc')
  //         }
  //       },
  //       loader: 'eslint-loader'
  //     });
  // }
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
