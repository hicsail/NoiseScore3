import Mapbox, { MapView } from '@rnmapbox/maps';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY!);

export default function Map() {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 300, width: 300 }}>
        <Text>Hello</Text>
        <MapView style={{ flex: 1 }} />
      </View>
    </View>
   );
};
