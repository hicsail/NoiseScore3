import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DecibelChart from '../components/DecibelChart.component';

export default function Measure() {
  return (
    <View>
      <Text variant='headlineLarge' style={styles.statusText}>Stopped</Text>
      <DecibelChart />
      <Text>Readings</Text>
      <Text>Controls</Text>
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
