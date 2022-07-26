import { View, Text, StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 91 , 
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'flex-end',
    paddingBottom: 14,
    paddingHorizontal: 30,
    marginBottom: 46,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.title,
    fontSize: 24
  }
})