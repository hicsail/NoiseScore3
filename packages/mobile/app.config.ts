import { ExpoConfig, ConfigContext } from 'expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'NoiseScore3',
  name: 'NoiseScore3',
  plugins: [
    'expo-router',
    [
      '@rnmapbox/maps',
      {
        'RNMapboxMapsDownloadToken': process.env.MAPS_DOWNLOAD_TOKNE
      }
    ],
    [
      'expo-splash-screen',
      {
          'image': './assets/images/splash-icon.png',
          'imageWidth': 200,
          'resizeMode': 'contain',
          'backgroundColor': '#ffffff'
      }
    ]
  ]
});
