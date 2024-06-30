import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { DATA_URL, MAP_LIGHT_STYLE } from '../src/enums';
import { ScatterplotLayer } from 'deck.gl';
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

export default function Module05() {
  const [hoverInfo, setHoverInfo] = useState(null);

  const layer = new ScatterplotLayer({
    id: 'scatter-plot-layer',
    data: DATA_URL['us-census'],
    getPosition: data => [data[0], data[1], 0],
    getFillColor: data => (data[2] === 1 ? [0, 128, 255] : [255, 0, 128]),
    radiusScale: 15,
    radiusMinPixels: 0.25,
    pickable: true,
    onHover: info => {
      setHoverInfo(info);
    },
  });

  return (
    <>
      <DeckGL
        layers={layer}
        initialViewState={INITIAL_VIEW_STATE}
        controller={CONTROLLER_STATE}
      >
        <Map mapStyle={MAP_LIGHT_STYLE} />
      </DeckGL>
      {hoverInfo && hoverInfo.object && (
        <div
          style={{ left: hoverInfo.x, top: hoverInfo.y }}
          className="tooltip"
        >
          <strong>Gender:</strong>{' '}
          {hoverInfo.object[2] === 1 ? 'Male' : 'Female'}
        </div>
      )}
    </>
  );
}
