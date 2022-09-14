import {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';

import Header from '../../components/Header';
import Info from '../../components/Infos';
import SwitchOption from '../../components/SwitchOption';
import VolumeButton from '../../components/VolumeButton';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Profile({globalSound}) {
	const {
		changeVolume,
		volume,
		showBanner,
		setShowBanner,
		endAlert,
		setEndAlert
	} = globalSound;

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
						<VolumeButton
							value={0.3}
							changeVolume={changeVolume}
							text="Baixo"
							active={volume === 0.3}
						/>
						<VolumeButton
							value={0.5}
							changeVolume={changeVolume}
							text="Médio"
							active={volume === 0.5}
						/>
						<VolumeButton
							value={1}
							changeVolume={changeVolume}
							text="Alto"
							active={volume === 1}
						/>
					</View>

					<SwitchOption
						title={"Mostrar música na primeira tela"}
						description={"Mostra a música atual em formato de banner na primeira tela."}
						showBanner={showBanner}
						setShowBanner={setShowBanner}
					/>
					<SwitchOption
						title={"Vibrar ao terminar música"}
						description={"Emite uma pequena vibração ao terminar uma música ou podcast"}
						endAlert={endAlert}
						setEndAlert={setEndAlert}
					/>
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
