import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import NameField from '../components/NameField'

const GuardianInfo = ({navigation}) => {

    const [email, setEmail] = useState('')

  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
            <Text style={styles.heading}>Enter Your Parent or Guardian Information</Text>
        </View>
      
      <View style={styles.inputContainer}>
        <NameField />
        <View style={styles.inputContainer2}>
            <TextInput
                placeholder='email'
                value={email}
                onChange={text => setEmail(text)}
                style={styles.input}
            />
         </View>
      </View>
      <TouchableOpacity 
            style={[styles.buttonContainer, styles.shadowProps]}
            onPress={() => {
                alert('Registraion will be approved pending approval by your legal guardian')
                navigation.navigate("GradeAndSchool")}}
            >
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

    </View>
  )
}

export default GuardianInfo

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    headingContainer: {
        width: '90%'
    },
    heading: {
        justifyContent: 'space-evenly',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
        fontSize: 20 
      },
    inputContainer:{
        width: '90%',
        alignItems: 'center',

    },
    inputContainer2: {
        width: "90%",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingTop: 10
        
    },
    buttonContainer:{
        width: '80%',
        backgroundColor: '#FE5244',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 50

    },
    buttonText: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        margin: 2
    },
    shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    }
})