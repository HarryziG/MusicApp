import { View, Text, StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default function Info({title, description}) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginBottom: 24,
    height: 39,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  title: {
    fontFamily: fonts.subtitle,
    color: colors.white,
    fontSize: 14
  },

  description: {
    fontFamily: fonts.text,
    color: colors.white,
    fontSize: 12
  }
})