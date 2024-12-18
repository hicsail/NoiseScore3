import Mapbox, { Camera, HeatmapLayer, MapView } from '@rnmapbox/maps';
import { View } from 'react-native';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY!);

export default function Map() {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '100%', width: '100%' }}>
        <MapView style={{ flex: 1 }}>
          <Camera zoomLevel={9} centerCoordinate={[-71.0526092, 42.3542948]} />
        </MapView>
      </View>
    </View>
   );
};
