module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
    'import',
    '@emotion'
  ],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'import/extensions': ['error']
  }
}
