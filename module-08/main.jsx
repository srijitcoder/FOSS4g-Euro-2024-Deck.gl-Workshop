import React, { useEffect, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { DATA_URL, MAP_DARK_STYLE } from '../src/enums';
import { HeatmapLayer } from 'deck.gl';
import './style.css';

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
  // TODO: Initialize state for `radiusPixels`, `intensity`, `threshold` and `layer`

  useEffect(() => {
    // TODO: set layer inside `useEffect`
  }, []); // TODO: Add dependency for `useEffect`

  if (!layer) return <></>;

  return (
    <>
      <DeckGL
        layers={layer}
        initialViewState={INITIAL_VIEW_STATE}
        controller={CONTROLLER_STATE}
      >
        <Map mapStyle={MAP_DARK_STYLE}></Map>
      </DeckGL>
      {/* TODO: Add <Controller /> */}
    </>
  );
}

function Controller({ controllers }) {
  return (
    <div className="controller">
      {controllers.map(({ name, value, max, min, set, step }) => {
        return (
          <div>
            {name}:{' '}
            <input
              type="range"
              step={step}
              min={min}
              max={max}
              value={value}
              onInput={e => set(Number(e.target.value))}
            />{' '}
            {value}
          </div>
        );
      })}
    </div>
  );
}
