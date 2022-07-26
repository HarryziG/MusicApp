import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CardAlbum } from './CardAlbum';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function AlbumList() {

  const data = [
    {
      id: 1,
      title: 'Album 1'
    },
    {
      id: 2,
      title: 'Album 2'
    },
    {
      id: 3,
      title: 'Album 3'
    },
  ]

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Albums</Text>
      <FlatList 
        data={data}
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