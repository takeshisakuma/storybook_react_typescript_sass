# Storybook for React

Storybook for React で TypeScript と Sass(Dart-sass)を使い、GitHub Pages に公開するテンプレートです。

公開 URL は下記になります。
https://アカウント名.github.io/リポジトリ名/

## リモートリポジトリ登録

GitHub でリポジトリを作成して下記のコマンドで登録します。

```
git remote add origin https://github.com/アカウント名/リポジトリ名.git
```

## 製作時

```
npm run storybook
```

Storybook を起動して、/src/stories/配下のファイルを編集します。

## GitHub Pages 公開

編集が終わったら、GitHub Pages に公開します。

```
npm run deploy
```

下記 URL で Storybook が表示されるか確認します。
https://アカウント名.github.io/リポジトリ名/
