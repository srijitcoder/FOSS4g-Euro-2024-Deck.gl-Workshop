// export const MAP_STYLE = 'https://deck.gl/mapstyle/deck-light.json';
// export const MAP_DARK_STYLE =
//   'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

export const BASE_URL = `http://${window.location.host}`

export const MAP_STYLE = `${BASE_URL}/deck-light.json`;
export const MAP_DARK_STYLE = `${BASE_URL}/deck-dark.json`;

export const DATA_URL = {
  "frp": `${BASE_URL}/data/4-million-frp.json`,
  "brightness": `${BASE_URL}/data/4-million-brightness.json`,
  "us-census": `${BASE_URL}/data/uber-data.json`,
  "us-census-geojson": `${BASE_URL}/data/uber-data.geojson`
}

const VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 9,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};

export const SCATTER_PLOT_CONFIG = {
  color: {
    male: {
      hex: '#0080ff',
      rgb: [0, 128, 255],
    },
    female: {
      hex: '#ff0080',
      rgb: [255, 0, 128],
    },
  },
  radiusScale: 15,
  view: VIEW_STATE,
  radiusMinPixels: 0.25,
};

export const GRID_CONFIG = {
  colorRange: [
    [255, 255, 178, 25],
    [254, 217, 118, 85],
    [254, 178, 76, 127],
    [253, 141, 60, 170],
    [240, 59, 32, 212],
    [189, 0, 38, 255],
  ],
  view: VIEW_STATE,
  opacity: 0.8,
  cellSizePixels: 20,
  aggregation: 'SUM',
};

export const HEATMAP_CONFIG = {
  colorRange: [
    [255, 255, 178, 25],
    [254, 217, 118, 85],
    [254, 178, 76, 127],
    [253, 141, 60, 170],
    [240, 59, 32, 212],
    [189, 0, 38, 255],
  ],
  view: VIEW_STATE,
  intensity: 1,
  threshold: 0.05,
  radiusPixels: 6,
};

export const BIG_DATA_HEATMAP_CONFIG = {
  ...HEATMAP_CONFIG,
  view: {
    ...VIEW_STATE,
    longitude: 0,
    latitude: 0,
    zoom: 1,
  },
  intensity: 6,
  threshold: 0.05,
  radiusPixels: 6,
};

export const BIG_DATA_GRID_CONFIG = {
  ...GRID_CONFIG,
  view: {
    ...VIEW_STATE,
    longitude: 0,
    latitude: 0,
    zoom: 1,
  },
  opacity: 0.8,
  cellSizePixels: 10,
  aggregation: 'SUM',
};
