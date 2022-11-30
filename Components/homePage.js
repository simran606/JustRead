import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList} from 'react-native';
import data from './data';
import Item from './Item';
import Navmenu from './navbar';

export default function HomePage({navigation}) {

    const renderItem = ({ item }) => (
          <Item title={item.title} genre={item.genre} img={item.img}/>
     )

      
        return(
          <SafeAreaView style={styles.container} >

          <Navmenu />

            <FlatList 
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    container: {
      flex:1,
      marginTop: StatusBar.currentHeight || 0,
    },
  });
