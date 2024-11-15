import { PaperProvider } from 'react-native-paper';
import NavigationBar from './components/NavigationBar';


export default function Index() {
  return (
    <PaperProvider>
      <NavigationBar />
    </PaperProvider>
  );
}
