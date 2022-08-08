import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CardAlbum } from '../CardAlbum/';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function AlbumList({albums}) {

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Albums</Text>
      <FlatList 
        data={albums}
        renderItem={CardAlbum}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: 307,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.title,
    marginBottom: 14
  }
})