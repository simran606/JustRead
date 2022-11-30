import React from 'react';
import { View, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';

const SignIn = ({ navigation }) => {
     return(
         <View style={styles.imgContainer}>

              <ImageBackground source={require("../assets/zzzzzImages/bg-img.png")} style={styles.image} alt="bg-img" >

                    <TextInput style={styles.input} placeholder="Username" />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

                  <View style={styles.btn} >
                     <Button title="Sign In" color='black' onPress={() => navigation.navigate('HomePage')} />
                   </View>

                   <View style={styles.btnTwo} >
                     <Button title="Forgot Password ?" color='black' onPress={() => navigation.navigate('Details')} />
                   </View>

                   <View style={styles.btnThree} >
                     <Button title="Didn't Have an Account ? SignUp" color='black' onPress={() => navigation.navigate('SignUp')} />
                   </View>

              </ImageBackground>

        </View>
     )
}

const styles = StyleSheet.create({

    imgContainer: {
      flex:1,
      alignItems: 'center',
      justifyContent:'center'
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
      width: 250,
      margin:20,
      alignSelf:'center'
    },
    btnTwo: {
      width: 250,
      height: 40,
      alignSelf:'center',
      marginTop: 70
    },
    btnThree:{
      width:250,
      alignSelf:'center',
      marginTop: 10
    }
  });

  export default SignIn;





