import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert, Text} from 'react-native';

const Review = () => {
     return(
         <View style={styles.container}>

            <Text>Review</Text>

            <Text>Twilight of the Idols</Text>
            <Image source={require("../assets//Images/1.jpg")} />
             <Text>Write a Review</Text>
             <TextInput placeholder="write here" />

             <View style={styles.btn} >
               <Button title="Submit" color='black' onPress={() => Alert.alert('Submitted')} />
             </View>

         </View>
     )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
        height: 200, 
        width: 200, 
        resizeMode : 'stretch', 
        margin: 20 ,
        alignSelf: 'center'
    },
    input: {
        height: 35, 
        borderColor: 'gray', 
        borderWidth: 1, 
        width: 300, 
        margin:10, 
        padding:10
    },
    btn: {
         width: 200,
         margin:20,
    },
  });

  export default Review;



