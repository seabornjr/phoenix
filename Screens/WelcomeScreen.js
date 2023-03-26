import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import UserMenu from '../components/UserMenu'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Rising Phoenix Education</Text>
        <Image source={require('../assets/brandLogo.png')} />
        <TouchableOpacity 
            style={[styles.buttonContainer, styles.shadowProps]}
            onPress={() => navigation.navigate('UserSelection')}
            >
            <Text style={styles.buttonTextCont}>Continue</Text>
        </TouchableOpacity>  
        <UserMenu navigation={navigation}/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 20,
        width: '80%'
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