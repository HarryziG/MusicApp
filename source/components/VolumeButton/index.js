import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default function VolumeButton({text}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 49.49,
    height: 19,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grayTransp,
    
  },
  text: {
    color: colors.white,
    fontFamily: fonts.text,
    fontSize: 12
  }
})