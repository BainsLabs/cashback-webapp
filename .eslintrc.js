module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 2,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0
  }
};
