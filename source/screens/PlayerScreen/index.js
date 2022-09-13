import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from '@expo/vector-icons/Feather';

const screenWidth = Dimensions.get('window').width

import { soundsData } from '../../data/sounds'
import { MusicSlider } from '../../components/MusicSlider';

import colors from '../../styles/colors';

export function PlayerScreen({route, globalSound}) {

	const {
		sound,
		actualSoundData,
		soundPlayingNow,
		soundsData,
		playSound,
		handleChangeActualSound,
		pauseSound
	} = globalSound

	return (
		<LinearGradient
			colors={['#0500FF', '#4341AC', '#16145B', '#000']}
			start={{ x: 1, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.container}
		>
			<Text style={styles.baseText} >{actualSoundData.source}</Text>

			<Image style={{ width: screenWidth * 0.9, height: screenWidth * 0.9, resizeMode: 'cover' }} source={{uri: actualSoundData.imageSource}} />

			<View>
				<Text style={[styles.baseText, styles.title]} >{actualSoundData.title}</Text>
				<Text style={styles.baseText} >{actualSoundData.author}</Text>
			</View>

			<View style={{width: screenWidth * 0.9, height: 50}}>
				<MusicSlider
					soundDuration={actualSoundData?.details?.durationMillis}
					sound={sound}
				/>
			</View>

			<View style={styles.menuPlayer}>
				<TouchableOpacity onPress={() => { handleChangeActualSound('-') }}>
					<Icon name={"skip-back"} size={25} color={colors.white} />
				</TouchableOpacity>

				{soundPlayingNow ? <TouchableOpacity onPress={pauseSound}>
						<Icon name={"pause"} size={25} color={colors.white}/>
					</TouchableOpacity>
					: <TouchableOpacity onPress={() => playSound()}>
					<Icon name={"play"} size={25} color={colors.white}/>
					</TouchableOpacity>
				}

				<TouchableOpacity onPress={() => { handleChangeActualSound('+') }}>
				<Icon name={"skip-forward"} size={25} color={colors.white} />
				</TouchableOpacity>
			</View>
    </LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	menuPlayer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	baseText: {
		color: 'white',
		textAlign: 'center',
	},
	title: {
		fontWeight: 'bold',
	},
})
