import React from 'react';
import { View, StyleSheet, TextInput, Button, Alert, ImageBackground} from 'react-native';

const SignUp = ({ navigation }) => {
     return(
         <View style={styles.imgContainer}>

              <ImageBackground source={require("../assets/Images/bg-img.png")} style={styles.image} alt="bg-img" >

                    <TextInput style={styles.input} placeholder="Username" />
                    <TextInput style={styles.input} placeholder="E-mail" />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                    <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />

                    <View style={styles.btn} >
                     <Button title="Sign Up" color='black' onPress={() => navigation.navigate('HomePage')} />
                   </View>

              </ImageBackground>

        </View>
     )
}

const styles = StyleSheet.create({

    imgContainer: {
      flex:1,
      alignItems: 'center',
    },
    image: {
      flex: 1,
      width: '100%', 
      height: '100%',
      resizeMode: "stretch",
      justifyContent: "center",
    },
    input: {
      height: 50, 
      borderColor: 'white', 
      borderWidth: 3, 
      width: 300, 
      margin:10, 
      padding:10,
      alignSelf:'center',
      color:'black',
      backgroundColor:'white'
    },
    btn: {
      width: 200,
      margin:20,
      alignSelf:'center'
    },
  });

  export default SignUp;
