import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { MAP_LIGHT_STYLE } from '../src/enums'; // TODO: Add `DATA_URL` from enums
// TODO: import ScatterplotLayer

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

export default function Module03() {
  // TODO: Initialize `ScatterpoltLayer`
  ``;
  return (
    <>
      <DeckGL
        layers={ADD_PROPS}
        initialViewState={INITIAL_VIEW_STATE}
        controller={CONTROLLER_STATE}
      >
        <Map mapStyle={MAP_LIGHT_STYLE}></Map>
      </DeckGL>
    </>
  );
}
