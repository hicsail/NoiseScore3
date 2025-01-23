import { useFont } from '@shopify/react-native-skia';
import { View, StyleSheet } from 'react-native';
import { CartesianChart, Line } from 'victory-native';

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: Math.random() * (120 - 20) + 20,
}));

export default function DecibelChart() {
  const yFont = useFont(require('../../assets/fonts/SpaceMono-Regular.ttf'), 12);

  return (
    <View style={styles.container}>
      <CartesianChart
        data={DATA}
        xKey="day"
        yKeys={["highTmp"]}
        yAxis={[{ formatYLabel: (label: number) => `${label} dB`, font: yFont }]}
      >
        {({ points }) => (
          // 👇 and we'll use the Line component to render a line path.
          <Line points={points.highTmp} color="green" strokeWidth={3} />
        )}
      </CartesianChart>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 200,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
