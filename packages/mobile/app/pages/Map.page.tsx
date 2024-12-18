import Mapbox, { Camera, HeatmapLayer, MapView } from '@rnmapbox/maps';
import { View } from 'react-native';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY!);

export default function Map() {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '100%', width: '100%' }}>
        <MapView style={{ flex: 1 }} styleURL={JSON.stringify(style)}>
          <Mapbox.Camera followZoomLevel={3} followUserLocation />
        </MapView>
      </View>
    </View>
   );
};

const style = {
  "version": 1,
  "name": "style-json-example",
  "sources": {
    "population": {
      "type": "vector",
      "url": "mapbox://mapbox.660ui7x6"
    },
    "overlay": {
      "type": "image",
      "url": "https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif",
      "coordinates": [
        [-80.425, 46.437],
        [-71.516, 46.437],
        [-71.516, 37.936],
        [-80.425, 37.936]
      ]
    }
  },
  "layers": [
    {
      "id": "state-population",
      "source": "population",
      "source-layer": "state_county_population_2014_cen",
      "type": "fill",
      "maxzoom": 4,
      "filter": ["==", "isState", true],
      "paint": {
        "fill-opacity": 0.75,
        "fill-color": [
          "interpolate",
          ["linear"],
          ["get", "population"],
          0,
          "#F2F12D",
          500000,
          "#EED322",
          750000,
          "#E6B71E",
          1000000,
          "#DA9C20",
          2500000,
          "#CA8323",
          5000000,
          "#B86B25",
          7500000,
          "#A25626",
          10000000,
          "#8B4225",
          25000000,
          "#723122"
        ]
      }
    },
    {
      "id": "county-population",
      "source": "population",
      "source-layer": "state_county_population_2014_cen",
      "type": "fill",
      "maxzoom": 4,
      "filter": ["==", "isState", true],
      "paint": {
        "fill-opacity": 0.75,
        "fill-color": [
          "interpolate",
          ["linear"],
          ["get", "population"],
          0,
          "#F2F12D",
          100,
          "#EED322",
          1000,
          "#E6B71E",
          5000,
          "#DA9C20",
          10000,
          "#CA8323",
          50000,
          "#B86B25",
          100000,
          "#A25626",
          500000,
          "#8B4225",
          1000000,
          "#723122"
        ]
      }
    },
    {
      "id": "overlay",
      "source": "overlay",
      "type": "raster",
      "paint": {"raster-opacity": 0.85}
    }
  ]
}
