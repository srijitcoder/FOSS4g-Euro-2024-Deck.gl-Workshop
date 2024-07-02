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
  const [radiusPixels, setRadiusPixels] = useState(3);
  const [intensity, setIntensity] = useState(20);
  const [threshold, setThreshold] = useState(0.09);
  const [layer, setLayer] = useState(null);

  useEffect(() => {
    setLayer(
      new HeatmapLayer({
        id: 'heatmap-layer',
        data: DATA_URL['frp'],
        getPosition: data => [data[0], data[1], 0],
        getWeight: data => data[2],
        radiusPixels,
        intensity,
        threshold,
      })
    );
  }, [radiusPixels, intensity, threshold]);

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
      <Controller
        controllers={[
          {
            name: 'Radius Pixels',
            value: radiusPixels,
            set: setRadiusPixels,
            max: 10,
            min: 0,
            step: 1,
          },
          {
            name: 'Intensity',
            value: intensity,
            set: setIntensity,
            max: 100,
            min: 0,
            step: 2,
          },
          {
            name: 'Threshold',
            value: threshold,
            set: setThreshold,
            max: 1,
            min: 0,
            step: 0.01,
          },
        ]}
      />
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
