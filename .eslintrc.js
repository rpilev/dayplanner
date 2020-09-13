module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: "detect"
    },
  },
  extends: [
    "plugin:react/recommended",
    'airbnb-typescript',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "semi": "off",
    'no-magic-numbers': ["error", { "ignore": [0, 1, -1, 2] }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'arrow-body-style': ["error", "as-needed"],

    'react/jsx-props-no-spreading': "off",
    'react/jsx-one-expression-per-line': 'off',
    "react/prop-types": 'off',

    "import/prefer-default-export": ["off"],
    'import/newline-after-import': ['error', { count: 1 }],
    "import/no-extraneous-dependencies": ["off"],

    "@typescript-eslint/semi": ['error', 'never'],
  },
};
