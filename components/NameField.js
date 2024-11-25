import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const NameField = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')


  return (
    <View style={styles.containerDiv}>
    <View style={styles.container}>
        <TextInput
            placeholder='First Name'
            value={first_name}
            onChange={text => setFirstName(text)}
            style= {styles.textInput}
           
        />
    </View>
    <View style= {styles.container}>
          <TextInput
            placeholder='Last Name'
            value={last_name}
            onChange={text => setLastName(text)}
            style= {styles.textInput}
        />
    </View>
    </View>
  )
}

export default NameField

const styles = StyleSheet.create({
    containerDiv:{
      paddingTop: 10,
      width: "100%",
      alignItems: "center"

    },
    container: {
        width: "90%",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    textInput: {
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingTop: 10
        
    }
})