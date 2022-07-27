import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PlayerScreen } from '../screens/PlayerScreen';

const Stack = createStackNavigator();

import TabsRoutes from './tabsRoutes';

const Routes = () => { 
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabsRoutes}
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