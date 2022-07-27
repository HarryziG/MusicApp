import 'react-native-gesture-handler';

import {StatusBar} from 'expo-status-bar';
import {
	useFonts, 
	Montserrat_700Bold, 
	Montserrat_600SemiBold, 
	Montserrat_400Regular
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import Routes from './source/routes';

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
		<>
			<Routes/>
			<StatusBar 
				style={'light'} 
				backgroundColor="transparent"
				translucent
			/>
		</>
	)
}
