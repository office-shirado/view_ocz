const map = new maplibregl.Map({
  container: 'map',
  style: { version: 8, sources: {}, layers: [] },
  center: [139.765, 35.682],
  zoom: 14.5,
  hash: true,
  minZoom: 4,
  maxZoom: 23,
  dragRotate: false
});

map.dragRotate.disable();
map.touchPitch.disable();
map.touchZoomRotate.disableRotation();

map.on('load', {

  // GSI シームレス空中写真
  map.addSource('gsi-photo', {
    type: 'raster',
    tiles: ['https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'],
    tileSize: 256,
    minzoom: 12,
    maxzoom: 18,
    attribution:"<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
  });
  map.addLayer({
    id: 'gsi-photo',
    type: 'raster',
    source: 'gsi-photo',
    paint: {
      'raster-opacity': 1
    }
  });

  // GSI 淡色地図
  map.addSource('gsi-pale', {
    type: 'raster',
    tiles: ['https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'],
    tileSize: 256,
    minzoom: 4,
    maxzoom: 18,
    attribution:"<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
  });
  map.addLayer({
    id: 'gsi-pale',
    type: 'raster',
    source: 'gsi-pale',
    paint: {
      'raster-opacity': ['interpolate', ['linear'], ['zoom'], 12, 1.0, 14, 0.4]
    }
  });


  // MOJ ベクター（KotobaMedia）
  map.addSource('MOJ_Map', {
    type: 'vector',
    tiles: ['https://tiles.kmproj.com/mojxml/2026/{z}/{x}/{y}.mvt'],
    minzoom: 0,
    maxzoom: 16,
    attribution: '<a href="https://www.moj.go.jp/MINJI/minji05_00494.html" target="_blank">法務省地図</a> | <a href="https://tiles.kmproj.com/datasets/mojxml/2026" target="_blank">KotobaMedia</a>'
  });

  // 集計レイヤー (Z0?15)
  map.addLayer({
    id: 'MOJ_agg-fill',
    type: 'fill',
    source: 'MOJ_Map',
    'source-layer': 'mojxml_agg',
    paint: { 'fill-color': '#cccc00', 'fill-opacity': 0.2 },
    minzoom: 11,
    maxzoom: 16
  });

  // 筆レイヤー (Z16+)
  map.addLayer({
    id: 'MOJ_fude-fill',
    type: 'fill',
    source: 'MOJ_Map',
    'source-layer': 'mojxml',
    paint: {
      'fill-color': '#ffff00',
      'fill-opacity': ['interpolate', ['linear'], ['zoom'], 17, 0.2, 18, 0]
    },
    minzoom: 16,
    maxzoom: 24
  });
  map.addLayer({
    id: 'MOJ_fude-line',
    type: 'line',
    source: 'MOJ_Map',
    'source-layer': 'mojxml',
    paint: {
      'line-color': '#ff0000',
      'line-width': ['interpolate', ['linear'], ['zoom'], 15, 0.1, 17, 1.0],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 15, 0.1, 16, 1.0]
    },
    minzoom: 16,
    maxzoom: 24
  });

  // OCZ モジュール初期化
  OCZModule.init(map);
});
