//Storybook Themingのインポート
import { create } from "@storybook/theming";

//ロゴ用の画像をインポート
import brandLogo from "../src/stories/assets/stackalt.svg";

export default create({
  //ベースにするデフォルトテーマ["light","dark"]
  base: "light",

  //不明
  colorPrimary: "hotpink",
  //左カラムメニューの選択色
  colorSecondary: "deepskyblue",

  // UI
  //背景色
  appBg: "white",
  //コンテンツ部分の背景色
  appContentBg: "silver",
  //ボーダー色
  appBorderColor: "grey",
  //角丸(ツールバーのメニュー選択時の小さいウィンドウ)
  appBorderRadius: 4,

  // Typography
  //フォント
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  //文字色
  textColor: "black",
  //不明
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  //ツールバーの文字色
  barTextColor: "silver",
  //ツールバーの選択されたメニューの文字色
  barSelectedColor: "black",
  //ツールバーの背景色
  barBg: "hotpink",

  // Form colors
  //inputの背景色
  inputBg: "white",
  //inputのボーダー色
  inputBorder: "silver",
  //input内の文字色
  inputTextColor: "black",
  //inputの角丸
  inputBorderRadius: 4,

  //ロゴのalt
  brandTitle: "My custom storybook",
  //ロゴのリンクURL
  brandUrl: "https://example.com",
  //ロゴ画像
  brandImage: brandLogo,
});
