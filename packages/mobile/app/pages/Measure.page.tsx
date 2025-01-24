import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DecibelChart from '../components/measurement/DecibelChart.component';
import DecibelSummary from '../components/measurement/DecibelSummary.component';
import RecordControls from '../components/measurement/RecordControls.component';
import { Audio } from 'expo-av';
import { useState } from 'react';
import { Recording } from 'expo-av/build/Audio';

export default function Measure() {

  const [recording, setRecording] = useState<Recording | undefined>(undefined);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {

    try {
      if (permissionResponse && permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY, (status) => console.log(status));
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    if (!recording) {
      console.error('Recording undefined');
      return;
    }

    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View>
      <Text variant='headlineLarge' style={styles.statusText}>Stopped</Text>
      <DecibelChart />
      <DecibelSummary readings={[20, 50, 100]}/>
      <RecordControls startRecording={startRecording} stopRecording={stopRecording}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  statusText: {
    alignContent: 'center',
    textAlign: 'center'
  }
});
