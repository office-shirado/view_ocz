【オープン地番図】

オープン地番Zooで整備している「オープン地番図」を表示するサンプルです。

https://office-shirado.github.io/view_ocz/

※２０２６年５月時点では、無料公開ですが、商用利用の場合は、費用を頂くことも検討しております。
　（有料化の時期は現時点で未定）

＜HTMLヘッダーでモジュールをインポート＞
<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>
<script src="https://chosashi-data.org/ocz/module/ver_007/ocz-module.js"></script>

＜on loadでOCZ初期化＞
map.on('load', async function () {
...
  // OCZ モジュール初期化
  OCZModule.init(map);
});

上記２つだけで、Web地図にオープン地番図（OCZ）を表示できます。

** オープン地番図/オープン地番Zooについて **
 日本の地番図をみんなで整備する
 1.4億筆（ピース）のパズルを解き、
 地番図を整備するプロジェクト。

https://office-shirado.com/ocz/

本サンプルでは、公共座標公図はKotobaMediaさんのデータを利用しております。

https://tiles.kmproj.com/datasets/mojxml/2026
