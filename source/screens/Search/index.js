import { SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import Header from '../../components/Header';
import { SongList } from '../../components/SongList';

export function Search({sounds}) {
  const navigation = useNavigation();
    return (
      <ScrollView 
        style={styles.background}
        
      >
        <Header title="Pesquisa" />
        <SongList navigation = {navigation} sounds={sounds} />
        <SongList navigation = {navigation} sounds={sounds} />

      </ScrollView>
    );
}


const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.black,
    }
});

