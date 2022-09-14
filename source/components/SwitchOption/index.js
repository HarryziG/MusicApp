import { View, Text, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import fonts from '../../styles/fonts'
import colors from '../../styles/colors'

export default function SwitchOption({title, description,showBanner, setShowBanner, endAlert, setEndAlert}) {

  function toggleBanner() {
    setShowBanner(!showBanner);
  }

  function toggleEndAlert() {
    setEndAlert(!endAlert);
  }

  return (
    <View style={styles.content}>
      <View style={styles.textContent}>
        <Text style={styles.subTitle}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      {showBanner != undefined ?
        <Switch
          thumbColor={showBanner ? colors.blue : colors.white}
          trackColor={{false: colors.grayTransp}}
          onValueChange={toggleBanner}
          value={showBanner}
        />
        :
        <Switch
          thumbColor={endAlert ? colors.blue : colors.white}
          trackColor={{false: colors.grayTransp}}
          onValueChange={toggleEndAlert}
          value={setEndAlert}
        />
      }
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
    width: 240
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