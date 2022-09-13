import {memo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PlayerScreen } from '../screens/PlayerScreen';
import {soundsData} from '../data/sounds';
import {useSound} from '../hooks/useSounds';

const Stack = createStackNavigator();

import TabsRoutes from './tabsRoutes';

const Routes = () => {

  const homeSounds = soundsData.slice(0,3);
  let album = "";
  const albums = [];
  soundsData.forEach((item) => {
    if(item.source !== album) {
      album = item.source;
      albums.push({
        album: item.source,
        id: item.id,
        image: item.imageSource
      });
    }
  })

  const globalSound = useSound(soundsData);

  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={memo((props) =>
          <TabsRoutes
            {...props}
            homeSounds={homeSounds}
            albums={albums}
            sounds={soundsData}
            globalSound={globalSound}
          />
        )}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Player"
        options={{headerShown: false}}
        component={memo((props) => <PlayerScreen {...props} globalSound={globalSound}/>)}
      />
    </Stack.Navigator>
		</NavigationContainer>
  );
}

export default Routes;