import { useFont } from '@shopify/react-native-skia';
import { View, StyleSheet } from 'react-native';
import { CartesianChart, Line } from 'victory-native';

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: Math.random() * (120 - 20) + 20,
}));

export default function DecibelChart() {
  const labelFont = useFont(require('../../assets/fonts/SpaceMono-Regular.ttf'), 12);

  return (
    <View style={styles.container}>
      <View style={styles.graph}>
        <CartesianChart
          data={DATA}
          xKey="day"
          yKeys={["highTmp"]}
          yAxis={[{ formatYLabel: label => `${label}dB`, font: labelFont }]}
          xAxis={{ formatXLabel: label => `${label}s`, font: labelFont }}
        >
          {({ points }) => (
            <Line points={points.highTmp} color="green" strokeWidth={3} />
          )}
        </CartesianChart>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center'
  },
  graph: {
    height: 300,
    width: 350,
  }
});
