import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BackgroundFirstGenScreen = ({navigation}) => {
    const nextPage = "BackgroundIncome"
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Are you going to be a First Generation college student? </Text>
        <View style={styles.optionsRow}>
           <View>
            <TouchableOpacity style={[styles.buttonStyle, styles.shadowProps]}>
                <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
           </View>
            <TouchableOpacity style={[styles.buttonStyle, styles.shadowProps]}>
                <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity 
            style={[styles.buttonContainer, styles.shadowProps]}
            onPress={() => navigation.navigate("BackgroundIncome")}
            >
            <Text style={styles.buttonTextCont}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BackgroundFirstGenScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
        fontSize: 20 
      },
    optionsRow: {
        flexDirection: 'row'
    },
    buttonStyle: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 40, 
        backgroundColor: '#FEFEFE'
    },
    shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    buttonText: {
        padding: 15,
        fontSize: 20
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