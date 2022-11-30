import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, StatusBar} from 'react-native';
import Navmenu from './navbar';

const BookPage = ({navigation}) => {
     return(
      <View style={styles.container}>

          <Navmenu />

          <View>

          <Text style={styles.heading}>Thebvhjjhbnmbmbhbbhgh</Text>
            <Image source={require('../assets/Images/1.jpg')} style={styles.image} />
            <Text style={styles.normalText}><Text style={styles.normalTextBold}>Author:</Text> hghjghjgh</Text>
            <Text style={styles.normalText}><Text style={styles.normalTextBold}>Genre:</Text> okkkoko</Text>
            <Text style={styles.description}>An old carpenter carves a little wooden puppet from a mysterious piece of wood that seems to have the ability to talk! He begins to love the little creature like his own son and names him Pinocchio. But the mischievous fellow runs away from his loving father as soon as he learns to walk. The Adventures of Pinocchio by Carlo Collodi follows the misadventures and naughty exploits of this delightfully “human” puppet who in his heart of hearts longs only to become a real boy. </Text>

            {/* <Text>{title}</Text>
            <Image source={img} />
            <Text style={styles.normalText}><Text style={styles.normalTextBold}>Author:</Text> {author}</Text>
            <Text style={styles.normalText}><Text style={styles.normalTextBold}>Genre:</Text> {genre}</Text>
            <Text>{description}</Text> */}
            
            <View style={styles.btn} >
                     <Button title="Read Now" color='#0a66ea' onPress={() => navigation.navigate('PdfScreen')} />
            </View>

            <View style={styles.btn} >
                     <Button title="Review" color='#0a66ea' onPress={() => {navigation.navigate('Review')}} />
            </View>

          </View>

      </View>
     )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight || 10,
  },
    heading:{
      fontSize: 20,
      color: '#0a66ea',
      alignSelf: 'center',
      fontWeight: "900",
      textAlign: 'center',
      margin: 20,
    },
    image: {
      width: 130, 
      height: 180,
      alignSelf: 'center',
      marginBottom: 15
    },
    normalText: {
      fontSize: 14,
      color: '#0a66ea',
      alignSelf: 'center',
    },
    description:{
      fontSize: 14,
      color: '#0a66ea',
      alignSelf: 'center',
      textAlign:'left',
      margin: 20,
      marginTop: 10
    },
    normalTextBold: {
      fontWeight: 'bold'
    },
    btn:{
      width: 250,
      margin:10,
      alignSelf:'center'
    }
});    

export default BookPage;