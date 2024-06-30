# Module 06: Comparing data rendering with GPU and CPU

## Add `ScreenGridLayer` import

```javascript
import { ScreenGridLayer } from 'deck.gl';
```

## Update `getGridLayerOptions` function and return the `ScreenGridLayer` option with dynamic `gpuAggregation` value

```javascript
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
```

`ScreenGridLayer` expects an object with the following properties: - https://deck.gl/docs/api-reference/aggregation-layers/screen-grid-layer#properties

## Initialize `gpuLayer` and `cpuLayer`

```javascript
const gpuLayer = new ScreenGridLayer(getGridLayerOptions(true));
const cpuLayer = new ScreenGridLayer(getGridLayerOptions(false));
```

## Pass `gpuLayer` as `layer` prop

```javascript
<DeckGL layers={gpuLayer} ... />
```

## Pass `cpuLayer` as `layer` prop

```javascript
<DeckGL layers={cpuLayer} ... />
```

## Result

Your page should look something like this:
![](../screenshots/module-06.gif)
