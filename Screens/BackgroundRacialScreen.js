import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RaceEthnicityDropdown from '../components/RaceEthnicityDropdown'

const BackgroundRacialScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>What is yor racial background?  </Text>
            <RaceEthnicityDropdown />
            <Text style={styles.disclaimer}>We use this information to assess your profile better and recommend financial aid, if necessary.</Text>
            <TouchableOpacity 
                    style={[styles.buttonContainer, styles.shadowProps]}
                    onPress={() => navigation.navigate("BackgroundIncome")}
                    >
                    <Text style={styles.buttonTextCont}>Continue</Text>
            </TouchableOpacity>
        </View>
      )
    }
    
    export default BackgroundRacialScreen
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
           
        },
        heading: {
            justifyContent: 'space-evenly',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 50,
            fontSize: 20,
            width: '80%'
          },
        shadowProps: {
            shadowColor: '#00000',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 1,
            shadowRadius: 3,
        },
        disclaimer:{
            textAlign: 'center',
            marginTop: 100,
            width: '80%'
        },
        buttonContainer:{
            width: '90%',
            backgroundColor: '#FE5244',
            borderRadius: 10,
            marginTop: 50,
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