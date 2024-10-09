import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const PreferencesScreen2_1 = ({navigation}) => {

    const [field_title, setFieldTitle] = useState("")
   

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Select a field of study that interests you</Text>
        <View style={styles.textField}>
            <TextInput 
                    placeholder='Engineering, Math, etc...'
                    value={field_title}
                    onChange={text => setFieldTitle(text)}
                    style= {styles.textInput}
            />
         </View>

         <TouchableOpacity 
            style={[styles.buttonContainer, styles.shadowProps]}
            onPress={() => navigation.navigate('Preferences1_2')}
            >
            <Text style={styles.buttonTextCont}>Continue</Text>
        </TouchableOpacity>  

    </View>
  )
}

export default PreferencesScreen2_1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },
    heading: {
        justifyContent: 'space-evenly',
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 50,
        fontSize: 20,
        width: '80%'
      },
    textField: {
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        marginTop: 10

    },
    textInput: {
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'left',
        paddingTop: 15
    },
    shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    buttonContainer:{
        width: '90%',
        backgroundColor: '#FE5244',
        borderRadius: 10,
        marginTop: 350,
        

    },
    buttonTextCont: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        margin: 2
    }
  
})