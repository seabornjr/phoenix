import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = () => {
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
       
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={()=>{}}
                style={styles.button}
            >
            <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>{}}
                style={[styles.button, styles.buttonOutline]}
            >
            <Text style={styles.button}>Register</Text>
            </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        
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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        
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
        marginTop: 5,
        borderWidth: 2,
        backgroundColor: "#FE5244",
    },
    imageContainer: {
       marginBottom: 50
    }
    

})

export default LoginScreen
//padding behavior ensures keyboad won't cover the input fields