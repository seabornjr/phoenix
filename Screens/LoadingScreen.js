import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Countdown from '../components/Countdown';

const LoadingScreen = ({navigation}) => {

  function ExitloadScreen() {
     setTimeout(() => {
      return navigation.navigate('FocusedUser1HomeScreen')
     }, 5000); 
    }
    ExitloadScreen();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/gears1.png')} />
      <Text style={styles.message}>Get Ready!...</Text>  
      <Countdown />
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: .75,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    message: {
        marginTop: 50
    },

})