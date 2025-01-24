import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export interface RecordControlsProps {
  startRecording: () => void;
  stopRecording: () => void;
}

export default function RecordControls(props: RecordControlsProps) {
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handlePress = () => {
    if (isRecording) {
      props.stopRecording();
    } else {
      props.startRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <Button mode='contained' icon='delete'>Clear</Button>
      <Button mode='contained' icon='stop' onPress={handlePress}>{isRecording ? 'Stop' : 'Start'}</Button>
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
