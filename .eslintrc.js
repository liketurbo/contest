module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "get-off-my-lawn",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    // fix: typescript
    "@typescript-eslint/explicit-function-return-type": "off",

    // enable: eslint-plugin-simple-import-sort
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
}
