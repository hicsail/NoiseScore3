import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { TouchableRipple } from 'react-native-paper';
import Map from '../pages/Map.page';
import Measure from '../pages/Measure.page';
import Account from '../pages/Account.page';

export default function NavigationBar() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'map', title: 'Map', focusedIcon: 'map', unfocusedIcon: 'map-outline'},
    { key: 'measure', title: 'Measure', focusedIcon: 'microphone', unfocusedIcon: 'microphone-outline' },
    { key: 'account', title: 'Account', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: () => <Map />,
    measure: () => <Measure />,
    account: () => <Account />,
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
