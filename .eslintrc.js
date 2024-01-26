module.exports = {
  // ルールをまとめて追加
  "extends": [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "prettier"
  ],
  // 個別ルール
  "rules": {
    // セミコロンは基本なし
    "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
    "semi-spacing": ["error", {"after": true, "before": false}],
    "semi-style": ["error", "first"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    // importするファイルをアルファベット順に自動で並び替える
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    // importのパスにエイリアス（'@/components/xxxxx'）を使うとエラーになるのでそれを防ぐ
    "import/no-unresolved": "off",
    // その他
    "no-console": "off",
  }
}