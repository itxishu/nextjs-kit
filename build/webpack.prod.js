const { DefinePlugin } = require('webpack');

export const plugins  = [
  new DefinePlugin({
    'process.env': {
      INIT_ENV: JSON.stringify(INIT_ENV)
    }
  })
]
