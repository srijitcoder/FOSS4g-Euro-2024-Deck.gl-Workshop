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

export default function Module01() {
  return (
    <>
      <DeckGL initialViewState={INITIAL_VIEW_STATE}>
        <Map mapStyle={MAP_DARK_STYLE}></Map>
      </DeckGL>
    </>
  );
}
