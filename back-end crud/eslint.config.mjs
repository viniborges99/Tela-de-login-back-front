import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default defineConfig({
  files: ['**/*.{js,mjs,cjs}'],
  languageOptions: {
    globals: globals.node,
  },
  plugins: {
    js,
    prettier,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { semi: true, singleQuote: true }],
  },
});
