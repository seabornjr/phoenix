import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PersonalityScreen2 = ({navigation}) => {
  return (
    <>
        <View style={styles.container}>
            
            <Text style={styles.heading}>Please select the option that closely aligns with your goal</Text>
            
            <View style={[styles.cardDiv, styles.shadowProps]}>
                <View style={styles.textDiv}>
                    <Text style={styles.question}>You are aligned towards a certain field but not sure what exactly to pursue.</Text>
                </View>
                <View style={styles.answerRow}>
                    <TouchableOpacity onPress={()=> navigation.navigate('PersonalityScreen3')}><Image source={require('../assets/CircleNoButton.png')}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Preferences2_1')}><Image source={require('../assets/CircleYesButton.png')}/></TouchableOpacity>
                </View>
            </View>

        </View>
    </>
  )
}

export default PersonalityScreen2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    heading: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
        fontSize: 20,
        width: '80%'
      },
    cardDiv:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 300,
        backgroundColor: '#f7beba',
        borderRadius: 10,
        marginTop: 20
        
    },
    textDiv: {
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
    },
    question: {
        width: '80%',
        fontSize: 16
    },
    answerRow: {
        flexDirection: 'row',
        marginTop: 40
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
        marginTop: 10,
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