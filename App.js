import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
import HomePage from './Components/homePage';
import BookPage from './Components/bookPage';
import PdfScreen from './Components/pdfscreen';
import Review from './Components/reviewPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
       <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="PdfScreen">
         <Stack.Screen name="SignIn" component={SignIn} />
         <Stack.Screen name="SignUp" component={SignUp} />
         <Stack.Screen name="HomePage" component={HomePage} />
         <Stack.Screen name="BookPage" component={BookPage} />
         <Stack.Screen name="PdfScreen" component={PdfScreen} />
         <Stack.Screen name="Review" component={Review} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}