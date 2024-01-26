module.exports = {
  extends: ["stylelint-config-recess-order", "stylelint-config-recommended-scss"],
  rules: {
    // ::before, ::afterのコロンを2つにする
    "selector-pseudo-element-colon-notation": "double",
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    "scss/selector-no-union-class-name": true,
    "no-empty-source": null,
  },
  ignoreFiles: ["**/node_modules/**"],
};