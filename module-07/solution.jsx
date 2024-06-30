import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { DATA_URL, MAP_DARK_STYLE } from '../src/enums';
import { HeatmapLayer } from 'deck.gl';

const INITIAL_VIEW_STATE = {
  longitude: 0,
  latitude: 0,
  zoom: 1,
};

const CONTROLLER_STATE = {
  scrollZoom: true,
  dragPan: true,
  doubleClickZoom: true,
  dragRotate: true,
};

export default function Module07() {
  const layer = new HeatmapLayer({
    id: 'heatmap-layer',
    data: DATA_URL['frp'],
    getPosition: data => [data[0], data[1], 0],
    getWeight: data => data[2],
    radiusPixels: 5,
    intensity: 20,
    threshold: 0.09,
  });

  return (
    <>
      <DeckGL
        layers={layer}
        initialViewState={INITIAL_VIEW_STATE}
        controller={CONTROLLER_STATE}
      >
        <Map mapStyle={MAP_DARK_STYLE}></Map>
      </DeckGL>
    </>
  );
}
