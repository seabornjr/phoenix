import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ThirdPartyLogin from '../components/ThirdPartyLogin'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.imageContainer}>
            <Image
                source={require('../assets/brandLogo.png')}
            />
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Please Login</Text>
        </View>
    
        <View style={styles.inputContainer}>
          <TextInput
              placeholder='email'
              value={email}
              onChange={text => setEmail(text)}
              style={styles.input}
          />
            <TextInput
              placeholder='password'
              value={password}
              onChange={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
          />
        </View>
       
        <View style={[styles.buttonContainer]}>
            <TouchableOpacity 
                onPress={()=>{
                  
                  navigation.navigate('FocusedUser1HomeScreen')}}
                style={styles.button}
            >
            <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
        </View>

        <Image source={require('../assets/Divider.png')} />

        <ThirdPartyLogin navigation={navigation}/>
        
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Need an account? Register </Text>
            <TouchableOpacity 
                onPress={()=>{navigation.navigate('BuildProfile')}}>
            <Text style={styles.registerHere}>here.</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white'
        
    },
    heading: {
      justifyContent: 'space-evenly',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 15,
      fontSize: 20 
    },
    inputContainer: {
        width: '80%',
        marginTop: 20
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5
        
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        marginBottom: 40,
        borderRadius: 10,
           
    },
    button: {
        backgroundColor: '#FE5244',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        padding: 5,
        margin: 2

    },
    buttonOutline: {
        marginTop: 4,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: "#FE5244",
    },
    imageContainer: {
       marginBottom: 50
    },
    shadowProps: {
      shadowColor: '#00000',
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    footerContainer:{
      flexDirection: 'row',
      marginTop: 50,
    },
    footerText: {
      fontWeight: 'bold',
      fontSize: 18
    },
    registerHere: {
      color: '#FE5244',
      fontWeight: 'bold',
      fontSize: 18
    }
    

})

export default LoginScreen
//padding behavior ensures keyboad won't cover the input fields