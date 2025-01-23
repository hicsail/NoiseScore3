import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DecibelChart from '../components/measurement/DecibelChart.component';
import DecibelSummary from '../components/measurement/DecibelSummary.component';

export default function Measure() {
  return (
    <View>
      <Text variant='headlineLarge' style={styles.statusText}>Stopped</Text>
      <DecibelChart />
      <DecibelSummary readings={[20, 50, 100]}/>
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
