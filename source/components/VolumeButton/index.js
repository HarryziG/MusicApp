import { Text, TouchableOpacity, StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default function VolumeButton({text, changeVolume, value, active}) {

  return (
    <TouchableOpacity
      onPress={() => {
        changeVolume(value);
      }}
      style={active ? {...styles.button, backgroundColor: colors.blue}
      : {...styles.button, backgroundColor: colors.grayTransp}}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.white,
    fontFamily: fonts.text,
    fontSize: 12
  }
})