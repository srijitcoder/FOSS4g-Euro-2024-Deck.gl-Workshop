import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { DATA_URL, MAP_DARK_STYLE } from '../src/enums';
// TODO: Add `ScreenGridLayer` import
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
  // TODO: Dynamically updating
}

export default function Module06() {
  // TODO: Initialize `gpuLayer` and `cpuLayer`

  return (
    <>
      <div className="wrapper">
        <div className="with-gpu">
          <DeckGL
            // TODO: Pass `gpuLayer` as `layer` prop
            initialViewState={INITIAL_VIEW_STATE}
            controller={CONTROLLER_STATE}
            width="50vw"
          >
            <Map mapStyle={MAP_DARK_STYLE}></Map>
          </DeckGL>
        </div>
        <div className="with-cpu">
          <DeckGL
            // TODO: Pass `cpuLayer` as `layer` prop
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
