import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';



const ThirdPartyLogin = ({navigation}) => {

    const GoogleLogo = require('../assets/GoogleLogo.png');
    const FacebookLogo = require('../assets/FacebookLogo.png');
    const AppleLogo = require('../assets/AppleLogo.png');

    const handleGoogle = () => {
        navigation.navigate('FocusedUser1HomeScreen')
        return alert("This will allow the user to authenticate with their Google account.");
    };
    const handleFacebook = () => {
        navigation.navigate('FocusedUser1HomeScreen')
        return alert("This will allow the user to authenticate with their Meta Account...");
    };
    const handleApple = () => {
        navigation.navigate('FocusedUser1HomeScreen')
        return alert("This will allow the user to autheticate with their Apple id");
    };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoogle} style={[styles.buttonStyle, styles.shadowProps]}>
          <Image source={GoogleLogo}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFacebook} style={[styles.buttonStyle, styles.shadowProps]}>
          <Image source={FacebookLogo}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleApple} style={[styles.buttonStyle, styles.shadowProps]}>
          <Image source={AppleLogo}/>
      </TouchableOpacity>
    </View>
  )
}

export default ThirdPartyLogin

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        marginTop: 25
    },
    buttonStyle: {
        padding: 5
    },
    shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: .6,
        shadowRadius: 2,
      }
})