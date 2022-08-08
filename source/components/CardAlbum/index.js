import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function CardAlbum({item}) {

  console.log("aaaa");
  console.log(item);

  return(
    <View style={styles.container}>
      <Image 
        source={{uri: `${item.image}`}} 
        style={styles.albumImg}   
      />
      <Text style={styles.title}>{item.album}</Text>
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
    borderRadius: 12.37,
    resizeMode: 'contain'
  },

  title: {
    color: colors.white,
    fontFamily: fonts.subtitle,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  }
})