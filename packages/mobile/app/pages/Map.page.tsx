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

    console.log(reading);
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
        <MapView style={{ flex: 1 }}>
          <Camera zoomLevel={10} centerCoordinate={[-71.07579904594763, 42.3412156414843]} />
          <ShapeSource id='sound-heat' shape={generateTestData(LAT_MIN, LAT_MAX, LONG_MIN, LONG_MAX, 10)}>
            <HeatmapLayer
              id='sound-heat'
              style={{
                heatmapWeight: ['interpolate', ['linear'], ['get', 'db'], 0, 60, 0, 130],
                heatmapIntensity: ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
                heatmapRadius: ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20]
              }} />
          </ShapeSource>
        </MapView>
      </View>
    </View>
   );
};
