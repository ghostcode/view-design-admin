module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi':0,
    'quotes':0,
    'max-len':0,
    'comma-dangle':0,
    'prefer-const':0,
    "vue/no-parsing-error":'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
