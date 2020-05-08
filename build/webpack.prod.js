const { DefinePlugin } = require('webpack');

const { INIT_ENV } = process.env;

module.exports.plugins = [
  new DefinePlugin({
    'process.env': {
      INIT_ENV: JSON.stringify(INIT_ENV)
    }
  })
];
