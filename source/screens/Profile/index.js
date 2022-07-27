import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';

import Header from '../../components/Header';
import Info from '../../components/Infos';
import SwitchOption from '../../components/SwitchOption';
import VolumeButton from '../../components/VolumeButton';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Profile({ navigation }) {
	return (
		<ScrollView 
			style={styles.background}
			contentContainerStyle= {{paddingBottom: 50}}	
		>
			<Header title={"Configurações"}/>

			<View style={styles.content}>
				<Text style={styles.title}>Conta</Text>

				<View style={styles.dataContainer}>
					<Info  
						title={"Usuário"}
						description={"@viniciusLatini"}
					/>
					<Info  
						title={"E-mail"}
						description={"viniciuslatini2001@gmail.com"}
					/>
					<Info  
						title={"Plano"}
						description={"Premium live music"}
					/>
				</View>

				<Text style={styles.configTitle}>Configurações Globais</Text>

				<View style={styles.volumeContent}>
					<Text style={styles.subTitle}>Volume geral</Text>
					<View style={styles.buttonsContainer}>
						<VolumeButton text="Baixo"/>
						<VolumeButton text="Médio"/>
						<VolumeButton text="Alto"/>  
					</View>

					<SwitchOption/>
					<SwitchOption/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: colors.black,
	}, 
	content: {
		flex: 1,
		paddingHorizontal: 29
	},
	title: {
		color: colors.white,
		fontFamily: fonts.title,
		fontSize: 16
	},
	dataContainer: {
		marginTop: 28
	},
	configTitle: {
		marginTop: 16,
		color: colors.white,
		fontFamily: fonts.title,
		fontSize: 16
	},
	volumeContent: {
		marginTop: 28
	},
	subTitle: {
		fontFamily: fonts.subtitle,
    color: colors.white,
    fontSize: 14,
	},
	buttonsContainer: {
		marginTop: 10,
		height: 19,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})
