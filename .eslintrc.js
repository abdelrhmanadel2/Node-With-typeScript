module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    quotes: ["error", "singles"],
    "prettier/prettier": 2, //mean error
    "no-console": 1, //means warning
    "no-var": "error",
    "prefer-const": "error",
  },
};
