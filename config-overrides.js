/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, addWebpackAlias, override } = require("customize-cra");
const path = require("path");

const resolve = (src) => path.resolve(__dirname, src);

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@src": resolve("./"),
    "@Style": resolve("./src/Common/Style/"),
    "@HOC": resolve("./src/HOC/"),
    "@Page": resolve("./src/Page/"),
  })
);
