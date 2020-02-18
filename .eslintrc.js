module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-native/all', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {},
}
