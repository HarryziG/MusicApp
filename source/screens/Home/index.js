import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import {SongList} from '../../components/SongList';
import {AlbumList} from '../../components/AlbumsList';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Home({ navigation }) {

	
	return (

		<SafeAreaView style={styles.container}>
		<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
				<View style={styles.header}>
					<Text style={styles.title}>Zain Bergson</Text>
				</View>
				<TouchableOpacity style={styles.playButton}>
					<Icon name={"play"} size={25} color={colors.white}/>
				</TouchableOpacity>
			
			<SongList />

			<AlbumList />
		</ScrollView>
	</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},

  text: {
    fontSize: 42,
  },
	contentContainer: {
		alignItems: 'center',
		paddingBottom: 15
		
	},

	header: {
		width: Dimensions.get('screen').width,
		height: 255,
		
		backgroundColor: colors.gray,

		justifyContent: 'flex-end'
	},

	title: {
		color: colors.white,
		marginLeft: 30,
		marginBottom: 12,
		fontSize: 24,
		fontFamily: fonts.title
	},

	playButton: {
		backgroundColor: colors.blue,
		height: 60,
		width: 60,
		borderRadius: 38.5,
		alignSelf: 'flex-end',
		marginTop: -30,
		marginRight: 30,

		alignItems:'center',
		justifyContent: 'center'
	}, 

});

