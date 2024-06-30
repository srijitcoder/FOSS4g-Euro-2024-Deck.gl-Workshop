import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { MAP_DARK_STYLE } from '../src/enums';

const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 10,
  maxZoom: 16,
};

// Learn more about controller from here - https://deck.gl/docs/api-reference/core/controller#options
const CONTROLLER_STATE = {
  scrollZoom: true,
  dragPan: true,
  doubleClickZoom: true,
  dragRotate: true,
};

export default function Module02() {
  return (
    <>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={CONTROLLER_STATE}
      >
        <Map mapStyle={MAP_DARK_STYLE}></Map>
      </DeckGL>
    </>
  );
}
