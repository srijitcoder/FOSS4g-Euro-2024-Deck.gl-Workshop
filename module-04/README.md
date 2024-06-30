# Module 04: Comparing rendering of data with and without Deck.GL

## Import `Layer` and `Source` from maplibre

```javascript
import { Source, Layer } from 'react-map-gl/maplibre';
```

## Import `maplibre`

```javascript
import maplibregl from 'maplibre-gl';
```

## Add `maplibregl` to `mapLib` props

```javascript
<Map mapLib={maplibregl}>
```

## Add `Source` component

```javascript
<Source
  id="scatter-plot-layer-without-deck"
  type="geojson"
  data={DATA_URL['us-census-geojson']}
>
  // TODO: Add `Layer` component
</Source>
```

## Add `Layer` component

```javascript
<Layer id="point" type="circle" paint={ADD_PROP} />
```

## Add `paint` properties

```javascript
paint={{
  'circle-radius': 0.5,
  'circle-color': "blue",
}}
```

## Bonus Quest:

Try adding `circle-color` using Maplibre Style expression based out on `gender` property.

- If `gender` is `1` add `#0080ff`
- If `gender` is `2` add `#ff0080`
- Otherwise default `#ff0080`

Hint - https://maplibre.org/maplibre-style-spec/expressions/

## Result

Your page should look something like this:
![](../screenshots/module-04.png)
