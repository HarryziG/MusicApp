import { SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import Header from '../../components/Header';
import { SongList } from '../../components/SongList';

export function Search({navigation}) {

    return (
      <ScrollView 
        style={styles.background}
        
      >
        <Header title="Pesquisa" />
        <SongList/>
        <SongList/>

      </ScrollView>
    );
}


const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.black,
    }
});

