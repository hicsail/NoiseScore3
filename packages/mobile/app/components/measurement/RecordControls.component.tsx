import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function RecordControls() {
  return (
    <View style={styles.container}>
      <Button mode='contained' icon='delete'>Clear</Button>
      <Button mode='contained' icon='stop'>Stop</Button>
      <Button mode='contained' icon='arrow-right-bold'>Next</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  }
});
