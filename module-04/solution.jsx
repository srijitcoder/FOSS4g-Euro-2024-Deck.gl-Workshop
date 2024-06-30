import React from 'react';
import DeckGL from '@deck.gl/react';
import Map from 'react-map-gl/maplibre';
import { Source, Layer } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
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

export default function Module04() {
  const layer = new ScatterplotLayer({
    id: 'scatter-plot-layer-with-deck',
    data: DATA_URL['us-census'],
    getPosition: data => [data[0], data[1], 0],
    getFillColor: data => (data[2] === 1 ? [0, 128, 255] : [255, 0, 128]),
    radiusScale: 15,
    radiusMinPixels: 0.25,
  });

  return (
    <div className="wrapper">
      <div className="with-deck">
        <DeckGL
          layers={layer}
          initialViewState={INITIAL_VIEW_STATE}
          controller={CONTROLLER_STATE}
          width="50vw"
        >
          <Map mapStyle={MAP_LIGHT_STYLE}></Map>
        </DeckGL>
      </div>
      <Map
        className="without-deck"
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle={MAP_LIGHT_STYLE}
        mapLib={maplibregl}
      >
        <Source
          id="scatter-plot-layer-without-deck"
          type="geojson"
          data={DATA_URL['us-census-geojson']}
        >
          <Layer
            id="point"
            type="circle"
            paint={{
              'circle-radius': 0.5,
              'circle-color': [
                'case',
                ['==', ['get', 'gender'], 1],
                '#0080ff',
                ['==', ['get', 'gender'], 2],
                '#ff0080',
                '#ff0080',
              ],
            }}
          />
        </Source>
      </Map>
    </div>
  );
}
