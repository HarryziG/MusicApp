import { View, Text, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import fonts from '../../styles/fonts'
import colors from '../../styles/colors'

export default function SwitchOption() {
  const [isEnabled,setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.content}>
      <View style={styles.textContent}>
        <Text style={styles.subTitle}>Mostrar música na primeira tela</Text>
        <Text style={styles.description}>
          Mostra a música atual em formato de banner na primeira tela.
        </Text>
      </View>
      <Switch 
        thumbColor={isEnabled ? colors.blue : colors.white}
        trackColor={{false: colors.grayTransp}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 24,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textContent: {
    width: 250
  },
  subTitle: {
    fontFamily: fonts.subtitle,
    color: colors.white,
    fontSize: 14,
  },
  description: {
    fontFamily: fonts.text,
    color: colors.white,
    fontSize: 12
  }
})