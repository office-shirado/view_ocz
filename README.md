# オープン地番図 表示サンプル

日本の地番図をみんなで整備する **オープン地番Zoo（OCZ）** のデータを表示するサンプルです。

🔗 **デモ**: https://office-shirado.github.io/view_ocz/

> ⚠️ 2026年5月時点では無料公開ですが、商用利用の場合は有料化を検討しております。（時期未定）

---

## 使い方

### 1. HTMLヘッダーでモジュールをインポート

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>
<script src="https://chosashi-data.org/ocz/module/ver_007/ocz-module.js"></script>
```

### 2. `map.on('load')` で OCZ を初期化

```javascript
map.on('load', async function () {
  // OCZ モジュール初期化
  OCZModule.init(map);
});
```

上記2ステップだけで、Web地図にオープン地番図（OCZ）を表示できます。

---

## オープン地番図 / オープン地番Zoo とは

日本の地番図をみんなで整備するプロジェクト。  
**1.4億筆（ピース）のパズル**を解き、地番図を整備します。

🔗 https://office-shirado.com/ocz/

---

## データクレジット

本サンプルの公共座標公図は [KotobaMedia](https://tiles.kmproj.com/datasets/mojxml/2026) さんのデータを利用しております。
