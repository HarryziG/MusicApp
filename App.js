import 'react-native-gesture-handler';

import {StatusBar} from 'expo-status-bar';
import {
	useFonts, 
	Montserrat_700Bold, 
	Montserrat_600SemiBold, 
	Montserrat_400Regular
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Feather';
import * as SplashScreen from 'expo-splash-screen';

import { Profile } from './source/screens/Profile';
import { PlayerScreen } from './source/screens/PlayerScreen';
import { Search } from './source/screens/Search';
import { Home } from './source/screens/Home';

import fonts from './source/styles/fonts';

const Stack = createStackNavigator();

function StackNavigator() {

	return (
		<>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{headerShown: false}}
				/>

				<Stack.Screen
					name="Player"
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
			<StatusBar style="light"/>
		</>
	);
}


const Tabs = createBottomTabNavigator();


export default function App() {
	let [fontsLoaded] = useFonts({ 
		Montserrat_700Bold, 
		Montserrat_600SemiBold, 
		Montserrat_400Regular
	});

	if(!fontsLoaded){
		return <AppLoading />
	}

	return (
		<NavigationContainer>

			<Tabs.Navigator
				tabBarOptions={{
					style: {
						backgroundColor: 'light' == 'light' ? '#fff' : '#222',
						shadowColor: 'light' == 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
						shadowOpacity: 1,
						shadowRadius: 6,
						borderTopEndRadius: 18,
						borderTopStartRadius: 18
						
					},
					labelStyle: {
						fontFamily: fonts.subtitle
					}
					}}
			>
				<Tabs.Screen
					name="Home"
					component={function RenderStackNavigator(props) {
						return <StackNavigator {...props} />
					}}
					options= {{
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={23} />
              ),							
          }}
				/>

				<Tabs.Screen
					name="Search"
					component={function RenderSearch(props) {
						return <Search {...props} />
					}}
					options= {{
              tabBarIcon: ({color}) => (
                <Icon name="search" color={color} size={23} />
              )
          }}
				/>

				<Tabs.Screen
					name="Profile"
					component={function RenderProfile(props) {
						return <Profile {...props} />
					}}
					options= {{
              tabBarIcon: ({color}) => (
                <Icon name="user" color={color} size={23} />
              ) 
          }}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	)
}
