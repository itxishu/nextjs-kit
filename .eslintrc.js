'use strict';

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'prettier'],
  globals: {
    location: true
  },
  overrides: [
    {
      files: ['bin/*.js', 'lib/*.js'],
      excludedFiles: '*.test.js',
      rules: {
        quotes: ['error', 'single']
      }
    }
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: ['airbnb-base', 'prettier', 'prettier/react'],
  globals: {
    React: 'writable'
  },
  rules: {
    'no-underscore-dangle': 1,
    'prefer-destructuring': 1,
    'arrow-body-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'prefer-const': 0,
    'no-unused-expressions': [
      1,
      {
        allowShortCircuit: true
      }
    ],
    'no-empty': [
      2,
      {
        allowEmptyCatch: true
      }
    ],
    'default-case': 0,
    'no-case-declarations': 0,
    'class-methods-use-this': 0,
    'no-script-url': 0,
    semi: 0,
    'eol-last': 0,
    'no-unused-vars': 1,
    'global-require': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'import/no-unresolved': 0,
    'no-unneeded-ternary': 1,
    'no-nested-ternary': 1,
    'max-len': [2, 150],
    'no-return-assign': 0,
    'dot-notation': 1,
    'func-names': 1,
    'no-useless-constructor': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0, // Disallow Reassignment of Function Parameters
    'no-multi-assign': 0, // Disallow Use of Chained Assignment Expressions
    'consistent-return': 0 // require return statements to either always or never specify values
  }
};
