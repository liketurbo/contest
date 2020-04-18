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

    // style: less code
    "no-return-assign": "off",
    "no-param-reassign": "off",

    // enable: eslint-plugin-simple-import-sort
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error",

    // fix: tests
    "jest/valid-describe": "off",

    // fix: regex
    "security/detect-unsafe-regex": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
}
