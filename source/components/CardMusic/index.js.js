import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function CardMusic() {
  return(
    <View style={styles.container}>
      <View style={styles.image} />

      <View style={styles.description}>
        <Text style={styles.music}>Find my Soul</Text>
        <Text style={styles.author}>Zain Bergson</Text>
      </View>
      <Icon name="more-horizontal" size={15} color={colors.gray}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 307,
    height: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20
    
  }, 

  image: {
    height: 65,
    width: 65,
    marginRight: 18,
    backgroundColor: colors.gray,
    borderRadius: 6,
  },

  description: {
    width:87,
    flex: 1,
    marginRight: 18
  },

  music: {
    fontFamily: fonts.subtitle,
    color: colors.white,
    fontSize: 14
  },

  author: {
    fontFamily: fonts.text,
    color: colors.white
  }
})