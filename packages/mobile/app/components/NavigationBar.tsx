import { useState } from 'react';
import { Text, BottomNavigation } from 'react-native-paper';
import { TouchableRipple } from 'react-native-paper';

const MapRoute = () => <Text>Map</Text>;

const MeasureRoute = () => <Text>Measure</Text>;

const AccountRoute = () => <Text>Account</Text>;

export default function NavigationBar() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'map', title: 'Map', focusedIcon: 'map', unfocusedIcon: 'map-outline'},
    { key: 'measure', title: 'Measure', focusedIcon: 'microphone', unfocusedIcon: 'microphone-outline' },
    { key: 'account', title: 'Account', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: MapRoute,
    measure: MeasureRoute,
    account: AccountRoute,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderTouchable={({key, ...props}) => (<TouchableRipple key={key} {...props} />)}
      />
    </>
  );
};
