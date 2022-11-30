import React from 'react';
import { View, StyleSheet, Text, Button, Alert, ImageBackground, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navmenu = () => {
     return(
      <View style={styles.container}>

          <Image source={require("../assets/Images/color_logo.png")} style={styles.image} />

          <View style={styles.btn} >
            <FontAwesomeIcon icon={faBars} style={styles.bar} onPress={() => Alert.alert('Menu Bar')} />
          </View>

      </View>
     )
}

const styles = StyleSheet.create({

    container: {
      borderBottomColor:'#0a66ea',
      borderBottomWidth: 3,
      maxHeight: '8%'
    },
    image: {
      width: 200, 
      height: 100,
      marginTop: -15
    },
    btn: {
      width: 35,
      alignSelf:'center',
      borderColor:'#0a66ea',
      borderWidth: 1,
      position: 'absolute',
      right: 20,
      top: 17,
      padding: 10,
      borderRadius: 8
    },
    bar:{
      color: '#0a66ea',
      alignSelf:'center',
    }
  });

  export default Navmenu;
