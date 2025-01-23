import { ReactNode, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const Row: React.FC<{ children: ReactNode }> = ({ children}) => {
  return <View style={styles.row}>{children}</View>;
};

const Col: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Text style={styles.col}>{children}</Text>;
};

interface DecibelStats {
  min: number;
  max: number;
  average: number;
}

export interface DecibelSummaryProps {
  readings: number[];
}

export default function DecibelSummary(props: DecibelSummaryProps) {

  const [stats, setStats] = useState<DecibelStats | null>(null);

  useEffect(() => {
    if (props.readings.length == 0) {
      setStats(null);
      return;
    }

    // Compute the stats
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let average = 0;

    for (const reading of props.readings) {
      min = reading < min ? reading : min;
      max = reading > max ? reading : max;
      average += reading;
    }

    // Calculate the average to 2 decimals
    average /= props.readings.length;
    average = +average.toFixed(2);

    setStats({ min, max, average });
  }, [props.readings]);

  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.header}>Decibels Measured</Text>

      <View style={styles.container}>
        <Row>
          <Col>Min</Col>
          <Col>{stats ? stats.min : '-'}</Col>
        </Row>
        <Row>
          <Col>Max</Col>
          <Col>{stats ? stats.max : '-'}</Col>
        </Row>
        <Row>
          <Col>Average</Col>
          <Col>{stats ? stats.average: '-'}</Col>
        </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    textAlign: 'center'
  }
});
