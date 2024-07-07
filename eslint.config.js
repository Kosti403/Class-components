export default {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-compiler', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'react-compiler/no-unused-components': 'error',
    'react-compiler/no-unused-variables': 'error',
    'react-compiler/no-unsafe-swr-calls': 'error',
    'react-compiler/no-unused-values': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
