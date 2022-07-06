/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, addWebpackAlias, override } = require("customize-cra");
const path = require("path");

const resolve = (src) => path.resolve(__dirname, src);

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@src": resolve("./"),
    "@Common": resolve("./src/_Common/"),
    "@Three": resolve("./src/_Common/Three/index.tsx"),
    "@Style": resolve("./src/_Common/Style/"),
    "@HOC": resolve("./src/HOC/"),
    "@Atom": resolve("./src/Atom/"),
    "@Molecules": resolve("./src/Molecules/"),
    "@Organism": resolve("./src/Organism/"),
    "@Page": resolve("./src/Page/"),
  })
);
