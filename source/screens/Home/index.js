import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

import {SongList} from '../../components/SongList/';
import {AlbumList} from '../../components/AlbumList/';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Home({homeSounds, albums, globalSound}) {
	const navigation = useNavigation();
	const {soundPlayingNow, pauseSound, playSound, showBanner, actualSoundData} = globalSound;

	return (

		<SafeAreaView style={styles.container}>
		<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
				<View style={styles.header}>
					<Text style={styles.title}>{
						showBanner && soundPlayingNow ? actualSoundData.title : homeSounds[0].author
					}</Text>
				</View>
				{soundPlayingNow ?
					<TouchableOpacity style={styles.playButton} onPress={pauseSound}>
						<Icon name={"pause"} size={25} color={colors.white}/>
					</TouchableOpacity>
				:
					<TouchableOpacity style={styles.playButton} onPress={() => playSound()}>
						<Icon name={"play"} size={25} color={colors.white}/>
					</TouchableOpacity>
				}

			<SongList
				navigation = {navigation}
				sounds = {homeSounds}
				playSound = {playSound}
			/>

			<AlbumList
				albums={albums}
			/>
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
		paddingLeft:30,
		paddingRight: 90,
		backgroundColor: colors.gray,

		justifyContent: 'flex-end'

	},

	title: {
		color: colors.white,
		marginBottom: 12,
		fontSize: 24,
		fontFamily: fonts.title,
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
