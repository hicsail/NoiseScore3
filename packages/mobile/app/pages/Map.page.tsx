import Mapbox, { Camera, CircleLayer, HeatmapLayer, MapView, ShapeSource } from '@rnmapbox/maps';
import { View } from 'react-native';
import heatMapGeoJson from '../../assets/sample-heat.json';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY!);

export default function Map() {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '100%', width: '100%' }}>
        <MapView style={{ flex: 1 }}>
          <Mapbox.Camera followZoomLevel={3} followUserLocation />

          <ShapeSource id='sound-heat' shape={heatMapGeoJson}>
            <CircleLayer id='sound-heat'>

            </CircleLayer>
          </ShapeSource>
        </MapView>
      </View>
    </View>
   );
};
