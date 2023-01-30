import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function CardMusic({navigation, sound, playSound}) {



  return(
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        playSound(sound);
        navigation.navigate("Player", {
          selectedSound: sound
        })
    }}
    >
      <Image
        style={styles.image}
        source={{uri: `${sound.imageSource}`}}
      />

      <View style={styles.description}>
        <Text style={styles.music}>{sound.title}</Text>
        <Text style={styles.author}>{sound.author}</Text>
      </View>
      <Icon name="more-horizontal" size={15} color={colors.gray}  />
    </TouchableOpacity>
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
    resizeMode: 'contain'
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