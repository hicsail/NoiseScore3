import Mapbox, { Camera, CircleLayer, HeatmapLayer, MapView, ShapeSource } from '@rnmapbox/maps';
import { View } from 'react-native';
import heatMapGeoJson from '../../assets/sample-heat.json';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY!);

const LAT_MIN = 42.31224069968574;
const LAT_MAX = 42.390280104614526;
const LONG_MIN = -71.17305160566639;
const LONG_MAX = -71.05479527647104;

export const generateTestData = (latMin: number, latMax: number, longMax: number, longMin: number, numElements: number): GeoJSON.FeatureCollection => {
  const DB_MIN = 20;
  const DB_MAX = 120;

  const features: GeoJSON.Feature[] = [];

  for (var i = 0; i < numElements; i++) {
    const reading = Math.random() * (DB_MAX - DB_MIN) + DB_MIN;
    const latitude = Math.random() * (latMax - latMin) + latMin;
    const longitude = Math.random() * (longMax - longMin) + longMin;

    features.push({
      type: 'Feature',
      properties: {
        id: i,
        db: reading
      },
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    });
  }

  return {
    type: 'FeatureCollection',
    features: features
  };
}

export default function Map() {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '100%', width: '100%' }}>
        <MapView style={{ flex: 1 }} styleURL={JSON.stringify(style)}>
          {/*
          <Camera zoomLevel={10} centerCoordinate={[-71.07579904594763, 42.3412156414843]} />
          <ShapeSource id='sound-heat' shape={generateTestData(LAT_MIN, LAT_MAX, LONG_MIN, LONG_MAX, 2000)}>
            <HeatmapLayer
              id='sound-heat'
              style={{
                heatmapWeight: ['interpolate', ['linear'], ['get', 'db'], 0, 0, 6, 1]
              }} />


          </ShapeSource>
          */}
        </MapView>
      </View>
    </View>
   );
};

const style = {
  "version": 8,
  "name": "Heatmap",
  "sources": {
    'earthquakes': {
      'type': 'geojson',
      'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
    }
  },
  "center": [
    74.24426803763072,
    -2.2507114487818853
  ],
  "zoom": 0.6851443156248076,
  "layers": [
    {
      'id': 'earthquakes-point',
      'type': 'circle',
      'source': 'earthquakes',
      'minzoom': 7,
      'paint': {
          // Size circle radius by earthquake magnitude and zoom level
          'circle-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
              16,
              ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
          ],
          // Color circle by earthquake magnitude
          'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              1,
              'rgba(33,102,172,0)',
              2,
              'rgb(103,169,207)',
              3,
              'rgb(209,229,240)',
              4,
              'rgb(253,219,199)',
              5,
              'rgb(239,138,98)',
              6,
              'rgb(178,24,43)'
          ],
          'circle-stroke-color': 'white',
          'circle-stroke-width': 1,
          // Transition from heatmap to circle layer by zoom level
          'circle-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              0,
              8,
              1
          ]
      }
    },
    {
      'id': 'earthquakes-heat',
      'type': 'heatmap',
      'source': 'earthquakes',
      'maxzoom': 9,
      'paint': {
          // Increase the heatmap weight based on frequency and property magnitude
          'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0,
              0,
              6,
              1
          ],
          // Increase the heatmap color weight weight by zoom level
          // heatmap-intensity is a multiplier on top of heatmap-weight
          'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              1,
              9,
              3
          ],
          // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
          // Begin color ramp at 0-stop with a 0-transparancy color
          // to create a blur-like effect.
          'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'rgba(33,102,172,0)',
              0.2,
              'rgb(103,169,207)',
              0.4,
              'rgb(209,229,240)',
              0.6,
              'rgb(253,219,199)',
              0.8,
              'rgb(239,138,98)',
              1,
              'rgb(178,24,43)'
          ],
          // Adjust the heatmap radius by zoom level
          'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              2,
              9,
              20
          ],
          // Transition from heatmap to circle layer by zoom level
          'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              1,
              9,
              0
          ]
      }
    },
  ]
};
