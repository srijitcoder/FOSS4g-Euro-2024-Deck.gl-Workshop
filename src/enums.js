// export const MAP_STYLE = 'https://deck.gl/mapstyle/deck-light.json';
// export const MAP_DARK_STYLE =
//   'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

export const BASE_URL = `http://${window.location.host}`;

export const MAP_STYLE = `${BASE_URL}/deck-light.json`;
export const MAP_LIGHT_STYLE = `${BASE_URL}/deck-light.json`;
export const MAP_DARK_STYLE = `${BASE_URL}/deck-dark.json`;

export const DATA_URL = {
  frp: `${BASE_URL}/data/4-million-frp.json`,
  brightness: `${BASE_URL}/data/4-million-brightness.json`,
  'us-census': `${BASE_URL}/data/uber-data.json`,
  'us-census-geojson': `${BASE_URL}/data/uber-data.geojson`,
};
