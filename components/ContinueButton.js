import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ContinueButton = () => {
  const nextPage = ""
    return (
        <TouchableOpacity 
            style={[styles.buttonContainer, styles.shadowProps]}
            onPress={() => navigation.navigate({nextPage})}
            >
            <Text style={styles.buttonTextCont}>Continue</Text>
        </TouchableOpacity>  
    )
}
  


export default ContinueButton

const styles = StyleSheet.create({
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
        marginTop: 150,
        marginBottom: 50

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