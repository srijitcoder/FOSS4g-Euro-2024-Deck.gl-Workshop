import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { DATA_URL, MAP_DARK_STYLE } from '../src/enums';
import { ScreenGridLayer } from 'deck.gl';
import './style.css';

const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 10,
  maxZoom: 16,
};

const CONTROLLER_STATE = {
  scrollZoom: true,
  dragPan: true,
  doubleClickZoom: true,
  dragRotate: true,
};

function getGridLayerOptions(gpuAggregation) {
  return {
    id: `screen-grid-layer-${gpuAggregation}`,
    data: DATA_URL['us-census'],
    getPosition: data => [data[0], data[1], 0],
    getWeight: data => data[2],
    opacity: 0.8,
    cellSizePixels: 8,
    aggregation: 'SUM',
    gpuAggregation: gpuAggregation,
    colorRange: [
      [255, 255, 178, 25],
      [254, 217, 118, 85],
      [254, 178, 76, 127],
      [253, 141, 60, 170],
      [240, 59, 32, 212],
      [189, 0, 38, 255],
    ],
  };
}

export default function Module06() {
  const gpuLayer = new ScreenGridLayer(getGridLayerOptions(true));
  const cpuLayer = new ScreenGridLayer(getGridLayerOptions(false));

  return (
    <>
      <div className="wrapper">
        <div className="with-gpu">
          <DeckGL
            layers={gpuLayer}
            initialViewState={INITIAL_VIEW_STATE}
            controller={CONTROLLER_STATE}
            width="50vw"
          >
            <Map mapStyle={MAP_DARK_STYLE}></Map>
          </DeckGL>
        </div>
        <div className="with-cpu">
          <DeckGL
            layers={cpuLayer}
            initialViewState={INITIAL_VIEW_STATE}
            controller={CONTROLLER_STATE}
            width="50vw"
          >
            <Map mapStyle={MAP_DARK_STYLE}></Map>
          </DeckGL>
        </div>
      </div>
    </>
  );
}
