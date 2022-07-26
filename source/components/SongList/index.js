import { StyleSheet, Text, View } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import CardMusic from '../CardMusic/index.js';

export function SongList() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Songs</Text>
      <CardMusic />
      <CardMusic />
      <CardMusic />
      
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: 307,
    flex: 1,
    
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.title,
    marginBottom: 14
  }
})