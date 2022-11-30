import React from 'react';
import { View, StyleSheet, Image, Text, StatusBar,Button, Alert, Pressable } from 'react-native';


const Item = ({title, img, genre,},{navigation}) => {
    return(

      // <Pressable onPress={() => navigation.navigate('BookPage')} >

        <View style={styles.container} >

             <View style={styles.SubContainer}>

                <Text style={styles.heading}>{title}</Text>
                 <Image source={img} style={styles.image}/> 
                 <Text style={styles.normalText}><Text style={styles.normalTextBold}>Genre:</Text> {genre}</Text>
             
                 <View style={styles.btn} >
                         <Button title="View Details" color='#0a66ea'  />
                 </View>

             </View>

        </View>

        // </Pressable>
        
    );
}

export default Item;

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: "center",
      marginTop: StatusBar.currentHeight || 0,
    },
    SubContainer: {
        margin: 15,
        justifyContent: "center",
        borderColor: '#0a66ea', 
        borderWidth: 1, 
        borderRadius: 18,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width: 300
      },
      heading:{
        fontSize: 19,
        color: '#0a66ea',
        alignSelf: 'center',
        fontWeight: "bold",
        textAlign: 'center'
      },
      image: {
        width: 130, 
        height: 180,
        alignSelf: 'center',
        margin: 15
      },
      normalText: {
        fontSize: 14,
        color: '#0a66ea',
        alignSelf: 'center'
      },
      normalTextBold: {
        fontWeight: 'bold'
      },
      btn: {
        width: 250,
        margin:20,
        alignSelf:'center'
      },
});    