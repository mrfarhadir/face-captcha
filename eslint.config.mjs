/*import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
*/

//export default [
//  {
//    files: ["src/**/*.{js,mjs,cjs,ts}"]
//  },
//  { languageOptions: { globals: globals.browser } },
//  pluginJs.configs.recommended,
//  ...tseslint.configs.recommended,
//
// ];
//
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];


