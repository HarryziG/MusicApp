import { StyleSheet, Text, View } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function CardAlbum({item}) {
  
  return(
    <View style={styles.container}>
      <View style={styles.albumImg} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 134,
    alignItems: 'center',
    marginRight: 15
  },
  albumImg: {
    width: 134,
    height: 134,
    backgroundColor: colors.gray,
    borderRadius: 12.37
  },

  title: {
    color: colors.white,
    fontFamily: fonts.subtitle,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  }
})