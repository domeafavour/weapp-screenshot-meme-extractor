module.exports = {
  extends: ["taro/react"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-commonjs": "off",
    quotes: ["warn", "double"],
    "jsx-quotes": ["warn", "prefer-double"],
  },
};
