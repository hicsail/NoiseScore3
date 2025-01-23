import { View, StyleSheet } from 'react-native';
import { CartesianChart, Line } from 'victory-native';

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: Math.random() * (120 - 20) + 20,
}));

export default function DecibelChart() {
  return (
    <View style={styles.container}>
      <CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]}>
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
    width: '90%',
    alignContent: 'center'
  }
});
