import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PlayerScreen } from '../screens/PlayerScreen';

import {soundsData} from '../data/sounds';


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
  console.log(albums);
  
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={function RenderTabs() {
          return (
            <TabsRoutes 
              homeSounds={homeSounds}
              albums={albums}
            />
          )}}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Player"
        options={{headerShown: false}}	
        component={
          function RenderFontConfigurations(props) {
            return (
              <PlayerScreen
                {...props}
              />
            )
          }
        }
      />
    </Stack.Navigator>
		</NavigationContainer>
  );
}

export default Routes;