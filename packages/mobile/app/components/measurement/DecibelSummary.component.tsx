import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const Row: React.FC<{ children: ReactNode }> = ({ children}) => {
  return <View style={styles.row}>{children}</View>;
};

const Col: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Text style={styles.col}>{children}</Text>;
};

export default function DecibelSummary() {
  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.header}>Decibels Measured</Text>

      <View style={styles.container}>
        <Row>
          <Col>Min</Col>
          <Col>49.50</Col>
        </Row>
        <Row>
          <Col>Max</Col>
          <Col>90.00</Col>
        </Row>
        <Row>
          <Col>Average</Col>
          <Col>59.82</Col>
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
